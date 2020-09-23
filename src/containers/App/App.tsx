import React from "react";
import { GlobalStyle } from "@styles/global-styles";
import { ThemeProvider } from "styled-components";
// css style configs
import theme from "@styles/theme";
import "@styles/fonts.css"; // import config font define
import "sweetalert2/dist/sweetalert2.min.css";
// diff import
import Home from "@containers/Home";
import Loading from "@components/Loading";
import { useSelector } from "react-redux";
import { selectLayOutStore } from "@containers/LayOutDash/store/selecters";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LayOutDash from "@containers/LayOutDash";
import NotFoundPage from "@components/NotFoundPage";
import { selectAppStore } from "./store/selecters";
import LanguageProvider from "./LanguageProvider";

function App() {
  const { loading } = useSelector(selectLayOutStore);
  const { login } = useSelector(selectAppStore);
  console.log("login", login);

  return (
    <LanguageProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route>
              <LayOutDash />
            </Route>
            <Route path="*">
              <NotFoundPage />
            </Route>
          </Switch>
        </Router>
        {/* // extra config global */}
        <Loading active={loading} />
        <GlobalStyle />
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
