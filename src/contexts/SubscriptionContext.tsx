/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useContext, useState } from 'react';
import { useSubscription } from '@apollo/client';
import { useSnackbar } from '../components/snackbar';
import { WalletChangedDocument } from '../graphql';

interface SubscriptionContextValue {
  subData: any;
}
const initialState: SubscriptionContextValue = {
  subData: null,
};

export const SubscriptionContext =
  createContext<SubscriptionContextValue | null>(null);

export const useSubscriptionContext = () => {
  const context = useContext(SubscriptionContext);
  if (!context)
    throw new Error(
      'useSubscriptionContext must be use inside SubscriptionProvider',
    );
  return context;
};

export const SubscriptionProvider = ({ children }: any) => {
  const [subData, setSubData] = useState(initialState);
  const { addSnackbar } = useSnackbar();

  useSubscription(WalletChangedDocument, {
    // variables:{userId: }
    onData: ({ data }: any) => {
      addSnackbar(`Successful, balance change: ${data.amount}`);
    },
  });

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <SubscriptionContext.Provider value={{ ...subData }}>
      {children}
    </SubscriptionContext.Provider>
  );
};
