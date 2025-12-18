import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";
import Header from "../Header";

const OwnerLayout = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar role="owner" />

      {/* Main Area */}
      <div className="flex flex-col flex-1">
        <Header />

        <main className="flex-1 p-6 bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default OwnerLayout;
