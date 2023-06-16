import React from 'react';

import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import GoogleIcon from '@mui/icons-material/Google';
import TelegramIcon from '@mui/icons-material/Telegram';
import { Box, Typography, useTheme } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';

import { IconFacebook } from '../../assets/icons';
import { authentication, authentication_mobile } from '../../assets/images';
import { useAuthContext } from '../../auth/useAuthContext';
import { CloseBox } from '../../components/Dialog/styles';
import Iconify from '../../components/iconify/Iconify';
import useResponsive from '../../hooks/useResponsive';
import { useLocales } from '../../locales';
import ForgotPassword from './ForgotPassword';
import SignIn from './SignIn';
import SignUp from './SignUp';
import {
  AuthenticationContainer,
  AuthenticationWrapper,
  Body,
  Footer,
  Header,
  SSOItemBox,
} from './styles';

interface AuthenticationProps {
  open: boolean;
  handleClose: () => void;
  page: AuthScreen;
}

export enum AuthScreen {
  SIGN_IN = 'SIGN_IN',
  SIGN_UP = 'SIGN_UP',
  FORGOT_PW = 'FORGOT_PW',
}

const Authentication = ({ open, handleClose, page }: AuthenticationProps) => {
  const { translate } = useLocales();
  const theme = useTheme();
  const isTablet = useResponsive('between', 'sm', 'lg');
  const isMobile = useResponsive('down', 700);
  const [selectedScreen, setSelectedScreen] = React.useState<AuthScreen>(
    page || AuthScreen.SIGN_IN,
  );
  const { loginWithGoogle } = useAuthContext();

  const renderCloseBox = (
    <CloseBox
      className="closeBox"
      whileHover={{
        rotate: 90,
        transition: { ease: 'easeInOut', duration: 0.3 },
        translate: 'translateY(-50%)',
      }}
      sx={{
        ...(isMobile && {
          top: 10,
          right: 8,
        }),
      }}
    >
      <IconButton className="close-btn" onClick={() => handleClose()}>
        <CloseRoundedIcon />
      </IconButton>
    </CloseBox>
  );

  return (
    <Dialog
      open={open}
      onClose={() => handleClose()}
      BackdropProps={{
        style: {
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
        },
      }}
      PaperProps={{
        sx: {
          backgroundColor: 'transparent',
          justifyContent: 'center',
          boxShadow: 'none',
          height: 750,
          width: 1100,
          transform: 'translateX(-5%)',
          maxWidth: 'unset',
          maxHeight: 'unset',
          ...(isTablet && {
            transform: 'none',
            width: 800,
            height: 550,
          }),
          [theme.breakpoints.down(700)]: {
            transform: 'none',
            width: '100%',
            height: '100%',
            margin: 0,
          },
        },
      }}
    >
      <AuthenticationContainer>
        <div className="thumb">
          {isMobile ? (
            <img src={authentication_mobile} alt="authentication_thumb" />
          ) : (
            <img src={authentication} alt="authentication_thumb" />
          )}
          {isMobile && renderCloseBox}
        </div>
        <AuthenticationWrapper>
          <Header>
            {selectedScreen === AuthScreen.FORGOT_PW && (
              <Box
                sx={{
                  height: 20,
                  mr: 1,
                  cursor: 'pointer',
                }}
                onClick={() => setSelectedScreen(AuthScreen.SIGN_IN)}
              >
                <Iconify icon="material-symbols:arrow-back-ios-rounded" />
              </Box>
            )}
            <Typography variant="h6" sx={{ color: 'text.contrast' }}>
              {selectedScreen === AuthScreen.SIGN_IN && translate('sign_in')}
              {selectedScreen === AuthScreen.SIGN_UP && translate('sign_up')}
              {selectedScreen === AuthScreen.FORGOT_PW &&
                translate('reset_password')}
            </Typography>
            {!isMobile && renderCloseBox}
          </Header>
          <Body>
            {selectedScreen === AuthScreen.SIGN_IN && (
              <SignIn
                openForgotPassword={() =>
                  setSelectedScreen(AuthScreen.FORGOT_PW)
                }
                openSignUp={() => setSelectedScreen(AuthScreen.SIGN_UP)}
                handleCloseAuthDialog={() => handleClose()}
              />
            )}
            {selectedScreen === AuthScreen.SIGN_UP && (
              <SignUp
                openSignIn={() => setSelectedScreen(AuthScreen.SIGN_IN)}
                handleCloseAuthDialog={() => handleClose()}
              />
            )}
            {selectedScreen === AuthScreen.FORGOT_PW && <ForgotPassword />}
          </Body>

          <Footer>
            <Divider flexItem>
              <Typography fontSize={{ sx: 12, lg: 16 }} variant="caption">
                {translate('or_log_in_with')}
              </Typography>
            </Divider>
            <Box display="flex" justifyContent="center" alignItems="center">
              <SSOItemBox>
                <IconButton onClick={() => loginWithGoogle()}>
                  <GoogleIcon />
                </IconButton>
              </SSOItemBox>
              {/* <SSOItemBox>
                <IconButton>
                  <TelegramIcon />
                </IconButton>
              </SSOItemBox>
              <SSOItemBox>
                <IconButton>
                  <IconFacebook />
                </IconButton>
              </SSOItemBox> */}
            </Box>
          </Footer>
        </AuthenticationWrapper>
      </AuthenticationContainer>
    </Dialog>
  );
};

export default Authentication;
