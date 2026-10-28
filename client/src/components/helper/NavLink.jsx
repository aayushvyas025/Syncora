import React from "react";
import { Link } from "react-router-dom";

function NavLink({ src, title, icon: Icon }) {
  return (
    <div className="flex items-center gap-2">
      <Link to={src} className="btn btn-sm transition-colors gap-2">
        <Icon className="size-4" />
        <span className="hidden sm:inline">{title}</span>
      </Link>
    </div>
  );
}

export default NavLink;
