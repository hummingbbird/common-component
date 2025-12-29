import { style, styleVariants } from "@vanilla-extract/css";

import { themeVars } from "../../styles/theme.css";

export const base = style({
  textAlign: "center",
  width: "100%",
  padding: "0 2rem",
});

export const buttonVariants = styleVariants({
  primary: [
    base,
    {
      color: themeVars.color.white,
      backgroundColor: themeVars.color.primary500,

      selectors: {
        "&:not(:disabled):active": {
          backgroundColor: themeVars.color.primary500,
        },
        "&:disabled": {
          background: themeVars.color.gray400,
          color: themeVars.color.black,
        },
      },
    },
  ],

  // error: [
  //   base,
  //   {
  //     color: themeVars.color.white,
  //     backgroundColor: themeVars.color.error,

  //     selectors: {
  //       "&:not(:disabled):active": {
  //         color: themeVars.color.error,
  //         backgroundColor: themeVars.color.errorSurface,
  //       },
  //       "&:disabled": {
  //         background: themeVars.color.gray200,
  //         color: themeVars.color.gray400,
  //       },
  //     },
  //   },
  // ],

  gray_fill: [
    base,
    {
      color: themeVars.color.gray500,
      backgroundColor: themeVars.color.gray200,

      selectors: {
        "&:not(:disabled):active": {
          backgroundColor: themeVars.color.gray300,
        },
        "&:disabled": {
          backgroundColor: themeVars.color.gray200,
          color: themeVars.color.gray300,
        },
      },
    },
  ],

  selected: [
    base,
    {
      color: themeVars.color.primary500,
      border: `1px solid ${themeVars.color.primary500}`,
      backgroundColor: themeVars.color.primary300,
      transition: "background-color 0.15s ease",
    },
  ],

  unselected: [
    base,
    {
      color: themeVars.color.gray400,
      border: `1px solid ${themeVars.color.gray300}`,
      transition: "background-color 0.15s ease",
    },
  ],
});

export const buttonSizes = styleVariants({
  sm: {
    height: "4rem",
    borderRadius: "10px",
  },

  md: {
    height: "5rem",
    borderRadius: "12px",
  },

  lg: {
    height: "5.6rem",
    borderRadius: "12px",
  },
});

export type ButtonVariantType = keyof typeof buttonVariants;
export type ButtonSizeType = keyof typeof buttonSizes;
