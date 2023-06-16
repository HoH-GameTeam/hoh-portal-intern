// ----------------------------------------------------------------------

export function remToPx(value: string) {
  return Math.round(parseFloat(value) * 16);
}

export function pxToRem(value: number) {
  return `${value / 16}rem`;
}

export function responsiveFontSizes({
  sm,
  md,
  lg,
}: {
  sm: number;
  md: number;
  lg: number;
}) {
  return {
    '@media (max-width:900px)': {
      fontSize: pxToRem(sm),
    },
    '@media (min-width:900px)': {
      fontSize: pxToRem(md),
    },
    '@media (min-width:1200px)': {
      fontSize: pxToRem(lg),
    },
  };
}

export function responsiveFontWeight({
  sm,
  md,
  lg,
}: {
  sm: number;
  md: number;
  lg: number;
}) {
  return {
    '@media (max-width: 900px)': {
      fontWeight: sm,
    },
    '@media (min-width: 900px)': {
      fontWeight: md,
    },
    '@media (min-width:1200px)': {
      fontWeight: lg,
    },
  };
}

// ----------------------------------------------------------------------

const FONT_PRIMARY =
  'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'; // Google Font

const typography = {
  fontFamily: FONT_PRIMARY,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  h1: {
    fontWeight: 700,
    lineHeight: 80 / 60,
    fontSize: pxToRem(60),
    ...responsiveFontSizes({ sm: 52, md: 58, lg: 60 }),
  },
  h2: {
    fontWeight: 700,
    lineHeight: 60 / 50,
    fontSize: pxToRem(50),
    ...responsiveFontSizes({ sm: 40, md: 44, lg: 50 }),
  },
  h3: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(42),
    ...responsiveFontSizes({ sm: 26, md: 30, lg: 42 }),
  },
  h4: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(34),
    ...responsiveFontSizes({ sm: 20, md: 34, lg: 34 }),
  },
  h5: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(24),
    ...responsiveFontSizes({ sm: 20, md: 20, lg: 24 }),
  },
  h6: {
    fontWeight: 700,
    lineHeight: 28 / 20,
    fontSize: pxToRem(17),
    ...responsiveFontSizes({ sm: 16, md: 17, lg: 17 }),
  },
  subtitle1: {
    fontWeight: 500,
    lineHeight: 1.5,
    fontSize: pxToRem(16),
    ...responsiveFontSizes({ sm: 14, md: 14, lg: 16 }),
  },
  subtitle2: {
    fontWeight: 500,
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
  },
  body1: {
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: pxToRem(16),
  },
  body2: {
    fontWeight: 400,
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
  },
  caption: {
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
  },
  overline: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
    textTransform: 'uppercase',
  },
  button: {
    lineHeight: 24 / 14,
    fontSize: pxToRem(14),
    textTransform: 'capitalize',
    ...responsiveFontWeight({ sm: 500, md: 700, lg: 700 }),
    ...responsiveFontSizes({ sm: 14, md: 16, lg: 16 }),
  },
} as const;

export default typography;
