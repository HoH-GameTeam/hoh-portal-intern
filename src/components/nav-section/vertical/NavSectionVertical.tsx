import React, { Dispatch, SetStateAction } from 'react';
import { useNavigate } from 'react-router';

import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { IconLanguage } from '../../../assets/icons';
import logo_full from '../../../assets/logo/logo_full.png';
import useResponsive from '../../../hooks/useResponsive';
import DarkLightSwitch from '../DarkLightSwitch';
import { NavSectionProps } from '../types';
import NavigationItem from './NavItem';
import {
  LanguageFiat,
  LogoBox,
  MenuIconButton,
  NavigationWrapper,
} from './styles';

/* -------------------------------------------------------------------------- */

interface Props extends NavSectionProps {
  isNavOpen: boolean;
  setOpenNav: Dispatch<SetStateAction<boolean>>;
}

const NavSectionVertical = ({ data, isNavOpen, setOpenNav }: Props) => {
  const isDesktop = useResponsive('up', 'lg');
  const isTabLet = useResponsive('down', 'lg');
  const isMobile = useResponsive('down', 'sm');
  const navigate = useNavigate();

  const handleCloseNav = () => {
    setOpenNav(false);
  };

  const handleToggleNav = () => {
    setOpenNav((prev) => !prev);
  };

  const navigateToHomePage = () => {
    navigate('/');
  };

  const renderLogo = (() => {
    if (isMobile) {
      return (
        <LogoBox>
          <Box className="logo" onClick={() => navigateToHomePage()}>
            <img src={logo_full} alt="logo_coco" />
          </Box>
          <Box>
            <IconButton onClick={() => handleCloseNav()}>
              <CloseRoundedIcon />
            </IconButton>
          </Box>
        </LogoBox>
      );
    }
    if (isTabLet || isDesktop) {
      return (
        <LogoBox>
          <MenuIconButton onClick={() => handleToggleNav()}>
            <MenuRoundedIcon />
          </MenuIconButton>
          <Box className="logo" onClick={() => navigateToHomePage()}>
            <img src={logo_full} alt="logo_coco" />
          </Box>
        </LogoBox>
      );
    }
  })();

  return (
    <NavigationWrapper>
      <div>
        {renderLogo}
        <Box className="nav__box">
          {data.map((navItem) => (
            <NavigationItem
              setOpenNav={setOpenNav}
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
            <>
              <Typography variant="subtitle2">English</Typography>
              <KeyboardArrowDownRoundedIcon />
            </>
          </Box>
          <Box className="fiat_box">
            <Box>
              <Typography style={{ textDecoration: 'underline' }}>$</Typography>
            </Box>
            <Typography variant="subtitle1">&nbsp;USD</Typography>
            {!isNavOpen && <KeyboardArrowDownRoundedIcon />}
          </Box>
        </LanguageFiat>
      </div>
      <Box mt={2}>
        <DarkLightSwitch mb={2} />
      </Box>
    </NavigationWrapper>
  );
};

export default React.memo(NavSectionVertical);
