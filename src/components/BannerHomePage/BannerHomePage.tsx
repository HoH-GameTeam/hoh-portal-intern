import React from 'react';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { depositBonusThumb } from '../../assets/images';
import { useAuthContext } from '../../auth/useAuthContext';
import { useLocales } from '../../locales';
import { RewardBonusWrapper, RewardNumberBox, ThumbBox } from './styles';

/* -------------------------------------------------------------------------- */

const BannerHomepage = () => {
  const { translate } = useLocales();
  const { me, isAuthenticated, openLoginModal } = useAuthContext();
  const [isWalletOpen, setIsWalletOpen] = React.useState(false);

  const handleClickDepositNow = () => {
    if (!isAuthenticated) {
      openLoginModal();
      return;
    }
    setIsWalletOpen(true);
  };

  return (
    <RewardBonusWrapper my={4} container wrap="wrap-reverse">
      <RewardNumberBox item md={6} xs={12}>
        <Typography variant="subtitle1">
          {translate('docs.hi')}{' '}
          <span className="user_name">{me?.user.nickname}</span>!{' '}
          {translate('welcome_aboard')}
        </Typography>
        <Typography
          className="first_deposit"
          variant="h5"
          textTransform="uppercase"
        >
          {translate('first_deposit_bonus')}
        </Typography>
        <Typography
          variant="h2"
          className="deposit_bonus"
          textTransform="uppercase"
        >
          +270% {translate('rewards')}
        </Typography>
        <Button
          className="deposit_btn"
          color="secondary"
          variant="contained"
          onClick={() => handleClickDepositNow()}
        >
          <Typography variant="button" color="white">
            {translate('deposit_now')}
          </Typography>
        </Button>
      </RewardNumberBox>
      <ThumbBox item md={6} xs={12}>
        <img
          src={depositBonusThumb}
          alt="deposit bonus"
          className="deposit_bonus_thumb"
        />
      </ThumbBox>
    </RewardBonusWrapper>
  );
};

export default BannerHomepage;
