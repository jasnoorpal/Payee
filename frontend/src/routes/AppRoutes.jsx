import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import OwnerRoutes from "./OwnerRoutes";
import WardenRoutes from "./WardenRoutes";
import TenantRoutes from "./TenantRoutes";
// import { AuthContext } from "../context/AuthContext";

const AppRoutes = () => {
  // const { role } = useContext(AuthContext); // role = 'owner', 'warden', 'tenant'
  const role = "owner";

  return (
    <Routes>
      {role === "owner" && <Route path="/*" element={<OwnerRoutes />} />}
      {role === "warden" && <Route path="/*" element={<WardenRoutes />} />}
      {role === "tenant" && <Route path="/*" element={<TenantRoutes />} />}
      <Route path="*" element={<Navigate to={`/${role}`} />} />
    </Routes>
  );
};

export default AppRoutes;
