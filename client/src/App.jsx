import AppRoutes from "./routes/AppRoutes";
import Favicon from "./components/helper/Favicon";
import ThemeProvider from "./context/themeContext";

function App() {
  return (
    <ThemeProvider>
      <Favicon />
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
