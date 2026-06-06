import { useNavigate, useLocation } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    ["dashboard", "Dashboard"],
    ["vendors", "Vendors"],
    ["rfqs", "RFQs"],
    ["quotations", "Quotations"],
    ["approvals", "Approvals"],
    ["orders", "PO & Invoices"],
    ["activity", "Activity"],
  ];

  return (
    <aside className="sidebar">
      <div className="brand">VendorBridge</div>

      <nav className="nav">
        {navItems.map(([route, label]) => {
          const isActive = location.pathname.includes(route);

          return (
            <button
              key={route}
              className={isActive ? "active" : ""}
              onClick={() => navigate(`/app/${route}`)}
            >
              {label}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}