import Button from "./shared/components/button/button";
import ThemeProvider from "./shared/components/theme-provider";

function App() {
  return (
    <ThemeProvider>
      <p>바닐라 익스트랙 스타일 적용</p>
      <button>버튼 스타일 초기화 됐나?</button>
      <Button>이건 버튼 컴포넌트야</Button>
    </ThemeProvider>
  );
}

export default App;
