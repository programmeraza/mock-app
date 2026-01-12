import { Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/HomePage";
import RegistrationPage from "./pages/RegistrationPage";
import { useEffect, useState } from "react";
import Preloader from "./components/Preloader/Preloader";
import TestPage from "./pages/TestPage";
import SettingsPage from "./pages/SettingsPage";
import MockPage from "./pages/MockPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Preloader />;

  return (
    <Routes>
      <Route
        path="/"
        element={isAuth ? <HomePage /> : <Navigate to="/registr" replace />}
      />

      {/* 🔹 страница выбора Listening / Reading / ... */}
      <Route
        path="/tests"
        element={isAuth ? <TestPage /> : <Navigate to="/registr" replace />}
      />

      {/* 🔹 конкретный тип */}
      <Route
        path="/tests/:type"
        element={isAuth ? <TestPage /> : <Navigate to="/registr" replace />}
      />

      {/* 🔹 полный mock test */}
      <Route
        path="/mock"
        element={isAuth ? <MockPage /> : <Navigate to="/registr" replace />}
      />

      <Route
        path="/settings"
        element={isAuth ? <SettingsPage /> : <Navigate to="/registr" replace />}
      />

      <Route
        path="/registr"
        element={<RegistrationPage setIsAuth={setIsAuth} />}
      />

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
