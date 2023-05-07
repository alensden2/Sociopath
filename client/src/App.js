import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "scenes/homePage";
import LoginPage from "scenes/loginPage";
import ProfilePage from "scenes/profilePage";
import { themeSettings } from "theme";

function App() {
  const mode = useSelector((state) => state.mode);
  /**
   * useMemo allows you to memoize the result of a function call,
   * which means that the function is only executed when necessary,
   * and the cached result is returned on subsequent renders.
   * This can be useful when you have a function that is called frequently or has a
   * high computational cost, and you want to avoid unnecessary re-execution of that function.
   *
   * In the context of Redux, useMemo can be used to optimize the mapping of Redux state
   * to props in a React component. When you use useSelector to select data from the Redux store,
   * the component will re-render whenever the selected data changes, even if the component doesn't
   * actually use that data. This can cause unnecessary re-renders and reduce performance.
   * By wrapping the selector with useMemo, you can memoize the result and prevent the component
   * from re-rendering when the selected data hasn't actually changed.
   */

  /**
   * In this code, [mode] is a dependency array passed to the useMemo hook.
   * This means that the memoized value (theme) will only be recomputed if the value of mode changes.
   * The createTheme function is likely creating a theme object based on the value of mode.
   * By passing [mode] as a dependency array, the useMemo hook will ensure that the theme object is only
   * re-created when the mode value changes. This can help optimize the performance of the component
   * by avoiding unnecessary re-creation of the theme object on every render.
   * For example, let's say that mode can have two possible values: "light" and "dark".
   * If mode is initially set to "light", the useMemo hook will create a theme object for the
   * "light" mode. If mode then changes to "dark", the useMemo hook will re-compute the theme object
   * for the "dark" mode. If mode remains "dark", the theme object will not be re-computed on subsequent renders unless mode changes again.
   * By specifying the dependency array for useMemo, you can control when the memoized value should be
   * re-computed based on changes to the dependencies. This can help to optimize the performance of your application.
   */
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/profile/:userId" element={<ProfilePage />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
