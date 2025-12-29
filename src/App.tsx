import Button from "./shared/components/button/button";
import ThemeProvider from "./shared/components/theme-provider";

function App() {
  return (
    <ThemeProvider>
      <p>바닐라 익스트랙 스타일 적용</p>
      <Button>primary button component</Button>
      <Button variant="border">border button component</Button>
      <Button variant="gray_fill" size="sm" >gray fill button</Button>
      <Button variant="gray_fill" size="sm" disabled>gray fill disabled button</Button>
    </ThemeProvider>
  );
}

export default App;
