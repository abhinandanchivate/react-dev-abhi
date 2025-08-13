import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./core/components/layouts/Landing";
import AuthRouter from "./auth/router/";
import DashboardRouter from "./dashboard/router/Index";
import Alert from "./core/components/layouts/Alert";
import ProfileRouter from "./profile/router/ProfileRouter";
/// routers are responsible for defining the routes of the application but they are used to render the components at the runtime
const RootRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/auth/*" element={<AuthRouter></AuthRouter>}></Route>
        <Route path="/dashboard/*" element={<DashboardRouter />}></Route>
        <Route path="/profile/*" element={<ProfileRouter />}></Route>
      </Routes>
    </>
  );
};

export default RootRouter;
