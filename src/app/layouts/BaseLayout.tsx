import Header from "@/widgets/header/ui/header/Header";
import { useTheme } from "@/app/providers/ThemeProvider";
import { Outlet } from "react-router";

function BaseLayuot() {
  const { isDark } = useTheme();

  return (
    <div className={`app ${isDark ? "dark" : "light"}`}>
      <Header></Header>
      <div className="conteiner">
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default BaseLayuot;
