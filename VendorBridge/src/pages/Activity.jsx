import { useState } from "react";

export default function Activity() {
  const [logs] = useState([
    {
      action: "RFQ Created",
      user: "Admin",
      time: "10:30 AM",
    },
    {
      action: "Vendor Added",
      user: "Procurement Team",
      time: "11:00 AM",
    },
    {
      action: "Quotation Submitted",
      user: "TechCore Systems",
      time: "11:45 AM",
    },
  ]);

  return (
    <div className="content">
      <h1>Activity Log</h1>

      <div className="table-wrapper">
        <table className="table">
          <thead>
            <tr>
              <th>Action</th>
              <th>User</th>
              <th>Time</th>
            </tr>
          </thead>

          <tbody>
            {logs.map((l, i) => (
              <tr key={i}>
                <td>{l.action}</td>
                <td>{l.user}</td>
                <td>{l.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}