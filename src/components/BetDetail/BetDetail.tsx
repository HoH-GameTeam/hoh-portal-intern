import { format } from 'date-fns';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Box, Button, IconButton, Typography, useTheme } from '@mui/material';

import { IconCopy } from '../../assets/icons';
import { hiddenUser } from '../../assets/images';
import currencyImages from '../../assets/images/coins';
import { useAuthContext } from '../../auth/useAuthContext';
import { useGlobalContext } from '../../contexts/GlobalContext';
import { Currency, useBetQuery } from '../../graphql';
import useCopyToClipboard from '../../hooks/useCopyToClipboard';
import useLocales from '../../locales/useLocales';
import DialogAnimate from '../animate/DialogAnimate';
import { DialogWrapper } from '../Dialog/styles';
import Iconify from '../iconify/Iconify';
import { useSnackbar } from '../snackbar/SnackbarProvider';
import { Body, GameInfoBox, Header } from './styles';

interface Props {
  open: boolean;
  onClose: VoidFunction;
  betId: string;
}

const BetDetail = ({ open, onClose, betId }: Props) => {
  const theme = useTheme();
  const { translate } = useLocales();
  const { copy } = useCopyToClipboard();
  const { addSnackbar } = useSnackbar();
  const { me } = useAuthContext();
  const { getCurrencyAmount, storageCurrency } = useGlobalContext();
  const navigate = useNavigate();

  const { data: betData } = useBetQuery({
    variables: {
      betId,
      currencyId: storageCurrency?.id,
    },
  });

  const user = (() => {
    return me?.user;
  })();

  const handleCopyBetId = (betId: string) => {
    copy(betId);
    addSnackbar(translate('copied'));
  };

  const handlePlayNow = (gameId) => {
    onClose();
    navigate(`/casino/${gameId}`);
  };

  const ResultComponent = () => {
    switch (betData?.bet?.game?.id) {
      case '1':
        return (
          // <Box sx={{}}>
          //   <ResultDetail betDetail={betDetail} />
          // </Box>
          <Typography>...</Typography>
        );
      case '3':
        return <Typography>...</Typography>;
      case '4':
        return <Typography>...</Typography>;
      default:
        return null;
    }
  };

  return (
    <DialogAnimate
      open={open}
      onClose={() => onClose()}
      PaperProps={{
        sx: {
          width: 460,
          height: 700,
          backgroundColor: 'unset',
          overflow: 'hidden',
          boxShadow: 'none',
          [theme.breakpoints.down(600)]: {
            maxHeight: 'unset',
            maxWidth: 'unset',
            '&&&': { margin: 0 },
            width: '100%',
            height: '100%',
          },
        },
      }}
    >
      <DialogWrapper>
        <Header>
          <Typography className="title" variant="h6">
            {translate('details')}
          </Typography>
          <Box
            component={motion.div}
            onClick={() => onClose()}
            whileHover={{
              rotate: 90,
              transition: { ease: 'easeInOut', duration: 0.3 },
            }}
          >
            <IconButton className="close-btn">
              <CloseRoundedIcon />
            </IconButton>
          </Box>
        </Header>
        <Body>
          <Box display="flex" justifyContent="center">
            <Typography color="text.contrast">
              {`${translate('bet_id')}: ${betData?.bet?.id}`}
            </Typography>
            <IconButton
              className="copy_btn"
              onClick={() => handleCopyBetId(betData?.bet?.id)}
            >
              <IconCopy />
            </IconButton>
          </Box>
          <Box mt={1} display="flex" justifyContent="center">
            <Typography mr={0.5}>{translate('by')}</Typography>
            {user ? (
              <Box display="flex" alignItems="center" justifyContent="center">
                <Typography fontWeight={700} color="text.contrast">
                  {user?.nickname}
                </Typography>
              </Box>
            ) : (
              <Box display="flex" alignItems="center" justifyContent="right">
                <img className="avatar" alt="hidden" src={hiddenUser} />
                <Typography fontWeight={700}>{translate('hidden')}</Typography>
              </Box>
            )}
            <Typography mx={0.5}>{translate('on')}</Typography>
            <Typography>
              {format(new Date(), 'dd/MM/yyyy, h:mm:ss aa')}
            </Typography>
          </Box>
          <Box display="flex" mt={3}>
            <Box className="item_wrap">
              <Box className="label_box">
                <Iconify icon="mdi:money" />
                <Typography ml={1}>{translate('bet_amount')}</Typography>
              </Box>
              <Box>
                <Typography color="text.contrast">
                  {getCurrencyAmount(
                    betData?.bet?.betAmount || 0,
                    betData?.bet?.currency as Currency,
                  )}
                </Typography>
                <img
                  className="currency_image"
                  alt={betData?.bet?.currency?.shortName}
                  src={currencyImages[betData?.bet?.currency.shortName]}
                />
              </Box>
            </Box>
            <Box className="item_wrap">
              <Box className="label_box">
                <Iconify icon="system-uicons:graph-increase" />
                <Typography ml={1}>{translate('payout')}</Typography>
              </Box>
              <Typography color="text.contrast">
                {betData?.bet?.payoutRate}x
              </Typography>
            </Box>
            <Box className="item_wrap">
              <Box className="label_box">
                <Iconify icon="solar:hand-money-bold" />
                <Typography ml={1}>{translate('profit_amount')}</Typography>
              </Box>
              <Box>
                <Typography
                  color="text.contrast"
                  className={
                    betData?.bet.payoutRate > 0 ? 'increase' : 'decrease'
                  }
                >
                  {getCurrencyAmount(
                    betData?.bet?.payoutAmount,
                    betData?.bet.currency as Currency,
                  )}
                </Typography>
                <img
                  className="currency_image"
                  alt={betData?.bet?.currency?.shortName}
                  src={currencyImages[betData?.bet?.currency.shortName]}
                />
              </Box>
            </Box>
          </Box>
          {betData?.bet.game && (
            <GameInfoBox>
              <Box>
                <img
                  className="game_preview"
                  alt={betData?.bet?.game.name}
                  src={betData?.bet.game.thumbnail?.square || ''}
                />
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                >
                  <Typography
                    fontWeight={700}
                    variant="body1"
                    color="text.contrast"
                  >
                    {betData?.bet?.game.name}
                  </Typography>
                  <Typography mt={0.5} variant="body2">
                    {betData?.bet?.game.publisher.name}
                  </Typography>
                </Box>
              </Box>
              <Button
                className="play_btn"
                variant="contained"
                color="primary"
                onClick={() => handlePlayNow(betData?.bet?.game.id)}
              >
                {translate('play_now')}
              </Button>
            </GameInfoBox>
          )}
          <Box>
            <ResultComponent />
          </Box>
        </Body>
      </DialogWrapper>
    </DialogAnimate>
  );
};

export default BetDetail;
