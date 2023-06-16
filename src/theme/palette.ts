import { alpha } from '@mui/material/styles';
import {
  BACKGROUND_DISABLE_COLOR,
  BACKGROUND_HOVERING_COLOR,
  BACKGROUND_MAIN_COLOR,
  BACKGROUND_OVERLAY_COLOR,
  BACKGROUND_SECONDARY_COLOR,
  BACKGROUND_TABLE_COLOR,
  BLUE_COLOR,
  LINEAR_BLUE_COLOR,
  LINEAR_GREEN_COLOR,
  LINEAR_ORANGE_COLOR,
  LINEAR_PURPLE_COLOR,
  ORANGE_COLOR,
  PRIMARY_GREEN_COLOR,
  PRIMARY_PURPLE_COLOR,
  TEXT_CONTRAST_COLOR,
  TEXT_GREY_COLOR,
  TEXT_DISABLE_COLOR,
  RED_COLOR,
  GREEN_COLOR,
  PURPLE_LIGHT_COLOR,
  PURPLE_COLOR,
} from './colors';
// ----------------------------------------------------------------------

export type ColorSchema =
  | 'primary'
  | 'secondary'
  | 'info'
  | 'success'
  | 'warning'
  | 'error';

declare module '@mui/material/styles/createPalette' {
  interface TypeBackground {
    main: string;
    neutral: string;
    hovering: string;
    secondary: string;
    overlay: string;
    table: string;
    disable: string;
  }
  interface TypeText {
    contrast: string;
  }
  interface SimplePaletteColorOptions {
    lighter: string;
    darker: string;
  }
  interface PaletteColor {
    lighter: string;
    darker: string;
  }
  interface Palette {
    linear: {
      purple: string;
      green: string;
      blue: string;
      orange: string;
    };
    support: {
      orange: string;
      blue: string;
      red: string;
      green: string;
    };
  }
  interface PaletteOptions {
    linear: {
      purple: string;
      green: string;
      blue: string;
      orange: string;
    };
    support: {
      orange: string;
      blue: string;
      red: string;
      green: string;
    };
  }
}

// SETUP COLORS

const GREY = {
  0: '#FFFFFF',
  100: '#F9FAFB',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#919EAB',
  600: '#637381',
  700: '#454F5B',
  800: '#212B36',
  900: '#161C24',
};

const PRIMARY = {
  lighter: '#C8FACD',
  light: GREEN_COLOR, // green color
  main: PRIMARY_GREEN_COLOR,
  dark: '#007B55',
  darker: '#005249',
  contrastText: '#FFFFFF',
};

const SECONDARY = {
  lighter: '#D6E4FF',
  light: PURPLE_LIGHT_COLOR, // purple light
  main: PRIMARY_PURPLE_COLOR, // primary purple
  dark: PURPLE_COLOR, // purple color
  darker: '#091A7A',
  contrastText: '#FFFFFF',
};

const INFO = {
  lighter: '#CAFDF5',
  light: '#61F3F3',
  main: '#00B8D9',
  dark: '#006C9C',
  darker: '#003768',
  contrastText: '#FFFFFF',
};

const SUCCESS = {
  lighter: '#D8FBDE',
  light: '#86E8AB',
  main: '#36B37E',
  dark: '#1B806A',
  darker: '#0A5554',
  contrastText: '#FFFFFF',
};

const WARNING = {
  lighter: '#FFF5CC',
  light: '#FFD666',
  main: '#FFAB00',
  dark: '#B76E00',
  darker: '#7A4100',
  contrastText: GREY[800],
};

const ERROR = {
  lighter: '#FFE9D5',
  light: '#FFAC82',
  main: RED_COLOR, // error main
  dark: '#B71D18',
  darker: '#7A0916',
  contrastText: '#FFFFFF',
};

const COMMON = {
  common: { black: '#000000', white: '#FFFFFF' },
  primary: PRIMARY,
  secondary: SECONDARY,
  info: INFO,
  success: SUCCESS,
  warning: WARNING,
  error: ERROR,
  grey: GREY,
  divider: alpha(GREY[500], 0.24),
  action: {
    hover: alpha(GREY[500], 0.08),
    selected: alpha(GREY[500], 0.16),
    disabled: alpha(GREY[500], 0.8),
    disabledBackground: alpha(GREY[500], 0.24),
    focus: alpha(GREY[500], 0.24),
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
  linear: {
    purple: LINEAR_PURPLE_COLOR,
    green: LINEAR_GREEN_COLOR,
    blue: LINEAR_BLUE_COLOR,
    orange: LINEAR_ORANGE_COLOR,
  },
  support: {
    orange: ORANGE_COLOR,
    blue: BLUE_COLOR,
    red: RED_COLOR,
    green: GREEN_COLOR,
  },
};

export default function palette(themeMode: 'light' | 'dark') {
  const light = {
    ...COMMON,
    mode: 'light',
    text: {
      primary: '#31373D',
      secondary: GREY[600],
      disabled: TEXT_GREY_COLOR,
      contrast: '#31373D',
    },
    background: {
      main: '#F2F2F2',
      secondary: '#FFFFFF',
      overlay: '#F5F5F5',
      hovering: '#ECECEC',
      paper: '#FFFFFF',
      default: '#F2F2F2',
      table: '#EEEEEE',
      disable: '#DDDDDD',
      neutral: GREY[200],
    },
    action: {
      ...COMMON.action,
      active: GREY[600],
    },
  } as const;

  const dark = {
    ...COMMON,
    mode: 'dark',
    text: {
      primary: TEXT_GREY_COLOR,
      secondary: GREY[500],
      disabled: TEXT_DISABLE_COLOR,
      contrast: TEXT_CONTRAST_COLOR,
    },
    background: {
      main: BACKGROUND_MAIN_COLOR,
      secondary: BACKGROUND_SECONDARY_COLOR,
      overlay: BACKGROUND_OVERLAY_COLOR,
      paper: BACKGROUND_SECONDARY_COLOR, // GREY[800],
      hovering: BACKGROUND_HOVERING_COLOR,
      default: BACKGROUND_MAIN_COLOR, // GREY[900],
      table: BACKGROUND_TABLE_COLOR,
      disable: BACKGROUND_DISABLE_COLOR,
      neutral: alpha(GREY[500], 0.16),
    },
    action: {
      ...COMMON.action,
      active: GREY[500],
    },
  } as const;

  return themeMode === 'light' ? light : dark;
}
