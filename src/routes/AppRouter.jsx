import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import AuthRoutes from "../auth/AuthRoutes";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<AuthRoutes />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;