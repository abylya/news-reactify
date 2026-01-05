import Header from "@/widgets/header/ui/header/Header";
import { useTheme } from "@/app/providers/ThemeProvider";
import { Main } from "@/pages/main";

function BaseLayuot() {
  const { isDark } = useTheme();

  return (
    <div className={`app ${isDark ? "dark" : "light"}`}>
      <Header></Header>
      <div className="conteiner">
        <Main></Main>
      </div>
    </div>
  );
}

export default BaseLayuot;
