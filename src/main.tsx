import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "./contexts/ThemeContestProvider.tsx";
import { Provider } from "react-redux";
import { store } from "./store/index.ts";
// import Test1 from './practi_learn/test1.jsx'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
    {/* <Test1></Test1> */}
  </StrictMode>

  //  <App />n
);
