import React from "react";
import PropTypes from "prop-types";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import getTheme from "@/theme/getTheme";
import Box from "@mui/material/Box";
import ToggleColorMode from "@/components/ToggleColorMode";

function MainLayout({ children }) {
   const [mode, setMode] = React.useState(localStorage.getItem("themeMode") || "light");
   const defaultTheme = createTheme(getTheme(mode));

   // This code only runs on the client side, to determine the system color preference
   React.useEffect(() => {
      // Check if there is a preferred mode in localStorage
      const savedMode = localStorage.getItem("themeMode");
      if (savedMode) {
         setMode(savedMode);
      } else {
         // If no preference is found, it uses system preference
         const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
         setMode(systemPrefersDark ? "dark" : "light");
      }
   }, []);

   const toggleColorMode = () => {
      const newMode = mode === "dark" ? "light" : "dark";
      setMode(newMode);
      localStorage.setItem("themeMode", newMode); // Save the selected mode to localStorage
   };

   return (
      <ThemeProvider theme={defaultTheme}>
         <CssBaseline enableColorScheme />
         {children}
         <Box position="fixed" right={15} bottom={15}>
            <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
         </Box>
      </ThemeProvider>
   );
}

MainLayout.propTypes = {
   children: PropTypes.node,
};

export default MainLayout;
