import React, { HTMLAttributes } from 'react';

import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import MuiDialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { MotionProps } from 'framer-motion';

import {
  BackBox,
  CloseBox,
  DialogBody,
  DiaLogFooter,
  DialogHeader,
  DialogWrapper,
} from './styles';

/* -------------------------------------------------------------------------- */

type DialogProps = MotionProps &
  HTMLAttributes<HTMLDivElement> & {
    title: string | React.ReactNode;
    isOpen: boolean;
    handleClose: () => void;
    dialogHeaderChild?: React.ReactNode;
    hasCloseButton?: boolean;
    children: React.ReactNode;
    hasBackButton?: boolean;
    handleBack?: () => void;
    style?: any;
    backgroundHeader?: string;
    dialogFooter?: React.ReactNode;
    dialogBackgroundColor?: string;
    maxHeight?: number;
  };

const Dialog = ({
  title = '',
  isOpen,
  children,
  handleBack,
  handleClose,
  hasBackButton,
  hasCloseButton,
  dialogHeaderChild,
  backgroundHeader,
  dialogBackgroundColor,
  dialogFooter,
  style,
  maxHeight,
  ...motionProps
}: DialogProps) => (
  <MuiDialog
    open={isOpen}
    onClose={handleClose}
    PaperProps={{
      style: {
        backgroundColor: 'unset',
        overflow: 'hidden',
        boxShadow: 'none',
        ...style,
      },
    }}
  >
    <DialogWrapper
      style={{ backgroundColor: dialogBackgroundColor, maxHeight }}
      {...motionProps}
    >
      <DialogHeader
        hasCloseBtn={hasCloseButton}
        hasBackBtn={hasBackButton}
        backgroundHeader={backgroundHeader}
      >
        {hasBackButton && (
          <BackBox onClick={handleBack}>
            <IconButton>
              <ArrowBackIosNewRoundedIcon fontSize="small" />
            </IconButton>
          </BackBox>
        )}
        <Typography className="dialog-title" variant="h6">
          {title}
        </Typography>
        {dialogHeaderChild && <div>{dialogHeaderChild}</div>}
        {hasCloseButton && (
          <CloseBox
            onClick={handleClose}
            whileHover={{
              rotate: 90,
              transition: { ease: 'easeInOut', duration: 0.3 },
            }}
          >
            <IconButton className="close-btn">
              <CloseRoundedIcon />
            </IconButton>
          </CloseBox>
        )}
      </DialogHeader>
      <DialogBody>{children}</DialogBody>
      {dialogFooter && <DiaLogFooter>{dialogFooter}</DiaLogFooter>}
    </DialogWrapper>
  </MuiDialog>
);

Dialog.defaultProps = {
  hasCloseButton: false,
  hasBackButton: false,
  handleBack: () => {},
  dialogHeaderChild: null,
  backgroundHeader: '',
  dialogFooter: null,
  style: {},
  dialogBackgroundColor: '',
  maxHeight: null,
};

export default Dialog;
