import { Outlet, useRoutes } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import DashboardLayout from "./layouts/DashboardLayout";

import MarketingPage from "./pages/MarketingPage";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import Dashboard from "./pages/Dashboard";
// import NotFound from "./pages/NotFound";

export default function Router() {
   const routes = useRoutes([
      {
         path: "",
         element: (
            <MainLayout>
               <Outlet />
            </MainLayout>
         ),
         children: [
            { path: "", element: <MarketingPage /> },
            { path: "signin", element: <SignIn /> },
            { path: "signup", element: <SignUp /> },
         ],
      },
      {
         path: "dashboard",
         element: (
            <DashboardLayout>
               <Outlet />
            </DashboardLayout>
         ),
         children: [{ path: "", element: <Dashboard /> }],
      },
      // { path: "*", element: <NotFound replace /> },
   ]);

   return routes;
}
