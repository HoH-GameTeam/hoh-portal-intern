import { styled } from '@mui/material/styles';
import { TextField, Button, ButtonProps, Box } from '@mui/material';

export const LiveStatsBox = styled(Box)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  width: 300,
  border: 0,
  boxShadow: theme.shadows[6],
  padding: theme.spacing(1.5),
  paddingTop: 0,
}));
