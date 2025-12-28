import { globalStyle } from "@vanilla-extract/css";

/* ===== Box Model Reset ===== */
globalStyle("*, *::before, *::after", {
  margin: 0,
  padding: 0,
  boxSizing: "border-box",
});

/* ===== rem 단위 비율 조정 ===== */
globalStyle("html", {
  fontSize: "62.5%",
});

/* ===== Body 기본값 ===== */
/**
 * line-height 기본값 설정으로 가독성 향상
 */
globalStyle("body", {
  lineHeight: 1.5,
});

/* ===== 제목 요소 스타일 초기화 ===== */
globalStyle("h1, h2, h3, h4, h5, h6", {
  margin: 0,
  fontWeight: "inherit",
  fontSize: "inherit",
  lineHeight: "inherit",
});

/* ===== 텍스트 요소 초기화: p 태그 기본 마진 제거 ===== */
globalStyle("p", {
  margin: 0,
});

/* ===== 리스트 초기화 ===== */
globalStyle("ul, ol", {
  margin: 0,
  padding: 0,
  listStyle: "none",
});

/* ===== 링크 초기화 ===== */
globalStyle("a", {
  color: "inherit",
  textDecoration: "none",
});

/* ===== 미디어 요소 초기화 ===== */
globalStyle("img, picture, video, canvas, svg", {
  display: "block",
  maxWidth: "100%",
  height: "auto",
});

/* ===== 버튼 요소 스타일 초기화 ===== */
globalStyle("button", {
  all: "unset",
  cursor: "pointer",
  boxSizing: "border-box",
  // 텍스트 선택 방지
  userSelect: "none",
});

/* ===== 입력 요소 스타일 초기화 ===== */
globalStyle("input, textarea, select", {
  all: "unset",
  fontFamily: "inherit",
  fontSize: "inherit",
  color: "inherit",
  // 모바일에서 확대 방지
  touchAction: "manipulation",
});
