import { createBrowserRouter } from "react-router";
import BaseLayuot from "./layouts/BaseLayout";
import { Main } from "@/pages/main";
import { NewsPage } from "@/pages/news";

export const appRouter = createBrowserRouter([
  {
    element: <BaseLayuot></BaseLayuot>,
    errorElement: <div>error</div>,
    children: [
      { path: "/", element: <Main></Main> },
      { path: "/news/:id", element: <NewsPage></NewsPage> },
    ],
  },
]);
