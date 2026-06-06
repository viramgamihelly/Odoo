import { useMemo } from "react";

export default function Dashboard({ user }) {
  // mock ERP data (later will come from backend)
  const stats = {
    vendors: 12,
    rfqs: 5,
    approvals: 3,
    pos: 8,
    invoices: 6,
  };

  const activities = [
    "RFQ RFQ-2026-001 created",
    "Vendor Infra Supplies added",
    "Quotation received from GreenDesk",
    "PO-002 generated",
    "Invoice sent to vendor",
  ];

  const chartData = [30, 45, 25, 60, 40, 70];

  const maxVal = useMemo(() => Math.max(...chartData), []);

  return (
    <div className="content">

      {/* HEADER */}
      <div className="page-head">
        <div>
          <div className="eyebrow">Procurement Overview</div>
          <h2>Welcome back, {user?.firstName || "User"}</h2>
          <p className="subtitle">
            Today's procurement summary & system status
          </p>
        </div>
      </div>

      {/* KPI CARDS */}
      <div className="stats-grid">
        <div className="card">Total Vendors: {stats.vendors}</div>
        <div className="card">Active RFQs: {stats.rfqs}</div>
        <div className="card">Pending Approvals: {stats.approvals}</div>
        <div className="card">Purchase Orders: {stats.pos}</div>
        <div className="card">Invoices: {stats.invoices}</div>
      </div>

      {/* QUICK ACTIONS */}
      <div className="card" style={{ marginTop: "20px" }}>
        <h3>Quick Actions</h3>

        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <button className="btn primary">+ Create RFQ</button>
          <button className="btn">Add Vendor</button>
          <button className="btn">View Quotations</button>
          <button className="btn">Generate Invoice</button>
        </div>
      </div>

      {/* ANALYTICS */}
      <div className="card" style={{ marginTop: "20px" }}>
        <h3>Procurement Trends</h3>

        <div style={{ display: "flex", gap: "10px", alignItems: "flex-end", height: "140px" }}>
          {chartData.map((val, i) => (
            <div
              key={i}
              style={{
                height: `${(val / maxVal) * 100}%`,
                width: "100%",
                background: "#3f8cff",
                borderRadius: "6px",
              }}
              title={`Month ${i + 1}: ${val}`}
            />
          ))}
        </div>
      </div>

      {/* ACTIVITY FEED */}
      <div className="card" style={{ marginTop: "20px" }}>
        <h3>Recent Activity</h3>

        <ul style={{ paddingLeft: "18px", color: "#a9b3aa" }}>
          {activities.map((a, i) => (
            <li key={i} style={{ marginBottom: "8px" }}>
              {a}
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}