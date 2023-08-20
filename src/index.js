import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./sections/index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./contexts/AuthContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import LoaderComponent from "./components/LoaderComponent/LoaderComponent";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider>
          <Suspense fallback={<LoaderComponent/>}>
            <App />
          </Suspense>
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
