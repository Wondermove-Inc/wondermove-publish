import React, { useEffect, useState } from "react";
// import Desktop from "./1920_desktop/desktop";
import SKuber from "./S-kuber/index";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Theme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 601,
      md: 1025,
      lg: 1441,
      xl: 1921,
    },
  },
});
const HomePage = () => {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    // screenwidth
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // 초기화 중 화면 너비를 한 번 가져옵니다.
    handleResize();

    // 화면 너비 변경 모니터링
    window.addEventListener("resize", handleResize);

    // 정리 이벤트 리스너
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    // <div>{screenWidth && screenWidth >= 768 ? <Desktop /> : <Mobile />}</div>
    <ThemeProvider theme={theme}>
      <div>
        <SKuber />
      </div>
    </ThemeProvider>
  );
};

export default HomePage;
