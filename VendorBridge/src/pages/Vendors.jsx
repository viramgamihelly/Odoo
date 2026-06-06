import { useState } from "react";

const initialVendors = [
  {
    id: "VB-001",
    company: "Infra Supplies Pvt Ltd",
    gst: "27AABCI4521K1Z7",
    contact: "Priya Shah",
    email: "priya@infra.com",
    phone: "9876543210",
    category: "IT Hardware",
    rating: 4.8,
    status: "Active",
  },
];

export default function Vendors() {
  const [vendors, setVendors] = useState(initialVendors);

  const [form, setForm] = useState({
    company: "",
    gst: "",
    contact: "",
    email: "",
    phone: "",
    category: "",
    rating: "",
    status: "Active",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addVendor = (e) => {
    e.preventDefault();

    const newVendor = {
      id: "VB-" + (vendors.length + 1).toString().padStart(3, "0"),
      ...form,
      rating: parseFloat(form.rating),
    };

    setVendors([...vendors, newVendor]);

    setForm({
      company: "",
      gst: "",
      contact: "",
      email: "",
      phone: "",
      category: "",
      rating: "",
      status: "Active",
    });
  };

  const total = vendors.length;
  const active = vendors.filter((v) => v.status === "Active").length;
  const avgRating =
    vendors.reduce((acc, v) => acc + v.rating, 0) / vendors.length || 0;

  const topCategory =
    vendors.reduce((acc, v) => {
      acc[v.category] = (acc[v.category] || 0) + 1;
      return acc;
    }, {});

  const topCat = Object.keys(topCategory).sort(
    (a, b) => topCategory[b] - topCategory[a]
  )[0];

  return (
    <div className="content">

      {/* HEADER */}
      <div className="page-head">
        <div>
          <div className="eyebrow">Vendor Management</div>
          <h2>Vendors</h2>
          <p className="subtitle">Manage all vendor records centrally</p>
        </div>
      </div>

      {/* STATS */}
      <div className="stats-grid">
        <div className="card">Total Vendors: {total}</div>
        <div className="card">Active Vendors: {active}</div>
        <div className="card">Avg Rating: {avgRating.toFixed(1)}</div>
        <div className="card">Top Category: {topCat}</div>
      </div>

      {/* FORM */}
      <div className="card" style={{ marginBottom: "20px" }}>
        <h3>Add Vendor</h3>

        <form onSubmit={addVendor} className="grid-2">
          <input
            name="company"
            placeholder="Company Name"
            value={form.company}
            onChange={handleChange}
          />
          <input
            name="gst"
            placeholder="GST Number"
            value={form.gst}
            onChange={handleChange}
          />

          <input
            name="contact"
            placeholder="Contact Person"
            value={form.contact}
            onChange={handleChange}
          />
          <input
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />

          <input
            name="phone"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
          />
          <input
            name="category"
            placeholder="Category"
            value={form.category}
            onChange={handleChange}
          />

          <input
            name="rating"
            placeholder="Rating (0-5)"
            value={form.rating}
            onChange={handleChange}
          />

          <select name="status" value={form.status} onChange={handleChange}>
            <option>Active</option>
            <option>Inactive</option>
            <option>Pending</option>
          </select>

          <button className="btn primary" type="submit">
            Add Vendor
          </button>
        </form>
      </div>

      {/* TABLE */}
      <div className="card">
        <h3>Vendor List</h3>

        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Company</th>
              <th>Contact</th>
              <th>Category</th>
              <th>Rating</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {vendors.map((v) => (
              <tr key={v.id}>
                <td>{v.id}</td>
                <td>{v.company}</td>
                <td>{v.contact}</td>
                <td>{v.category}</td>
                <td>{v.rating}</td>
                <td>{v.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}