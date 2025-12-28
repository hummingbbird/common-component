import { createGlobalTheme } from "@vanilla-extract/css";

export const color = createGlobalTheme(":root", {
  white: { 500: "#fdfdfd" },
  black: { 500: "#121212" },
  primary: { 500: "#fa6800", 400: "#fd822a", 300: "#fd8f41ff" },
});
