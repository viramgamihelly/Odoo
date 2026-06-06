export default function Sidebar({ screen, setScreen }) {
  const navItems = [
    ["dashboard", "Dashboard", "▣"],
    ["vendors", "Vendors", "◫"],
    ["rfqs", "RFQs", "◇"],
    ["quotations", "Quotations", "▤"],
    ["comparison", "Comparison", "⇄"],
    ["approvals", "Approvals", "✓"],
    ["orders", "PO & Invoices", "□"],
    ["reports", "Reports", "▥"],
    ["activity", "Activity", "◷"],
  ];

  return (
    <aside className="sidebar">
      <div className="brand">
        <span className="brand-mark">VB</span>
        VendorBridge
      </div>

      <nav className="nav">
        {navItems.map(([id, label, icon]) => (
          <button
            key={id}
            className={screen === id ? "active" : ""}
            onClick={() => setScreen(id)}
          >
            <span>{icon}</span>
            {label}
          </button>
        ))}
      </nav>
    </aside>
  );
}