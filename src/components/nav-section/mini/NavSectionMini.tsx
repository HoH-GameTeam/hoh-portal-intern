import React from 'react';

import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { IconLanguage } from '../../../assets/icons';
import { MenuIconButton } from '../../../layouts/dashboard/header/styles';
import Iconify from '../../iconify';
import { useSettingsContext } from '../../settings/SettingsContext';
import DarkLightSwitch from '../DarkLightSwitch';
import { NavSectionProps } from '../types';
import NavigationItem from './NavItem';
import { LanguageFiat, NavigationWrapper, ThemeModeBox } from './styles';

/* -------------------------------------------------------------------------- */

interface Props extends NavSectionProps {
  isNavOpen: boolean;
  handleToggleNav: VoidFunction;
}

export default function NavSectionMini({
  isNavOpen,
  handleToggleNav,
  data,
}: Props) {
  const { themeMode } = useSettingsContext();
  const isDark = themeMode === 'dark';
  const [open, setOpen] = React.useState(false);

  const onMouseEnter = () => {
    setOpen(true);
  };

  const onMouseLeave = () => {
    setOpen(false);
  };

  return (
    <NavigationWrapper>
      <div>
        <MenuIconButton
          isCollapsed={!isNavOpen}
          onClick={() => handleToggleNav()}
          sx={{ mb: 2 }}
        >
          <MenuRoundedIcon />
        </MenuIconButton>
        <Box className="nav__box">
          {data.map((navItem) => (
            <NavigationItem
              navItem={navItem}
              key={navItem.key || navItem.type}
            />
          ))}
        </Box>
        <LanguageFiat>
          <Box className="language_box">
            <Box className="icon__box">
              <IconLanguage />
            </Box>
          </Box>
          <Box className="fiat_box">
            <Typography variant="subtitle1">USD</Typography>
          </Box>
        </LanguageFiat>
      </div>
      <Box mt={2}>
        <Box>
          <ThemeModeBox
            aria-haspopup="true"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            sx={{
              position: 'relative',
              '.dark_light_box': {
                position: 'fixed',
                visibility: 'hidden',
                borderRadius: 8,
                left: 8,
              },
            }}
          >
            {isDark ? (
              <Iconify icon="material-symbols:dark-mode" width={24} />
            ) : (
              <Iconify width={24} icon="ic:round-light-mode" />
            )}
            <DarkLightSwitch
              variants={{
                initial: {
                  width: 50,
                },
                hover: {
                  width: 260,
                  visibility: 'visible',
                },
              }}
              animate={open ? 'hover' : 'initial'}
              className="dark_light_box"
            />
          </ThemeModeBox>
        </Box>
      </Box>
    </NavigationWrapper>
  );
}
