import { globalStyle, style } from "@vanilla-extract/css";

globalStyle(":root", {
  vars: {
    "--min-width": "1020px",
    "--max-width": "1440px",
    "--height": "100dvh",
  },
});

globalStyle("html, body", {
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "1920px",
  margin: "0",
  padding: "0",
  fontSize: "62.5%",
  scrollbarWidth: "none",
  scrollBehavior: "smooth",
  fontFamily: `'SUIT Variable', sans-serif`,
});

globalStyle("::-webkit-scrollbar", {
  display: "none",
});

export const rootStyle = style({
  display: "flex",
  flexDirection: "column",
  width: "1920px",
  margin: "0 auto",
  minHeight: "100dvh",
  backgroundColor: "white",
});

export const noRootShadow = style([
  rootStyle,
  {
    boxShadow: "none",
  },
]);
