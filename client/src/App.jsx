import AppRoutes from "./routes/AppRoutes";
import Favicon from "./components/helper/Favicon";
import { useTheme } from "./context/themeContext";

function App() {
  const { theme } = useTheme();
  return (
    <div data-theme={theme} className="min-h-screen bg-base-100">
      <Favicon />
      <AppRoutes />
    </div>
  );
}

export default App;
