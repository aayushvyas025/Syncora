import content from "../../constant/content/content";
import ThemeHeader from "./ThemeHeader";

const { list, title, subTitle } = content.themes;

function ThemeContainer() {
  return (
    <div className="space-y-6">
      <ThemeHeader title={title} subTitle={subTitle} />
    </div>
  );
}

export default ThemeContainer;
