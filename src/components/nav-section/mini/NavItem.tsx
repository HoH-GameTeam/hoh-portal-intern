import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';

import { NavigationItemWrapper } from './styles';
import { NavListProps } from '../types';

const NavigationItem = ({ navItem }: { navItem: NavListProps }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleNavigateToPath = (path) => {
    navigate(path);
  };

  return (
    <NavigationItemWrapper className={`${navItem.type} ${navItem.key}`}>
      {navItem.type === 'item' && (
        <Box
          className={`item__flex ${pathname === navItem.path ? 'active' : ''}`}
          onClick={() => handleNavigateToPath(navItem.path)}
        >
          <Box className="icon__box">{navItem.icon}</Box>
        </Box>
      )}
      {navItem.type === 'grouped' &&
        navItem.items.map((item) => (
          <Box
            className={`item__flex ${item.key} ${
              pathname === item.path ? 'active' : ''
            }`}
            key={item.key}
            onClick={() => handleNavigateToPath(item.path)}
          >
            <Box className="icon__box">{item.icon}</Box>
          </Box>
        ))}
    </NavigationItemWrapper>
  );
};

export default NavigationItem;
