import Button from "./shared/components/button/button";
import ThemeProvider from "./shared/components/theme-provider";
import ReactGA from "react-ga4";

function App() {
  ReactGA.initialize(import.meta.env.VITE_GA_MEASUREMENT_ID);
  const handleButtonClick = () => {
    ReactGA.event({
      category: "Conversion",
      action: "Click_CTA_Button",
      label: "start service",
    });
  };
  return (
    <ThemeProvider>
      <p>바닐라 익스트랙 스타일 적용</p>
      <Button onClick={handleButtonClick}>primary button component</Button>
      <Button variant="border">border button component</Button>
      <Button variant="gray_fill" size="sm">
        gray fill button
      </Button>
      <Button variant="gray_fill" size="sm" disabled>
        gray fill disabled button
      </Button>
    </ThemeProvider>
  );
}

export default App;
