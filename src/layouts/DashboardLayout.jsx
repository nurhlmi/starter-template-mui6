import React from "react";
import PropTypes from "prop-types";
import { alpha, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import getDashboardTheme from "@/theme/getDashboardTheme";
import TemplateFrame from "./TemplateFrame";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import AppNavbar from "@/components/AppNavbar";
import Header from "@/components/Header";
import SideMenu from "@/components/SideMenu";

function DashboardLayout({ children }) {
   const [mode, setMode] = React.useState(localStorage.getItem("themeMode") || "light");
   const [showCustomTheme, setShowCustomTheme] = React.useState(true);
   const dashboardTheme = createTheme(getDashboardTheme(mode));
   const defaultTheme = createTheme({ palette: { mode } });

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

   const toggleCustomTheme = () => {
      setShowCustomTheme((prev) => !prev);
   };

   return (
      <TemplateFrame toggleCustomTheme={toggleCustomTheme} showCustomTheme={showCustomTheme} mode={mode} toggleColorMode={toggleColorMode}>
         <ThemeProvider theme={showCustomTheme ? dashboardTheme : defaultTheme}>
            <CssBaseline enableColorScheme />
            <Box sx={{ display: "flex" }}>
               <SideMenu />
               <AppNavbar />
               {/* Main content */}
               <Box
                  component="main"
                  sx={(theme) => ({
                     flexGrow: 1,
                     backgroundColor: alpha(theme.palette.background.default, 1),
                     overflow: "auto",
                  })}
               >
                  <Stack
                     spacing={2}
                     sx={{
                        alignItems: "center",
                        mx: 3,
                        pb: 10,
                        mt: { xs: 8, md: 0 },
                     }}
                  >
                     <Header />
                     {children}
                  </Stack>
               </Box>
            </Box>
         </ThemeProvider>
      </TemplateFrame>
   );
}

DashboardLayout.propTypes = {
   children: PropTypes.node,
};

export default DashboardLayout;
