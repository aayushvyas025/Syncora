import { useEffect, createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { MessageCircle } from "lucide-react";

function Favicon() {
  useEffect(() => {
    const updateFavicon = () => {
      const primaryColor = getComputedStyle(document.documentElement)
        .getPropertyValue("--color-primary")
        .trim();

      const svg = renderToStaticMarkup(
        createElement(MessageCircle, {
          size: 32,
          color: primaryColor || "#6366f1",
          strokeWidth: 2,
        })
      );

      const dataUrl = `data:image/svg+xml,${encodeURIComponent(svg)}`;

      let link = document.querySelector("link[rel='icon']");

      if (!link) {
        link = document.createElement("link");
        link.rel = "icon";
        document.head.appendChild(link);
      }

      link.type = "image/svg+xml";
      link.href = dataUrl;
    };

    updateFavicon();

    const observer = new MutationObserver(updateFavicon);

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme", "class", "style"],
    });

    return () => observer.disconnect();
  }, []);

  return null;
}

export default Favicon;
