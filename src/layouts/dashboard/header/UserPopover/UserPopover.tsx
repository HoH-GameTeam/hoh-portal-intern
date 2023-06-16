import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { useNavigate } from 'react-router';

import { Box, Stack, Typography, ClickAwayListener } from '@mui/material';

import { IconBill } from '../../../../assets/icons';
import { varTranEnter, varTranExit } from '../../../../components/animate';
import Iconify from '../../../../components/iconify/Iconify';
import useLocales from '../../../../locales/useLocales';
import { profilePaths } from '../../../../routes/paths';
import { Wrapper } from './styles';
import { useAuthContext } from '../../../../auth/useAuthContext';

export default function UserPopover({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: VoidFunction;
}) {
  const navigate = useNavigate();
  const { logout } = useAuthContext();
  const { translate } = useLocales();

  const config = [
    {
      type: 'group',
      key: 'group1',
      child: [
        {
          title: 'wallet',
          icon: <Iconify icon="solar:wallet-money-bold" width={24} />,
          onClick: () => {},
        },
        {
          title: 'transactions',
          icon: <IconBill />,
          onClick: () => {},
        },
      ],
    },
    {
      title: 'my_vip_clubs',
      icon: <Iconify icon="icon-park-solid:crown-three" width={24} />,
      onClick: () => {
        navigate('');
      },
    },
    {
      title: 'profile_settings',
      icon: <Iconify icon="mdi:user" width={24} />,
      onClick: () => {
        navigate(`/${profilePaths.page}`, { replace: true });
      },
    },
  ];

  const variants = {
    initial: { y: 30, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: varTranEnter({ durationIn: 0.2, easeIn: 'easeIn' }),
    },
    exit: {
      y: 30,
      opacity: 0,
      transition: {
        ...varTranExit({ durationOut: 0.3, easeOut: 'easeOut' }),
        delay: 0.2,
      },
    },
  };

  return (
    <AnimatePresence>
      {open && (
        <ClickAwayListener onClickAway={handleClose}>
          <Wrapper
            key="user_popover"
            initial="initial"
            animate="animate"
            exit="exit"
            component={motion.div}
            variants={variants}
            className="user_popover"
            sx={{ '&&': { height: 318 } }}
          >
            <Stack spacing={1.5} mb={5}>
              {config.map((item) => {
                if (item.type && item.type === 'group') {
                  return (
                    <Stack className="group" key={item.key}>
                      {item.child.map((childItem) => (
                        <Box
                          key={`group${childItem.title}`}
                          className="group_item"
                          onClick={() => {
                            handleClose();
                            childItem.onClick();
                          }}
                        >
                          <div>{childItem.icon}</div>
                          <Typography
                            ml={1.2}
                            variant="subtitle2"
                            fontSize={14}
                            fontWeight={500}
                          >
                            {translate(childItem.title)}
                          </Typography>
                        </Box>
                      ))}
                    </Stack>
                  );
                }
                return (
                  <Box
                    className="item"
                    key={`item${item.title}`}
                    onClick={() => {
                      item.onClick();
                      handleClose();
                    }}
                  >
                    <div>{item.icon}</div>
                    <Typography
                      ml={1.2}
                      variant="subtitle2"
                      fontSize={14}
                      fontWeight={500}
                    >
                      {translate(item.title)}
                    </Typography>
                  </Box>
                );
              })}
            </Stack>
            <Box className="logout_box" onClick={() => logout()}>
              <Iconify icon="majesticons:logout-half-circle" />
              <Typography
                variant="subtitle2"
                ml={0.5}
                fontSize={14}
                fontWeight={500}
              >
                {translate('logout')}
              </Typography>
            </Box>
          </Wrapper>
        </ClickAwayListener>
      )}
    </AnimatePresence>
  );
}
