import React from "react";

function ThemeHeader({title, subTitle}) {
  return (
    <div className="flex flex-col gap-1">
      <h2 className="font-semibold text-lg">{title}</h2>
      <p className="text-sm text-base-content/70">{subTitle}</p>
    </div>
  );
}

export default ThemeHeader;
