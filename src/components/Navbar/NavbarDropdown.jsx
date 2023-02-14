import React from "react";

const NavbarDropdown = () => {
  return (
    <div>
      <select className="bg-transparent font-semibold">
        <option value="all">All</option>
        <option value="movie">Movies</option>
        <option value="tv">TV Series</option>
      </select>
    </div>
  );
};

export default NavbarDropdown;
