import { motion } from 'framer-motion';
import React from 'react';
import { NavLink, useLocation, useNavigate, useParams } from 'react-router-dom';

import { Box, Typography, useTheme, Select, MenuItem } from '@mui/material';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';

import { varSlide } from '../../components/animate';
import Iconify from '../../components/iconify';
import useLocales from '../../locales/useLocales';
import Markdown from '../../markdown/Markdown';
import { HELP_CENTER_PATHS } from '../../routes/routesPage';
import { helpSections } from './help-sections';
import useResponsive from '../../hooks/useResponsive';
import {
  HelpCenterWrapper,
  HelpContentBox,
  HelpTab,
  HelpTabItem,
  SelectTabBox,
} from './styles';

enum GAME {
  CRASH = 'crash',
  BACCARAT = 'baccarat',
  DICE = 'dice',
  LIMBO = 'limbo',
}

const games = [GAME.CRASH, GAME.BACCARAT, GAME.DICE, GAME.LIMBO];

const HelpCenter = () => {
  const { translate, currentLang } = useLocales();
  const { selectedHelpTab } = useParams();
  const [selectedGame, setSelectedGame] = React.useState<GAME>(GAME.CRASH);
  const [markdownContent, setMarkdownContent] = React.useState('');
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const isDownMd = useResponsive('down', 'md');
  const isFairnessTab =
    HELP_CENTER_PATHS.PROVABLY_FAIR.includes(selectedHelpTab);

  React.useLayoutEffect(() => {
    try {
      if (isFairnessTab) {
        import(
          `../../markdown/help/${currentLang.value}/${selectedHelpTab}/${selectedGame}.md`
        )
          .then((response) => fetch(response.default))
          .then((response) => response.text())
          .then((text) => setMarkdownContent(text))
          .catch(() => {
            setMarkdownContent('Coming soon...');
          });
        return;
      }
      import(`../../markdown/help/${currentLang.value}/${selectedHelpTab}.md`)
        .then((response) => fetch(response.default))
        .then((response) => response.text())
        .then((text) => setMarkdownContent(text))
        .catch(() => {
          setMarkdownContent('Coming soon...');
        });
    } catch (error) {
      setMarkdownContent('Coming soon...');
    }
  }, [selectedHelpTab, currentLang, selectedGame]);

  return (
    <HelpCenterWrapper maxWidth="lg">
      <Box display="flex" justifyContent="flex-start">
        <Iconify
          color={theme.palette.primary.main}
          icon="ic:round-balance"
          width={24}
        />
        <Typography variant="h6" className="title">
          {translate('help_center')}
        </Typography>
      </Box>
      <Box
        mt={3}
        width="100%"
        display="flex"
        {...(isDownMd && {
          flexDirection: 'column',
        })}
      >
        {isDownMd ? (
          <SelectTabBox mb={2}>
            <Select
              fullWidth
              value={location.pathname}
              onChange={(event) => {
                navigate(event.target.value);
              }}
              IconComponent={KeyboardArrowUpRoundedIcon}
              MenuProps={{
                sx: {
                  '.MuiMenu-list': {
                    backgroundColor: theme.palette.background.main,
                    padding: 0,
                    color: theme.palette.text.contrast,
                  },
                  '&&& .Mui-selected': {
                    backgroundColor: theme.palette.background.hovering,
                  },
                  '&& .MuiMenuItem-root': {
                    paddingTop: theme.spacing(1),
                    paddingBottom: theme.spacing(1),
                  },
                },
              }}
            >
              {helpSections.map((tab) => (
                <MenuItem value={tab.path} key={tab.key}>
                  <Typography color="text.primary" variant="subtitle2">
                    {translate(tab.key)}
                  </Typography>
                </MenuItem>
              ))}
            </Select>
          </SelectTabBox>
        ) : (
          <HelpTab mr={1} direction="column" p={2}>
            {helpSections.map((tab) => (
              <NavLink key={tab.key} to={tab.path}>
                <HelpTabItem>
                  <Typography>{translate(tab.key)}</Typography>
                </HelpTabItem>
              </NavLink>
            ))}
          </HelpTab>
        )}
        <HelpContentBox flexGrow={1}>
          <Box
            width="100%"
            component={motion.div}
            variants={{ ...varSlide({ distance: 120 }).inUp }}
          >
            {isFairnessTab && (
              <>
                <Typography variant="h6" color="text.contrast">
                  {translate('game')}
                </Typography>
                <SelectTabBox my={2}>
                  <Select
                    fullWidth
                    value={selectedGame}
                    onChange={(event) => {
                      setSelectedGame(event.target.value as GAME);
                    }}
                    IconComponent={KeyboardArrowUpRoundedIcon}
                    MenuProps={{
                      sx: {
                        '.MuiMenu-list': {
                          backgroundColor: theme.palette.background.main,
                          p: 0,
                          color: theme.palette.text.contrast,
                        },
                        '&&& .Mui-selected': {
                          backgroundColor: theme.palette.background.hovering,
                        },
                        '&& .MuiMenuItem-root': {
                          paddingTop: theme.spacing(1),
                          paddingBottom: theme.spacing(1),
                        },
                      },
                    }}
                  >
                    {games.map((game) => (
                      <MenuItem value={game} key={game}>
                        <Typography color="text.primary" variant="subtitle2">
                          {game}
                        </Typography>
                      </MenuItem>
                    ))}
                  </Select>
                </SelectTabBox>
              </>
            )}
            <Markdown>{markdownContent}</Markdown>
          </Box>
        </HelpContentBox>
      </Box>
    </HelpCenterWrapper>
  );
};

export default HelpCenter;
