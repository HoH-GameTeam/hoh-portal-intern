import React, { createContext, useContext, useReducer } from 'react';
import { CURRENCY, FIAT } from '../constants/localStorage';
import { getLocalStorage, setStorageCurrency } from '../auth/utils';
import { Currency } from '../graphql/index';
import { useCurrenciesContext } from './CurrenciesContext';
import { localStringNumber } from '../utils/number-help';

type MyBet = {
  currencyId: string;
  totalBet: number;
  totalWin: number;
  totalLose: number;
  totalProfit: number;
  profits: number[];
};

type ShowMGame = {
  gameId: string;
  show: boolean;
};

interface GlobalContextState {
  viewInFiat: {
    status: boolean;
    usdFiat: {
      name: string;
      rate: number;
    };
  };
  storageCurrency: Currency | null;
  myBet: MyBet | null;
  showMiniGame: object;
}

interface GlobalContextValue extends GlobalContextState {
  updateViewInFiat: (state: { status: boolean; fiat?: any }) => void;
  getCurrencyAmount: (
    amount: number,
    currency: Currency,
    showInUsd?: boolean,
  ) => string;
  resetMyBet: (currencyId: string) => void;
  addMyBet: (betAmount: number, betProfit: number) => void;
  setShowMiniGame: (gameId: string, show: boolean) => void;
}

const initialState: GlobalContextState = {
  viewInFiat: {
    status: false,
    usdFiat: {
      name: 'usd',
      rate: 0,
    },
  },
  storageCurrency: null,
  myBet: {
    currencyId: '',
    totalBet: 0,
    totalWin: 0,
    totalLose: 0,
    totalProfit: 0,
    profits: [],
  },
  showMiniGame: {},
};

const reducer = (state: GlobalContextState, action: any) => {
  if (action.type === 'UPDATE_VIEW_FIAT') {
    return {
      ...state,
      viewInFiat: {
        ...action.payload,
      },
    };
  }
  if (action.type === 'UPDATE_STORAGE_CURRENCY') {
    return {
      ...state,
      storageCurrency: action.payload,
    };
  }
  if (action.type === 'RESET_MYBET') {
    const currencyId = action.payload;
    return {
      ...state,
      myBet: {
        currencyId,
        totalBet: 0,
        totalWin: 0,
        totalLose: 0,
        totalProfit: 0,
        profits: [0],
      },
    };
  }
  if (action.type === 'ADD_MYBET') {
    const { betAmount, betProfit } = action.payload;
    return {
      ...state,
      myBet: {
        ...state.myBet,
        totalBet: state.myBet.totalBet + betAmount,
        totalWin:
          betProfit > 0 ? state.myBet.totalWin + 1 : state.myBet.totalWin,
        totalLose:
          betProfit < 0 ? state.myBet.totalLose + 1 : state.myBet.totalLose,
        totalProfit: state.myBet.totalProfit + betProfit,
        profits: [...state.myBet.profits, state.myBet.totalProfit + betProfit],
      },
    };
  }
  if (action.type === 'UPDATE_SHOW_MINIGAME') {
    const { gameId, show } = action.payload;
    const cp = { ...state.showMiniGame };
    cp[gameId] = show;
    console.log(cp);
    return {
      ...state,
      showMiniGame: cp,
    };
  }
  return state;
};

export const GlobalContext = createContext<GlobalContextValue | null>(null);

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);

  if (!context)
    throw new Error(
      'GlobalContext context must be use inside GlobalContextProvider',
    );

  return context;
};

export const GlobalContextProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { currencies } = useCurrenciesContext();

  const updateViewInFiat: (state: { status: boolean; fiat?: any }) => void = (
    state,
  ) => {
    dispatch({
      type: 'UPDATE_VIEW_FIAT',
      payload: {
        ...state,
      },
    });
    // TODO: default is usd, change when update fiat
    // localStorage.setItem(FIAT, JSON.stringify(state));
    localStorage.setItem(FIAT, JSON.stringify(state.status));
  };

  const getCurrencyAmount: (
    cryptoAmount: number,
    currency: Currency,
    showInUsd?: boolean,
  ) => string = (
    cryptoAmount: number,
    currency: Currency,
    showInUsd = false,
  ) => {
    if (!currency?.decimalDigits && !currency?.equivalentUsdRate)
      return `${cryptoAmount}`;

    if (showInUsd) {
      const usdCurrencyAmount = localStringNumber(
        cryptoAmount * currency.equivalentUsdRate,
      );
      return usdCurrencyAmount;
    }

    if (state.viewInFiat.status) {
      const fiatCurrencyAmount = localStringNumber(
        cryptoAmount * currency.equivalentUsdRate,
      );
      return `$${fiatCurrencyAmount}`;
    }
    return localStringNumber(cryptoAmount, currency.decimalDigits);
  };

  const setStorageCurrencyToState = () => {
    const storageCurrency = JSON.parse(getLocalStorage(CURRENCY)!);
    // const woCrypto = currencies?.find((currency) =>
    //   currency?.id?.includes('999999'),
    // );
    const funCrypto = `{"__typename":"Currency","id":"2","name":"FUN","shortName":"fun","type":"CRYPTO","decimalDigits":3,"equivalentUsdRate":0,"blockchainNetworks":null}`;
    if (storageCurrency) {
      dispatch({
        type: 'UPDATE_STORAGE_CURRENCY',
        payload: storageCurrency,
      });
    } else {
      dispatch({
        type: 'UPDATE_STORAGE_CURRENCY',
        payload: funCrypto,
      });
      setStorageCurrency(funCrypto);
    }
  };

  const resetMyBet: (currencyId: string) => void = (currencyId) => {
    dispatch({
      type: 'RESET_MYBET',
      payload: currencyId,
    });
  };

  const addMyBet: (betAmount: number, betProfit: number) => void = (
    betAmount,
    betProfit,
  ) => {
    dispatch({
      type: 'ADD_MYBET',
      payload: { betAmount, betProfit },
    });
  };

  const setShowMiniGame: (gameId: string, show: boolean) => void = (
    gameId,
    show,
  ) => {
    console.log(gameId, show);
    dispatch({
      type: 'UPDATE_SHOW_MINIGAME',
      payload: { gameId, show },
    });
  };

  React.useEffect(() => {
    window.addEventListener('storage', setStorageCurrencyToState);
    return () => {
      window.onstorage = null;
    };
  }, [currencies]);

  React.useEffect(() => {
    // set default crypto is WO
    const storageCurrency = JSON.parse(getLocalStorage(CURRENCY)!);
    const funCrypto = currencies?.find((currency) =>
      currency?.id.includes('2'),
    );
    if (storageCurrency && storageCurrency?.id === '2') {
      dispatch({
        type: 'UPDATE_STORAGE_CURRENCY',
        payload: storageCurrency,
      });
    } else {
      dispatch({
        type: 'UPDATE_STORAGE_CURRENCY',
        payload: funCrypto,
      });
      setStorageCurrency(funCrypto);
    }
    // setStorageCurrencyToState();
  }, [currencies]);

  React.useEffect(() => {
    // TODO: storage fiat is boolean change when update Fiat
    const storageFiat = JSON.parse(getLocalStorage(FIAT)!);
    dispatch({
      type: 'UPDATE_VIEW_FIAT',
      payload: {
        status: storageFiat,
      },
    });
  }, []);

  const contextValue = React.useMemo(() => {
    return {
      ...state,
      updateViewInFiat,
      getCurrencyAmount,
      resetMyBet,
      addMyBet,
      setShowMiniGame,
    };
  }, [state]);

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};
