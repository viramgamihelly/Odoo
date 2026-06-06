import { useState } from "react";

const initialApprovals = [
  {
    id: "AP-001",
    rfqId: "RFQ-2026-001",
    requestedBy: "Procurement Officer",
    amount: 500000,
    status: "Pending",
    remarks: "",
  },
  {
    id: "AP-002",
    rfqId: "RFQ-2026-002",
    requestedBy: "Procurement Officer",
    amount: 320000,
    status: "Pending",
    remarks: "",
  },
];

export default function Approvals() {
  const [approvals, setApprovals] = useState(initialApprovals);

  const updateStatus = (id, newStatus) => {
    setApprovals(
      approvals.map((a) =>
        a.id === id ? { ...a, status: newStatus } : a
      )
    );
  };

  return (
    <div className="content">

      {/* HEADER */}
      <div className="page-head">
        <div>
          <div className="eyebrow">Workflow</div>
          <h2>Approvals</h2>
          <p className="subtitle">
            Manage procurement approval requests
          </p>
        </div>
      </div>

      {/* TABLE */}
      <div className="card">
        <h3>Approval Queue</h3>

        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>RFQ</th>
              <th>Requested By</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {approvals.map((a) => (
              <tr key={a.id}>
                <td>{a.id}</td>
                <td>{a.rfqId}</td>
                <td>{a.requestedBy}</td>
                <td>₹{a.amount}</td>
                <td>
                  <span
                    style={{
                      color:
                        a.status === "Approved"
                          ? "#8dffb8"
                          : a.status === "Rejected"
                          ? "#ffb5b5"
                          : "#ffd28a",
                      fontWeight: "bold",
                    }}
                  >
                    {a.status}
                  </span>
                </td>

                <td style={{ display: "flex", gap: "8px" }}>
                  {a.status === "Pending" && (
                    <>
                      <button
                        className="btn primary"
                        onClick={() => updateStatus(a.id, "Approved")}
                      >
                        Approve
                      </button>

                      <button
                        className="btn danger"
                        onClick={() => updateStatus(a.id, "Rejected")}
                      >
                        Reject
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
}