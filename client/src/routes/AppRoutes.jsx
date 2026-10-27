import { lazy, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import useAuthStore from "../store/auth/authStore";
import AppLoader from "../components/helper/AppLoader";

const HomePage = lazy(() => import("../pages/Home/Home"));
const AuthPage = lazy(() => import("../pages/Auth/Auth"));
const SettingPage = lazy(() => import("../pages/Setting/Setting"));
const ProfilePage = lazy(() => import("../pages/Profile/Profile"));
const NotFoundPage = lazy(() => import("../pages/NotFound/NotFound"));

function AppRoutes() {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (!authUser && isCheckingAuth) {
    return <AppLoader />;
  }

  return (
      <Routes>
        <Route
          path="/auth"
          element={!authUser ? <AuthPage /> : <Navigate to="/" />}
        />
        <Route
          path="/"
          element={authUser ? <HomePage /> : <Navigate to="/auth" />}
        />
        <Route path="/settings" element={<SettingPage />} />
        <Route
          path="/profile"
          element={authUser ? <ProfilePage /> : <Navigate to="/auth" />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
  );
}

export default AppRoutes;
