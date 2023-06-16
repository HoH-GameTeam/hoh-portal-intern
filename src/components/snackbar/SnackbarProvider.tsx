import React, { createContext, useContext, useState, useCallback } from 'react';

import { SnackbarProps } from '@mui/material/Snackbar';
import Snackbar from './Snackbar';

/* -------------------------------------------------------------------------- */

interface SnackbarContextValue {
  addSnackbar: (message, status?: 'error' | 'success', option?) => void;
}

const SnackbarContext = createContext<SnackbarContextValue>(null);

export const useSnackbar = () => {
  const context = useContext(SnackbarContext);

  if (!context)
    throw new Error('useSnackbarContext must be use inside SnackbarProvider');

  return context;
};

const SnackbarProvider = ({ children }: { children: React.ReactChild }) => {
  const [snackbarProps, setSnackbarProps] = useState<{
    message: string;
    status: 'error' | 'success' | null;
    options: any;
  }>({
    message: '',
    status: null,
    options: null,
  });
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const addSnackbar = useCallback(
    (message, status?, options?: SnackbarProps) => {
      setSnackbarProps({ message, status, options });
      setIsOpen(true);
    },
    [],
  );

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <SnackbarContext.Provider value={{ addSnackbar }}>
      {isOpen && (
        <Snackbar isOpen={isOpen} setIsOpen={setIsOpen} {...snackbarProps} />
      )}
      {children}
    </SnackbarContext.Provider>
  );
};

export default SnackbarProvider;
