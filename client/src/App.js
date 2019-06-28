import React from "react";
import UserForm from "./components/UserForm";
//MUI
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const theme = createMuiTheme({
  primary: {
    main: "#304ffe",
    light: "#7a7cff",
    dark: "#0026ca",
    contrastText: "#ffffff"
  },
  secondary: {
    main: "#ff3d00",
    light: "#ff7539",
    dark: "#c30000",
    contrastText: "#ffffff"
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <UserForm />
    </ThemeProvider>
  );
}

export default App;
