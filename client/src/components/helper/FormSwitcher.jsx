import React from "react";

function FormSwitcher({ text, handleFormSwitch, title }) {
  return (
    <div className="text-center mt-4">
      <p className="text-content/60">
        {text}
        <button
          className="link link-primary px-1"
          type="button"
          onClick={handleFormSwitch}
        >
          {title}
        </button>
      </p>
    </div>
  );
}

export default FormSwitcher;
