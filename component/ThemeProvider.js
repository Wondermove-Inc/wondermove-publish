import React from "react";
import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";
// declare module '@material-ui/core/styles'{
//     interface Theme {
//       status: {
//         danger: string;
//       };
//     }
//     // allow configuration using `createTheme`
//     interface ThemeOptions {
//       status?: {
//         danger?: string;
//       };
//     }
//   }
// const ThemeProvider = ({ children }) => {
let theme = createTheme({
  breakpoints: {
    values: {
      mobile: 600,
      tablet: 1024,
      laptop: 1440,
      desktop: 1920,
    },
  },
});

// theme = responsiveFontSizes(theme, );

// //   return <>{...children}</>;
// };

export default theme;
