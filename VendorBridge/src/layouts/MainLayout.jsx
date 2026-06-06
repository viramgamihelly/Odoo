import { Outlet } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

export default function MainLayout({ user }) {
  return (
    <div className="app-shell">
      <Sidebar />

      <div className="main">
        <Topbar user={user} />

        {/* THIS IS WHERE PAGES LOAD */}
        <Outlet />
      </div>
    </div>
  );
}