import React from 'react';

import { IconButton, Stack, Typography } from '@mui/material';

import coinImages from '../../assets/images/coins';
import { useGlobalContext } from '../../contexts/GlobalContext';
import Iconify from '../iconify';
import ChartArea from './ChartArea';
import { LiveStatsBox } from './styles';

const LiveStats = ({ onClose }) => {
  const { storageCurrency, myBet } = useGlobalContext();
  return (
    <LiveStatsBox>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ py: 1 }}
      >
        <Stack direction="row" alignItems="center" spacing={1} sx={{ pl: 1 }}>
          <Iconify icon="akar-icons:statistic-up" width={22} />
          <Typography textAlign="center">Live Stats</Typography>
        </Stack>
        <IconButton
          sx={{ p: 0.5 }}
          onClick={() => {
            if (onClose) onClose();
          }}
        >
          <Iconify
            icon="solar:close-square-linear"
            width={22}
            color="text.primary"
          />
        </IconButton>
      </Stack>

      <Stack sx={{ backgroundColor: 'background.default' }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ mt: 1, px: 2 }}
        >
          <Typography textAlign="center" color="text.primary" variant="caption">
            Total Bet Amount
          </Typography>
          <Typography textAlign="center" color="text.primary" variant="caption">
            Total Profit
          </Typography>
        </Stack>
        <Stack direction="row" justifyContent="space-between" sx={{ px: 2 }}>
          <Stack direction="row" alignItems="center" spacing={0.5}>
            <Typography textAlign="center" color="text.contrast">
              {myBet.totalBet.toFixed(2)}
            </Typography>
            <img
              src={coinImages[storageCurrency?.shortName]}
              alt="coin"
              width={18}
            />
          </Stack>
          <Stack direction="row" alignItems="center" spacing={0.5}>
            <Typography
              textAlign="center"
              color={myBet.totalProfit > 0 ? 'primary.main' : 'error.main'}
            >
              {myBet.totalProfit.toFixed(2)}
            </Typography>
            <img
              src={coinImages[storageCurrency?.shortName]}
              alt="coin"
              width={18}
            />
          </Stack>
        </Stack>
        <ChartArea data={myBet.profits} />
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ px: 2, pb: 3 }}
        >
          <Typography textAlign="center" color="primary.main" variant="caption">
            {`WIN: ${myBet.totalWin}`}
          </Typography>

          <Typography textAlign="center" color="error.main" variant="caption">
            {`LOSE: ${myBet.totalLose}`}
          </Typography>
        </Stack>
      </Stack>
    </LiveStatsBox>
  );
};

export default LiveStats;
