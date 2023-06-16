import React, { useState, ReactNode } from 'react';

import { Navigate, useLocation, useNavigate } from 'react-router-dom';
// components
import LoadingScreen from '../components/loading-screen';
//
import { useAuthContext } from './useAuthContext';

// ----------------------------------------------------------------------

type AuthGuardProps = {
  children: ReactNode;
};

export default function AuthGuard({ children }: AuthGuardProps) {
  const { isAuthenticated, isInitialized, openLoginModal } = useAuthContext();

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [requestedLocation, setRequestedLocation] = useState<string | null>(
    null,
  );

  if (!isInitialized) {
    return <LoadingScreen />;
  }

  if (!isAuthenticated) {
    if (pathname !== requestedLocation) {
      setRequestedLocation(pathname);
    }
    navigate('/');
    openLoginModal();
    return;
  }

  if (requestedLocation && pathname !== requestedLocation) {
    setRequestedLocation(null);
    return <Navigate to={requestedLocation} />;
  }

  return <> {children} </>;
}
