import { motion } from 'framer-motion';
import React, { useState } from 'react';

import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { IconBell, IconWallet1 } from '../../../../assets/icons';
import { accomplishment, avatar1, coinBNB } from '../../../../assets/images';
import currencyImages from '../../../../assets/images/coins';
import { useAuthContext } from '../../../../auth/useAuthContext';
import { setStorageCurrency } from '../../../../auth/utils';
import { useGlobalContext } from '../../../../contexts/GlobalContext';
import { Currency } from '../../../../graphql';
import useResponsive from '../../../../hooks/useResponsive';
import { useLocales } from '../../../../locales';
import UserPopover from '../UserPopover';
import IncreaseProfit from './IncreaseProfit';
import {
  AuthenticatedUserWrapper,
  BalanceBox,
  MyWalletBox,
  UserInfoBox,
} from './styles';

/* -------------------------------------------------------------------------- */

const mockUserData = {
  name: 'Venom Worm',
  accomplishment_amount: 5,
  avatar_url: avatar1,
  balance: '2,385.495',
  coin: {
    name: 'BNB',
    img: coinBNB,
  },
};

const AuthenticatedUser = () => {
  const { me, increasedProfit, showIncreasedProfit } = useAuthContext();
  const { translate } = useLocales();
  const isDesktop = useResponsive('up', 'sm');
  const isMobile = useResponsive('down', 'sm');

  const { getCurrencyAmount, storageCurrency } = useGlobalContext();
  const [isWalletDialogOpen, setIsWalletDialogOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<
    (EventTarget & HTMLDivElement) | null
  >(null);
  const [selectedCurrency, setSelectedCurrency] = useState<Currency | null>(
    storageCurrency,
  );
  const [isShowUserPopover, setIsShowUserPopover] = useState(false);

  const currencyBallance = React.useMemo(
    () =>
      me?.userWallets.find(
        (userWallet: { currencyId: any }) =>
          userWallet.currencyId === selectedCurrency?.id,
      )?.amount || 0,
    [selectedCurrency, me],
  );

  const handleOpenAssetPopover = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseWalletDialog = () => {
    setIsWalletDialogOpen(false);
  };

  const handleSelectCurrency = (currency: Currency) => {
    setSelectedCurrency(currency);
    setAnchorEl(null);
    setStorageCurrency(currency);
  };

  React.useEffect(() => {
    setSelectedCurrency(storageCurrency);
  }, [storageCurrency]);

  React.useEffect(() => {
    showIncreasedProfit(null);
  }, [increasedProfit]);

  return (
    <AuthenticatedUserWrapper>
      <Box className="wrapper">
        <Box className="balance_wallet">
          <BalanceBox onClick={(e) => handleOpenAssetPopover(e)}>
            <Box className="current_currency">
              <img
                className="coin_img"
                src={
                  selectedCurrency && currencyImages[selectedCurrency.shortName]
                }
                alt={selectedCurrency?.name}
              />
              <Typography
                textTransform="uppercase"
                minWidth="max-content"
                fontWeight={{ xs: 400, ms: 500 }}
              >
                {selectedCurrency?.shortName}
              </Typography>
              <KeyboardArrowDownRoundedIcon />
            </Box>
            <Box sx={{ position: 'relative' }}>
              <Typography textAlign="center" maxWidth="70px">
                {selectedCurrency &&
                  getCurrencyAmount(currencyBallance, selectedCurrency)}
              </Typography>
              <IncreaseProfit increasedAmount={increasedProfit} />
            </Box>
          </BalanceBox>
          <MyWalletBox ml={2}>
            <Button
              onClick={() => {
                setIsWalletDialogOpen(true);
              }}
              variant="contained"
              className="my_wallet_btn"
              color="secondary"
              startIcon={<IconWallet1 />}
            >
              {isDesktop && translate('wallet')}
            </Button>
          </MyWalletBox>
        </Box>
        <UserInfoBox>
          <Box className="user_name_accomplishment">
            <Typography color="text.contrast">{me?.user.nickname}</Typography>
            <Box className="accomplishment_amount">
              {[...Array(mockUserData.accomplishment_amount)].map(
                (_, index) => (
                  <img key={index} src={accomplishment} alt="accomplishment" />
                ),
              )}
            </Box>
          </Box>
          <Box
            component={motion.div}
            onHoverStart={() => {
              if (isDesktop) setIsShowUserPopover(true);
            }}
            onMouseLeave={() => {
              if (isDesktop) setIsShowUserPopover(false);
            }}
            className="user_avatar_box"
          >
            <Avatar
              onClick={() => {
                if (isMobile) setIsShowUserPopover((prev) => !prev);
              }}
              className="user_avatar"
              alt={me?.user.nickname}
              src={me?.user?.avatar?.square || undefined}
            />
            <UserPopover
              open={isShowUserPopover}
              handleClose={() => setIsShowUserPopover(false)}
            />
          </Box>
        </UserInfoBox>
      </Box>
      {/* <IconButton className="noti_btn hover_effect">
        <Badge color="error" badgeContent={100}>
          <IconBell />
        </Badge>
      </IconButton> */}
    </AuthenticatedUserWrapper>
  );
};

export default React.memo(AuthenticatedUser);
