import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import ThemeProvider from "./context/themeContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
      <Toaster position="top-center" reverseOrder={false} />
    </ThemeProvider>
  </BrowserRouter>,
);
