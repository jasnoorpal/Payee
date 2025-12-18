import React from "react";
import { NavLink } from "react-router-dom";
import ownerNavConfig from "../pages/owner/navconfig";
// import tenantNavConfig from "../pages/tenant/navconfig";
// import wardenNavConfig from "../pages/warden/navconfig";

const Sidebar = ({ role }) => {
  // const NavConfig =
  //   role === "owner"
  //     ? ownerNavConfig
  //     : role === "warden"
  //     ? wardenNavConfig
  //     : tenantNavConfig;

  const NavConfig = ownerNavConfig;

  return (
    <aside className="w-2/12 border border-blue-200">
      <div className="h-30 flex items-center justify-evenly mb8">
        <img src="/Logo.png" alt="Logo" className="h-[60px]" />
        <h3 className="text-black text-2xl">Payee</h3>
      </div>

      <nav>
        <ul className="flex flex-wrap items-center justify-center w-full gap-2">
          {NavConfig.map(({ label, path, icon: Icon }) => (
            <li key={label} className="w-[95%]">
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `h-12 w-full flex items-center gap-3 px-4 duration-100 rounded-sm
                 ${
                   isActive
                     ? "bg-blue-200 text-blue-800 font-semibold"
                     : "hover:text-blue-800 hover:bg-blue-200"
                 }`
                }
              >
                <Icon fontSize="small" className="pl-8" />
                <span>{label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
