import React from "react";

const Header = () => {
  return (
    <header className="w-full flex justify-between py-20">
      <h3>Dashboard</h3>
      <div className="flex">
        <input type="checkbox" name="theme" id="theme" />
      </div>
    </header>
  );
};

export default Header;
