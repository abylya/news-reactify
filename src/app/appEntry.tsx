import { ThemeProvider } from "@/app/providers/ThemeProvider";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./appSotre";
import BaseLayuot from "./layouts/BaseLayout";
import "@/shared/index.css";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <BaseLayuot />
      </Provider>
    </ThemeProvider>
  </StrictMode>
);
