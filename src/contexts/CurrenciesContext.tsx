/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useContext, useEffect, useReducer } from 'react';

import { Currency, useCurrenciesQuery } from '../graphql';

interface CurrenciesContextState {
  currencies: Currency[];
}

const initialState: CurrenciesContextState = {
  currencies: [],
};

const reducer = (state: CurrenciesContextState, action: any) => {
  if (action.type === 'GET_CURRENCIES') {
    const currencies = [...action.payload.currencies].filter((currency) => {
      // HOH coin
      if (currency?.id === 98) return false;
      return true;
    });
    return {
      ...state,
      currencies,
    };
  }
  return state;
};

export const CurrenciesContext = createContext<CurrenciesContextState | null>(
  null,
);

export const useCurrenciesContext = () => {
  const context = useContext(CurrenciesContext);

  if (!context)
    throw new Error(
      'useCurrenciesContext context must be use inside AuthProvider',
    );

  return context;
};

export const CurrenciesProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { data } = useCurrenciesQuery();
  useEffect(() => {
    if (data?.currencies) {
      dispatch({
        type: 'GET_CURRENCIES',
        payload: {
          currencies: data.currencies,
        },
      });
    }
  }, [data?.currencies]);

  return (
    <CurrenciesContext.Provider value={{ ...state }}>
      {children}
    </CurrenciesContext.Provider>
  );
};
