import content from "../../constant/content/content";
import { useTheme } from "../../context/themeContext";
import ThemeChip from "../helper/ThemeChip";
import ThemeHeader from "./ThemeHeader";

const { list, title, subTitle } = content.themes;

function ThemeContainer() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="space-y-6">
      <ThemeHeader title={title} subTitle={subTitle} />
      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
        {list.map((currentTheme) => (
          <ThemeChip
            key={currentTheme}
            currentTheme={currentTheme}
            theme={theme}
            handleTheme={() => toggleTheme(currentTheme)}
          />
        ))}
      </div>
    </div>
  );
}

export default ThemeContainer;
