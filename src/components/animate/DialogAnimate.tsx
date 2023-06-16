// @ts-nocheck
/* eslint-disable react/no-unstable-nested-components */
import { AnimatePresence, motion } from 'framer-motion';
// @mui
import { Dialog, Box, Paper, DialogProps } from '@mui/material';
//
import { varFade } from './variants';

// ----------------------------------------------------------------------

export interface Props extends DialogProps {
  variants?: Record<string, unknown>;
  onClose?: VoidFunction;
}

const AnimatedPaper = ({ variants, onClose, sx, ...props }) => {
  return (
    <Box
      component={motion.div}
      {...(variants ||
        varFade({
          distance: 120,
          durationIn: 0.32,
          durationOut: 0.24,
          easeIn: 'easeInOut',
        }).inUp)}
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        onClick={onClose}
        sx={{ width: '100%', height: '100%', position: 'fixed' }}
      />
      <Paper {...props} sx={sx} />
    </Box>
  );
};

export default function DialogAnimate({
  open,
  variants,
  onClose,
  children,
  sx,
  ...other
}: Props) {
  return (
    <AnimatePresence>
      {open && (
        <Dialog
          fullWidth
          open={open}
          onClose={onClose}
          PaperComponent={AnimatedPaper}
          PaperProps={{
            sx,
            variants,
            onClose,
          }}
          {...other}
        >
          {children}
        </Dialog>
      )}
    </AnimatePresence>
  );
}
