import React, { Dispatch, SetStateAction } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import useLocales from '../../../locales/useLocales';
import { NavigationItemWrapper } from './styles';
import { NavListProps } from '../types';
import useResponsive from '../../../hooks/useResponsive';

interface Props {
  navItem: NavListProps;
  setOpenNav: Dispatch<SetStateAction<boolean>>;
}

const NavigationItem = ({ navItem, setOpenNav }: Props) => {
  const navigate = useNavigate();
  const { translate } = useLocales();
  const isMobile = useResponsive('down', 'sm');
  const { pathname } = useLocation();

  const handleNavigateToPath = (path) => {
    navigate(path);
    if (isMobile) {
      setOpenNav(false);
    }
  };

  return (
    <NavigationItemWrapper className={`${navItem.type} ${navItem.key}`}>
      {navItem.type === 'item' && (
        <Box
          className={`item__flex ${pathname === navItem.path ? 'active' : ''}`}
          onClick={() => {
            handleNavigateToPath(navItem.path);
          }}
        >
          <Box className="icon__box">{navItem.icon}</Box>
          <Typography variant="subtitle2">{translate(navItem.key)}</Typography>
        </Box>
      )}
      {navItem.type === 'grouped' &&
        navItem.items.map((item) => (
          <Box
            className={`item__flex ${item.key} ${
              pathname === item.path ? 'active' : ''
            }`}
            key={item.key}
            onClick={() => {
              handleNavigateToPath(item.path);
            }}
          >
            <Box className="icon__box">{item.icon}</Box>
            <Typography variant="subtitle2">{translate(item.key)}</Typography>
          </Box>
        ))}
    </NavigationItemWrapper>
  );
};

export default NavigationItem;
