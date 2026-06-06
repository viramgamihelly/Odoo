import { useState } from "react";

const initialRFQs = [
  {
    id: "RFQ-2026-001",
    title: "Office Furniture Procurement",
    description: "Chairs and desks for new office floor",
    deadline: "2026-06-20",
    vendors: ["Infra Supplies", "GreenDesk Furnishings"],
    status: "Published",
  },
];

export default function RFQs() {
  const [rfqs, setRfqs] = useState(initialRFQs);

  const [form, setForm] = useState({
    title: "",
    description: "",
    deadline: "",
    vendor: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addRFQ = (e) => {
    e.preventDefault();

    const newRFQ = {
      id: "RFQ-" + (rfqs.length + 1).toString().padStart(4, "0"),
      title: form.title,
      description: form.description,
      deadline: form.deadline,
      vendors: form.vendor ? [form.vendor] : [],
      status: "Draft",
    };

    setRfqs([newRFQ, ...rfqs]);

    setForm({
      title: "",
      description: "",
      deadline: "",
      vendor: "",
    });
  };

  const publishRFQ = (id) => {
    setRfqs(
      rfqs.map((r) =>
        r.id === id ? { ...r, status: "Published" } : r
      )
    );
  };

  return (
    <div className="content">

      {/* HEADER */}
      <div className="page-head">
        <div>
          <div className="eyebrow">Procurement</div>
          <h2>RFQs</h2>
          <p className="subtitle">Create and manage procurement requests</p>
        </div>
      </div>

      {/* FORM */}
      <div className="card" style={{ marginBottom: "20px" }}>
        <h3>Create RFQ</h3>

        <form onSubmit={addRFQ} className="grid-2">
          <input
            name="title"
            placeholder="RFQ Title"
            value={form.title}
            onChange={handleChange}
          />

          <input
            name="deadline"
            type="date"
            value={form.deadline}
            onChange={handleChange}
          />

          <input
            name="description"
            placeholder="Description"
            className="full"
            value={form.description}
            onChange={handleChange}
          />

          <input
            name="vendor"
            placeholder="Assign Vendor (optional)"
            value={form.vendor}
            onChange={handleChange}
          />

          <button className="btn primary" type="submit">
            Create RFQ
          </button>
        </form>
      </div>

      {/* TABLE */}
      <div className="card">
        <h3>RFQ List</h3>

        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Deadline</th>
              <th>Vendors</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {rfqs.map((r) => (
              <tr key={r.id}>
                <td>{r.id}</td>
                <td>{r.title}</td>
                <td>{r.deadline}</td>
                <td>{r.vendors.join(", ")}</td>
                <td>{r.status}</td>
                <td>
                  {r.status === "Draft" && (
                    <button
                      className="btn"
                      onClick={() => publishRFQ(r.id)}
                    >
                      Publish
                    </button>
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