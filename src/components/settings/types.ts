// ----------------------------------------------------------------------

type ColorVariants = {
  name: string;
  lighter: string;
  light: string;
  main: string;
  dark: string;
  darker: string;
  contrastText: string;
};

export enum LAYOUT_OPTION {
  VERTICAL = 'vertical',
  MINI = 'mini',
}

export type ThemeModeValue = 'light' | 'dark';
export type ThemeDirectionValue = 'rtl' | 'ltr';
export type ThemeContrastValue = 'default' | 'bold';
export type ThemeLayoutValue = 'vertical' | 'horizontal' | 'mini';
export type ThemeColorPresetsValue =
  | 'default'
  | 'cyan'
  | 'purple'
  | 'blue'
  | 'orange'
  | 'red';
export type ThemeStretchValue = boolean;
export type ThemeHeaderValue = boolean;
export type ThemeBottomBarValue = boolean;

export type SettingsValueProps = {
  themeMode: ThemeModeValue;
  themeLayout: ThemeLayoutValue;
  themeStretch: ThemeStretchValue;
  themeContrast: ThemeContrastValue;
  themeDirection: ThemeDirectionValue;
  themeColorPresets: ThemeColorPresetsValue;
  themeHeader: ThemeHeaderValue;
  themeBottomBar: ThemeBottomBarValue;
};

export type SettingsContextProps = SettingsValueProps & {
  presetsColor: ColorVariants;
  presetsOption: {
    name: string;
    value: string;
  }[];

  // Mode
  onToggleMode: VoidFunction;
  onChangeMode: (mode: ThemeModeValue) => void;

  // Direction
  onToggleDirection: VoidFunction;
  onChangeDirection: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeDirectionByLang: (lang: string) => void;

  // Layout
  onToggleLayout: VoidFunction;
  onChangeLayout: (layout_option: LAYOUT_OPTION) => void;

  // Contrast
  onToggleContrast: VoidFunction;
  onChangeContrast: (event: React.ChangeEvent<HTMLInputElement>) => void;

  // Color
  onChangeColorPresets: (event: React.ChangeEvent<HTMLInputElement>) => void;

  // Stretch
  onToggleStretch: VoidFunction;

  // Reset
  onResetSetting: VoidFunction;

  // Header
  onToggleHeader: (toggle: ThemeHeaderValue) => void;

  // BottomBar
  onToggleBottomBar: (toggle: ThemeHeaderValue) => void;
};
