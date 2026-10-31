import AppRoutes from "./routes/AppRoutes";
import Favicon from "./components/helper/Favicon";
import { useTheme } from "./context/themeContext";

function App() {
  const { theme } = useTheme();
  return (
    <div data-theme={theme}>
      <Favicon />
      <AppRoutes />
    </div>
  );
}

export default App;
