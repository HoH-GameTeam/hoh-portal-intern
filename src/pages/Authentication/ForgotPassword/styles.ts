import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const ForgotPasswordWrapper = styled(Box)(({ theme }) => ({
  '.box_item': {
    position: 'relative',
    height: 12,
    width: 12,
    borderRadius: theme.shape.borderRadius,
    border: `1px solid ${theme.palette.text.primary}`,
    marginRight: theme.spacing(1),
    '.MuiSvgIcon-root': {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      height: 12,
      width: 12,
      color: theme.palette.primary.main,
    },
    '&.isMatch': {
      borderColor: theme.palette.primary.main,
    },
  },
}));
