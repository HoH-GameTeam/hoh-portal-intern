import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { useNavigate } from 'react-router';

import { Avatar, Box, Button, Typography } from '@mui/material';

import logo from '../../../assets/logo/logo.png';
import { useAuthContext } from '../../../auth/useAuthContext';
import { HEADER } from '../../../config-global';
import useResponsive from '../../../hooks/useResponsive';
import { useLocales } from '../../../locales';
import { AuthScreen } from '../../../pages/Authentication/Authentication';
import AuthenticatedUser from './AuthenticatedUser';
import { AuthenticationBox, HeaderWrapper, StyledContainer } from './styles';
import { useSettingsContext } from '../../../components/settings';

// ----------------------------------------------------------------------

type Props = {
  isNavOpen: boolean;
};

export default function Header({ isNavOpen }: Props) {
  const { translate } = useLocales();
  const { isAuthenticated, openLoginModal } = useAuthContext();
  const { themeHeader } = useSettingsContext();
  const navigate = useNavigate();

  const navigateToHomePage = () => {
    navigate('/');
  };

  const isMobile = useResponsive('down', 'sm');

  const variants = {
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
    hide: {
      opacity: 0,
      y: -100,
      transition: { duration: 1, ease: 'easeInOut' },
    },
  };

  return (
    <AnimatePresence initial={false}>
      {themeHeader && (
        <HeaderWrapper
          key="header"
          component={motion.div}
          variants={variants}
          animate="show"
          exit="hide"
          sx={{
            height: { sm: HEADER.H_MAIN_DESKTOP, xs: HEADER.H_MOBILE },
          }}
        >
          {isMobile && (
            <Avatar
              className="mobile_logo"
              alt="HOH"
              src={logo}
              onClick={() => navigateToHomePage()}
            />
          )}
          <StyledContainer isNavCollapse={!isNavOpen}>
            <Box display="flex" justifyItems="flex-end">
              {isAuthenticated ? (
                <AuthenticatedUser />
              ) : (
                <AuthenticationBox>
                  <Button variant="text" onClick={() => openLoginModal()}>
                    <Typography variant="button">
                      {translate('sign_in')}
                    </Typography>
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    className="sign_up_btn"
                    onClick={() => openLoginModal(AuthScreen.SIGN_UP)}
                  >
                    <Typography variant="button">
                      {translate('sign_up')}
                    </Typography>
                  </Button>
                </AuthenticationBox>
              )}
              {/* <Grid item className="message_box">
          <IconButton className="hover_effect">
          <Badge color="error" badgeContent={100}>
          <IconMessage2 />
          </Badge>
          </IconButton>
        </Grid> */}
            </Box>
          </StyledContainer>
        </HeaderWrapper>
      )}
    </AnimatePresence>
  );
}
