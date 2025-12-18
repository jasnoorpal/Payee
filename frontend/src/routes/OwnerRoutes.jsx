import { Routes, Route } from "react-router-dom";
import OwnerLayout from "../components/layout/OwnerLayout";

import Dashboard from "../pages/owner/Dashboard";
import MyPlots from "../pages/owner/MyPlots";
import Wardens from "../pages/owner/Wardens";
import Tenants from "../pages/owner/Tenants";
import Payments from "../pages/owner/Payments";
import Settings from "../pages/owner/Settings";

const OwnerRoutes = () => {
  return (
    <Routes>
      <Route path="/owner" element={<OwnerLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="myplots" element={<MyPlots />} />
        <Route path="wardens" element={<Wardens />} />
        <Route path="tenants" element={<Tenants />} />
        <Route path="payments" element={<Payments />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
};

export default OwnerRoutes;
