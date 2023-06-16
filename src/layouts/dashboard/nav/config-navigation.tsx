// routes
import { Game } from 'graphql';
import { PATH_DASHBOARD } from '../../../routes/paths';
import { NavListProps } from '../../../components/nav-section/types';
// components
import {
  IconCasino,
  IconJudgement,
  IconGameBaccarat,
  IconGameBitfarm,
  IconGameDice,
  IconGameCrash,
  IconGameCryptoQuest,
  IconGameMinipoker,
  IconGameLimbo,
} from '../../../assets/icons';

// ----------------------------------------------------------------------
// ...
const navConfig: NavListProps[] = [
  {
    key: 'casino',
    icon: <IconCasino />,
    path: `${PATH_DASHBOARD.casino.root}/list`,
    type: 'item',
    disable: false,
  },
  {
    key: 'casino_group',
    type: 'grouped',
    items: [
      {
        key: 'crash',
        path: `${PATH_DASHBOARD.casino.root}/crash`,
        icon: <IconGameCrash />,
        type: 'grouped_item',
        disable: false,
      },
      {
        key: 'Bit Farm',
        path: `${PATH_DASHBOARD.casino.root}/bitfarm`,
        icon: <IconGameBitfarm />,
        type: 'grouped_item',
        disable: false,
      },
      {
        key: 'dice',
        path: `${PATH_DASHBOARD.casino.root}/dice`,
        icon: <IconGameDice />,
        type: 'grouped_item',
        disable: false,
      },
      {
        key: 'Crypto Quest',
        path: `${PATH_DASHBOARD.casino.root}/cryptoquest`,
        icon: <IconGameCryptoQuest />,
        type: 'grouped_item',
        disable: false,
      },
      {
        key: 'Mini Poker',
        path: `${PATH_DASHBOARD.casino.root}/minipoker`,
        icon: <IconGameMinipoker />,
        type: 'grouped_item',
        disable: false,
      },
      {
        key: 'Baccarat',
        path: `${PATH_DASHBOARD.casino.root}/baccarat`,
        icon: <IconGameBaccarat />,
        type: 'grouped_item',
        disable: false,
      },
      {
        key: 'Limpo',
        path: `${PATH_DASHBOARD.casino.root}/limbo`,
        icon: <IconGameLimbo />,
        type: 'grouped_item',
        disable: false,
      },
    ],
  },
  {
    key: 'fairness_group',
    type: 'grouped',
    items: [
      {
        key: 'fairness',
        path: '',
        icon: <IconJudgement />,
        type: 'grouped_item',
        disable: false,
      },
    ],
  },
];

export const getConfigNavWithGames = (games: Game[]) => {
  const showedGamesOnNav = 6;
  const listGamesHasIcon = [
    'crash',
    'minipoker',
    'bitfarm',
    'limbo',
    'baccarat',
    'cryptoquest',
    'dice',
  ];

  const getGameIcon = (slug: string) => {
    switch (slug) {
      case listGamesHasIcon[0]:
        return <IconGameCrash />;
      case listGamesHasIcon[1]:
        return <IconGameMinipoker />;
      case listGamesHasIcon[2]:
        return <IconGameBitfarm />;
      case listGamesHasIcon[3]:
        return <IconGameLimbo />;
      case listGamesHasIcon[4]:
        return <IconGameBaccarat />;
      case listGamesHasIcon[5]:
        return <IconGameCryptoQuest />;
      case listGamesHasIcon[6]:
        return <IconGameDice />;
      default:
        return null;
    }
  };

  return navConfig.map((item) => {
    if (!games || games.length === 0) return item;

    if (item.key === 'casino_group') {
      const gamesNavItems = [];

      for (const game of games) {
        if (listGamesHasIcon.includes(game.slug)) {
          gamesNavItems.push({
            key: game.name,
            path: `${PATH_DASHBOARD.casino.root}/${game.slug}`,
            icon: getGameIcon(game.slug),
            type: 'grouped_item',
            disable: false,
          });
        }
      }

      return {
        ...item,
        items: gamesNavItems.slice(0, showedGamesOnNav),
      };
    }

    return item;
  });
};

export default navConfig;
