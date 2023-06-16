import { Box, Typography, useTheme, styled, BoxProps } from '@mui/material';
import { motion, MotionProps } from 'framer-motion';
import Iconify from '../iconify/Iconify';
import { useSettingsContext } from '../settings';
import useLocales from '../../locales/useLocales';

const StyledWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  color: theme.palette.text.primary,
  borderRadius: theme.shape.borderRadius,
  '.item': {
    padding: theme.spacing(1.5),
    backgroundColor: theme.palette.background.overlay,
    display: 'flex',
    width: '50%',
    cursor: 'pointer',
    transition: 'all ease 0.15',
    '&:hover': {
      backgroundColor: theme.palette.background.hovering,
    },
  },
}));

function DarkLightSwitch({ ...props }: BoxProps & MotionProps) {
  const theme = useTheme();
  const { themeMode, onChangeMode } = useSettingsContext();
  const { translate } = useLocales();

  const isDark = themeMode === 'dark';
  const isLight = themeMode === 'light';

  return (
    <StyledWrapper component={motion.div} {...props}>
      <Box
        className="item"
        sx={{
          ...(isDark && {
            '&&': {
              'path, h6': {
                fill: theme.palette.text.contrast,
                color: theme.palette.text.contrast,
              },
            },
          }),
          borderTopLeftRadius: theme.shape.borderRadius,
          borderBottomLeftRadius: theme.shape.borderRadius,
        }}
        onClick={() => onChangeMode('dark')}
      >
        <Iconify icon="material-symbols:dark-mode" width={24} />
        <Typography variant="subtitle2" ml={2}>
          {translate('dark')}
        </Typography>
      </Box>
      <Box
        className="item"
        sx={{
          ...(isLight && {
            '&&': {
              'path, h6': {
                fill: theme.palette.text.contrast,
                color: theme.palette.text.contrast,
              },
            },
          }),
          borderTopRightRadius: theme.shape.borderRadius,
          borderBottomRightRadius: theme.shape.borderRadius,
        }}
        onClick={() => onChangeMode('light')}
      >
        <Iconify icon="ic:round-light-mode" width={24} />
        <Typography variant="subtitle2" ml={2}>
          {translate('light')}
        </Typography>
      </Box>
    </StyledWrapper>
  );
}

export default DarkLightSwitch;
