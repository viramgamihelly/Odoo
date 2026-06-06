import { useState } from "react";
import Sidebar from "../components/Sidebar";

import Dashboard from "../pages/Dashboard";
import Vendors from "../pages/Vendors";

export default function MainLayout() {
  const [screen, setScreen] = useState("dashboard");

  const renderScreen = () => {
    switch (screen) {
      case "vendors":
        return <Vendors />;

      case "dashboard":
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="app-shell">
      <Sidebar screen={screen} setScreen={setScreen} />

      <main className="main">
        {renderScreen()}
      </main>
    </div>
  );
}