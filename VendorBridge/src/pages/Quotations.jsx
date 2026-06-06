import { useState } from "react";

const initialQuotes = [
  {
    id: "Q-001",
    rfqId: "RFQ-2026-001",
    vendor: "Infra Supplies Pvt Ltd",
    price: 500000,
    deliveryDays: 10,
    remarks: "Best quality guaranteed",
    status: "Submitted",
  },
  {
    id: "Q-002",
    rfqId: "RFQ-2026-001",
    vendor: "GreenDesk Furnishings",
    price: 450000,
    deliveryDays: 12,
    remarks: "Cost effective option",
    status: "Submitted",
  },
];

export default function Quotations() {
  const [quotes, setQuotes] = useState(initialQuotes);

  const [form, setForm] = useState({
    rfqId: "",
    vendor: "",
    price: "",
    deliveryDays: "",
    remarks: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addQuote = (e) => {
    e.preventDefault();

    const newQuote = {
      id: "Q-" + (quotes.length + 1).toString().padStart(3, "0"),
      rfqId: form.rfqId,
      vendor: form.vendor,
      price: Number(form.price),
      deliveryDays: Number(form.deliveryDays),
      remarks: form.remarks,
      status: "Submitted",
    };

    setQuotes([newQuote, ...quotes]);

    setForm({
      rfqId: "",
      vendor: "",
      price: "",
      deliveryDays: "",
      remarks: "",
    });
  };

  const markAccepted = (id) => {
    setQuotes(
      quotes.map((q) =>
        q.id === id ? { ...q, status: "Accepted" } : q
      )
    );
  };

  const markRejected = (id) => {
    setQuotes(
      quotes.map((q) =>
        q.id === id ? { ...q, status: "Rejected" } : q
      )
    );
  };

  return (
    <div className="content">

      {/* HEADER */}
      <div className="page-head">
        <div>
          <div className="eyebrow">Procurement</div>
          <h2>Quotations</h2>
          <p className="subtitle">
            Vendor price submissions for RFQs
          </p>
        </div>
      </div>

      {/* FORM */}
      <div className="card" style={{ marginBottom: "20px" }}>
        <h3>Submit Quotation</h3>

        <form onSubmit={addQuote} className="grid-2">

          <input
            name="rfqId"
            placeholder="RFQ ID (e.g. RFQ-2026-001)"
            value={form.rfqId}
            onChange={handleChange}
          />

          <input
            name="vendor"
            placeholder="Vendor Name"
            value={form.vendor}
            onChange={handleChange}
          />

          <input
            name="price"
            placeholder="Quoted Price"
            value={form.price}
            onChange={handleChange}
          />

          <input
            name="deliveryDays"
            placeholder="Delivery Days"
            value={form.deliveryDays}
            onChange={handleChange}
          />

          <input
            name="remarks"
            placeholder="Remarks"
            className="full"
            value={form.remarks}
            onChange={handleChange}
          />

          <button className="btn primary" type="submit">
            Submit Quote
          </button>

        </form>
      </div>

      {/* TABLE */}
      <div className="card">
        <h3>Quotation List</h3>

        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>RFQ</th>
              <th>Vendor</th>
              <th>Price</th>
              <th>Delivery</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {quotes.map((q) => (
              <tr key={q.id}>
                <td>{q.id}</td>
                <td>{q.rfqId}</td>
                <td>{q.vendor}</td>
                <td>₹{q.price}</td>
                <td>{q.deliveryDays} days</td>
                <td>{q.status}</td>
                <td style={{ display: "flex", gap: "8px" }}>
                  {q.status === "Submitted" && (
                    <>
                      <button
                        className="btn"
                        onClick={() => markAccepted(q.id)}
                      >
                        Accept
                      </button>

                      <button
                        className="btn"
                        onClick={() => markRejected(q.id)}
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