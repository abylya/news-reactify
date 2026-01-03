import Header from "./companents/header/Header";
import { useTheme } from "./contexts/ThemeContestProvider";
import Main from "./pages/main/Main";

function App() {
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

export default App;
