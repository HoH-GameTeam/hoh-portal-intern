// @mui

import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import MotionWrapper from '../MotionWrapper';

/* -------------------------------------------------------------------------- */

export const DialogWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.main,
  borderRadius: theme.shape.borderRadius,
  position: 'relative',
  height: '100%',
  overflowY: 'hidden',
}));

type DialogHeaderProps = {
  hasCloseBtn: boolean | undefined;
  hasBackBtn?: boolean | undefined;
  backgroundHeader?: string;
};

export const DialogHeader = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== 'hasCloseBtn' &&
    prop !== 'hasBackBtn' &&
    prop !== 'backgroundHeader',
})<DialogHeaderProps>(
  ({ hasCloseBtn, hasBackBtn, backgroundHeader, theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    padding: `${theme.spacing(5)} 0 0 ${theme.spacing(5)}`,
    position: 'relative',
    ...(!backgroundHeader && {
      height: theme.spacing(7.5),
    }),
    ...(backgroundHeader && {
      paddingBottom: theme.spacing(3),
    }),
    ...(hasCloseBtn && {
      paddingRight: theme.spacing(10),
    }),
    ...(hasBackBtn && {
      paddingLeft: theme.spacing(8),
    }),
    backgroundColor: backgroundHeader,
    '.dialog-title': {
      lineHeight: 1,
      color: theme.palette.text.contrast,
      [theme.breakpoints.down('sm')]: {
        marginLeft: -10,
      },
    },
  }),
);

export const CloseBox = styled(MotionWrapper)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(2.775),
  right: theme.spacing(3.775),
  svg: { color: theme.palette.text.primary },
  '&:hover svg': {
    color: theme.palette.text.contrast,
  },
  [theme.breakpoints.down('sm')]: {
    right: theme.spacing(1.5),
  },
}));

export const BackBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(3.5),
  left: theme.spacing(2.775),
  [theme.breakpoints.down('sm')]: {
    left: theme.spacing(1.5),
  },
  svg: { color: theme.palette.text.contrast },
}));

export const DialogBody = styled(Box)(({ theme }) => ({
  padding: `${theme.spacing(3.5)} ${theme.spacing(5)} ${theme.spacing(5)}`,
  [theme.breakpoints.down('sm')]: {
    padding: `${theme.spacing(2)} ${theme.spacing(2)} ${theme.spacing(3)}`,
  },
  height: 'calc(100% - 60px)',
  overflow: 'hidden',
}));

export const DiaLogFooter = styled(Box)(() => ({
  position: 'absolute',
  left: 0,
  bottom: 0,
  width: '100%',
}));
