import React from 'react';
// @mui
import { Container, Typography, Button } from '@mui/material';
// components
import { useSettingsContext } from '../components/settings';
// ----------------------------------------------------------------------

export default function PageOne() {
  const { themeStretch } = useSettingsContext();
  const [open, setIsOpen] = React.useState(false);

  return (
    <Container maxWidth={themeStretch ? false : 'xl'}>
      <Typography variant="h3" component="h1" paragraph>
        Home page
      </Typography>
      <Button onClick={() => setIsOpen(true)}> show wallet</Button>
    </Container>
  );
}
