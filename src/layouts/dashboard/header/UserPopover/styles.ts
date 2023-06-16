import { styled, Box, BoxProps } from '@mui/material';
import { MotionProps } from 'framer-motion';

export const Wrapper = styled(Box)<BoxProps & MotionProps>(({ theme }) => ({
  zIndex: 99,
  position: 'absolute',
  top: 'calc(100% + 12px)',
  right: -5,
  padding: theme.spacing(1),
  minWidth: 244,
  borderRadius: theme.shape.borderRadius,
  background: theme.palette.background.table,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItem: 'center',
  '.group, .item': {
    borderRadius: theme.shape.borderRadius * 2,
    backgroundColor: theme.palette.background.secondary,
  },
  '.group_item': {
    '&:first-of-type': {
      borderRadius: '8px 8px 0 0',
    },
    '&:last-of-type': {
      borderRadius: '0 0 8px 8px',
    },
  },
  '.item, .group_item': {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    padding: theme.spacing(1.5),
    cursor: 'pointer',
    'path, g': {
      fill: theme.palette.text.primary,
    },
    h6: {
      color: theme.palette.text.primary,
    },
    '&:hover': {
      backgroundColor: theme.palette.background.overlay,
      'path, g': {
        fill: theme.palette.text.contrast,
      },
      h6: {
        color: theme.palette.text.contrast,
      },
    },
  },
  '.logout_box': {
    display: 'flex',
    justifyContent: 'center',
    alignItem: 'center',
    cursor: 'pointer',
    padding: theme.spacing(1.5),
    'path, g': {
      fill: theme.palette.text.primary,
    },
    h6: {
      color: theme.palette.text.primary,
    },
    '&:hover': {
      path: {
        fill: theme.palette.text.contrast,
      },
      h6: {
        color: theme.palette.text.contrast,
      },
    },
  },
}));
