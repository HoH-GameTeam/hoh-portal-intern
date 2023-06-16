import { HELP_CENTER_PATHS } from '../../../routes/routesPage';

export const configFooter = [
  {
    section: 'game_hub',
    items: [
      {
        key: 'casino_home',
        path: '/casino',
      },
      {
        key: 'video_poker',
        path: '/casino/1',
      },
      {
        key: 'baccarat',
        path: '/casino/2',
      },
      {
        key: 'crash',
        path: '/casino/3',
      },
      {
        key: 'bitfarm',
        path: '/casino/4',
      },
      {
        key: 'crypto_quest',
        path: '/casino/5',
      },
      {
        key: 'classic_dice',
        path: '/casino/6',
      },
    ],
  },
  {
    section: 'promotion',
    items: [
      {
        key: 'vip_club',
        path: '',
      },
      {
        key: 'affiliate',
        path: '',
      },
      {
        key: 'promotions',
        path: '',
      },
      {
        key: 'refer_friend',
        path: '',
      },
    ],
  },
  {
    section: 'support_legal',
    items: [
      // {
      //   key: 'help_center',
      //   path: '/help/',
      // },
      // {
      //   key: 'fairness',
      //   path: HELP_CENTER_PATHS.PROVABLY_FAIR,
      // },
      // {
      //   key: 'faq',
      //   path: HELP_CENTER_PATHS.FAQ,
      // },
      // {
      //   key: 'privacy_policy',
      //   path: HELP_CENTER_PATHS.PRIVACY_POLICY,
      // },
      {
        key: 'terms_of_service',
        path: HELP_CENTER_PATHS.TERMS_SERVICE,
      },
      {
        key: 'aml',
        path: HELP_CENTER_PATHS.AML,
      },
      {
        key: 'responsible_gambling',
        path: HELP_CENTER_PATHS.RES_GAMBLING,
      },
      // {
      //   key: 'registration_login',
      //   path: HELP_CENTER_PATHS.REG_LOG,
      // },
      // {
      //   key: 'live_support',
      //   path: HELP_CENTER_PATHS.SUPPORT,
      // },
    ],
  },
  {
    section: 'about_us',
    items: [
      {
        key: 'news',
        path: '/news',
      },
      {
        key: 'business_contact',
        path: '/business-contact',
      },
      {
        key: 'work_with_us',
        path: '/work-with-us',
      },
      {
        key: 'verify_representative',
        path: '/verify-represent',
      },
    ],
  },
];
