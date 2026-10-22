import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("../pages/Home/Home"));
const AuthPage = lazy(() => import("../pages/Auth/Auth"));
const SettingPage = lazy(() => import("../pages/Setting/Setting"));
const ProfilePage = lazy(() => import("../pages/Profile/Profile"));
const NotFoundPage = lazy(() => import("../pages/NotFound/NotFound"));

function AppRoutes() {
  return (
    <Routes>
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/settings" element={<SettingPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
