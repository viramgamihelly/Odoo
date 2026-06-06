import { useState } from "react";

const initialPOs = [
  {
    id: "PO-001",
    rfqId: "RFQ-2026-001",
    vendor: "Infra Supplies Pvt Ltd",
    amount: 500000,
    tax: 90000,
    total: 590000,
    status: "Generated",
    invoiceSent: false,
  },
];

export default function PurchaseOrders() {
  const [orders, setOrders] = useState(initialPOs);

  const generateInvoice = (id) => {
    setOrders(
      orders.map((o) =>
        o.id === id ? { ...o, status: "Invoice Generated" } : o
      )
    );
  };

  const sendEmail = (id) => {
    setOrders(
      orders.map((o) =>
        o.id === id ? { ...o, invoiceSent: true } : o
      )
    );
  };

  const printInvoice = (order) => {
    const win = window.open("", "_blank");
    win.document.write(`
      <html>
        <head>
          <title>Invoice ${order.id}</title>
        </head>
        <body>
          <h1>VendorBridge Invoice</h1>
          <hr/>
          <p><b>PO ID:</b> ${order.id}</p>
          <p><b>RFQ ID:</b> ${order.rfqId}</p>
          <p><b>Vendor:</b> ${order.vendor}</p>
          <p><b>Amount:</b> ₹${order.amount}</p>
          <p><b>Tax:</b> ₹${order.tax}</p>
          <h2>Total: ₹${order.total}</h2>
        </body>
      </html>
    `);
    win.print();
  };

  return (
    <div className="content">

      {/* HEADER */}
      <div className="page-head">
        <div>
          <div className="eyebrow">Finance</div>
          <h2>Purchase Orders & Invoices</h2>
          <p className="subtitle">
            Generate and manage invoices
          </p>
        </div>
      </div>

      {/* TABLE */}
      <div className="card">
        <h3>Purchase Orders</h3>

        <table className="table">
          <thead>
            <tr>
              <th>PO ID</th>
              <th>RFQ</th>
              <th>Vendor</th>
              <th>Amount</th>
              <th>Tax</th>
              <th>Total</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((o) => (
              <tr key={o.id}>
                <td>{o.id}</td>
                <td>{o.rfqId}</td>
                <td>{o.vendor}</td>
                <td>₹{o.amount}</td>
                <td>₹{o.tax}</td>
                <td>
                  <b>₹{o.total}</b>
                </td>
                <td>{o.status}</td>

                <td style={{ display: "flex", gap: "8px" }}>
                  {o.status === "Generated" && (
                    <button
                      className="btn primary"
                      onClick={() => generateInvoice(o.id)}
                    >
                      Generate Invoice
                    </button>
                  )}

                  <button
                    className="btn"
                    onClick={() => printInvoice(o)}
                  >
                    Print
                  </button>

                  <button
                    className="btn"
                    onClick={() => sendEmail(o.id)}
                    disabled={o.invoiceSent}
                  >
                    {o.invoiceSent ? "Sent ✔" : "Email"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
}