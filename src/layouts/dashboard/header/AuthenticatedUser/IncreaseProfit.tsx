import { AnimatePresence, motion } from 'framer-motion';

import { Box, Typography } from '@mui/material';

import { useGlobalContext } from '../../../../contexts/GlobalContext';

interface Props {
  increasedAmount: number;
}

const IncreaseProfit = ({ increasedAmount }: Props) => {
  const { getCurrencyAmount, storageCurrency } = useGlobalContext();

  const variants = {
    show: {
      scale: 0.5,
      top: 22,
      opacity: 1,
      transform: 'translateX(-50%)',
    },
    exit: {
      scale: 0.5,
      opacity: 0,
      top: 0,
      transition: {
        duration: 1.5,
        ease: 'easeOut',
      },
      transform: 'translateX(-50%)',
    },
  };

  return (
    <AnimatePresence>
      {increasedAmount && (
        <Box
          component={motion.div}
          key={increasedAmount && `${increasedAmount} ${Math.random()}`}
          variants={variants}
          initial="show"
          exit="exit"
          sx={{
            position: 'absolute',
            left: '45%',
          }}
        >
          <Typography
            color="primary.main"
            variant="h6"
            sx={{
              '&&': {
                fontWeight: 700,
              },
            }}
          >
            {getCurrencyAmount(increasedAmount, storageCurrency)}
          </Typography>
        </Box>
      )}
    </AnimatePresence>
  );
};

export default IncreaseProfit;
