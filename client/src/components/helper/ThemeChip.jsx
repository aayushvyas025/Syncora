function ThemeChip({ theme, currentTheme, handleTheme }) {
  return (
    <button
      type="button"
      className={`group flex flex-col items-center gap-1.5 p-2 rounded-lg transition-colors ${theme === currentTheme ? "bg-base-200" : "hover:bg-base-200/50"}`}
      onClick={handleTheme}
    >
      <div
        className="relative h-8 w-full rounded-md overflow-hidden"
        data-theme={currentTheme}
      >
        <div className="absolute inset-0 grid grid-cols-4 gap-px p-1">
          <div className="rounded bg-primary"></div>
          <div className="rounded bg-secondary"></div>
          <div className="rounded bg-accent"></div>
          <div className="rounded bg-neutral"></div>
        </div>
      </div>
      <span></span>
    </button>
  );
}

export default ThemeChip;
