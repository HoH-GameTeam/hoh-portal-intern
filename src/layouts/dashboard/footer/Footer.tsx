import { Link as RouterLink } from 'react-router-dom';

import { Box, Divider, Stack, Typography, useTheme } from '@mui/material';

import logo_full from '../../../assets/logo/logo_full.png';
import Iconify from '../../../components/iconify/Iconify';
import useActiveLink from '../../../hooks/useActiveLink';
import useLocales from '../../../locales/useLocales';
import { configFooter } from './config-footer';
import { FooterWrapper, GoTopBox } from './styles';

export default function Footer() {
  const { translate } = useLocales();
  const theme = useTheme();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <FooterWrapper py={{ xs: 3, md: 5 }} px={{ xs: 3, md: 8 }}>
      <Stack
        width="100%"
        maxWidth="lg"
        margin="auto"
        direction={{ lg: 'row', md: 'row', sm: 'column' }}
        justifyContent="space-around"
      >
        {configFooter.map((footerItem) => (
          <Stack
            direction="column"
            key={footerItem.section}
            sx={{
              [theme.breakpoints.down('md')]: {
                '.title': {
                  textAlign: 'center',
                },
                '&:not(:first-of-type)': {
                  mt: 3,
                },
              },
            }}
          >
            <Typography variant="subtitle1" className="title">
              {translate(footerItem.section)}
            </Typography>
            <Stack
              className="list"
              spacing={{ xs: 3, md: 2 }}
              direction={{ lg: 'column', md: 'column', sm: 'row', xs: 'row' }}
              flexWrap="wrap"
              sx={{
                [theme.breakpoints.down('md')]: {
                  justifyContent: 'center',
                },
              }}
            >
              {footerItem.items.map((childItem) => {
                const { isExternalLink } = useActiveLink(childItem.path);
                return (
                  <Typography
                    className="footer_link_item"
                    whiteSpace="nowrap"
                    key={childItem.key}
                    component={RouterLink}
                    to={childItem.path}
                    target={isExternalLink ? '_blank' : '_self'}
                  >
                    <span style={{ whiteSpace: 'nowrap' }}>
                      {translate(childItem.key)}
                    </span>
                  </Typography>
                );
              })}
            </Stack>
          </Stack>
        ))}
      </Stack>
      <Divider sx={{ mt: 5 }} />
      <Stack
        direction={{ xs: 'column', sm: 'column', md: 'row' }}
        maxWidth="lg"
        margin="auto"
        justifyContent="center"
        mt={2}
      >
        <Box className="footer-content-left">
          <img
            style={{ height: 64, marginLeft: -16, width: 'max-content' }}
            src={logo_full}
            alt="coco.game"
          />
          <Typography variant="caption" whiteSpace="pre-wrap" textAlign="left">
            A multi-award winning crypto casino. With a player-centric approach,
            COCO.GAME is able to satisfy millions of gamblers across the globe.
            COCO.GAME has its priority set on its community, ensuring an
            everlasting and endlessly entertaining gambling experience.
          </Typography>
        </Box>
        <Box className="footer-content-right">
          <Typography variant="subtitle1" color="text.contrast">
            {translate('follow_us_on')}
          </Typography>
          <Stack mt={3} spacing={3} direction="row">
            <Box component={RouterLink}>
              <Iconify icon="logos:discord-icon" width={26} />
            </Box>
            <Box component={RouterLink}>
              <Iconify icon="ic:outline-facebook" color="#3360ff" width={26} />
            </Box>
            <Box component={RouterLink}>
              <Iconify icon="logos:telegram" width={26} />
            </Box>
            <Box component={RouterLink}>
              <Iconify
                color={theme.palette.text.primary}
                icon="icon-park-outline:github"
                width={26}
              />
            </Box>
            <Box component={RouterLink}>
              <Iconify color="#1DA1F2" icon="mdi:twitter" width={26} />
            </Box>
          </Stack>
        </Box>
        <GoTopBox py={1.5} px={2} onClick={() => handleScrollToTop()}>
          <Iconify
            width={20}
            color={theme.palette.primary.main}
            icon="material-symbols:arrow-circle-up-outline"
          />
          <Typography variant="caption" color="text.contrast">
            {translate('top')}
          </Typography>
        </GoTopBox>
      </Stack>
    </FooterWrapper>
  );
}
