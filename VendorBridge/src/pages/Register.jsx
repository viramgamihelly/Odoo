import { useState } from "react";

export default function Register({ setUser }) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    role: "admin",
    country: "",
    info: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({
        firstName:"Demo",
        lastName:"User",
        role:"admin",
    });
  };

  return (
    <div className="auth-page">
      <div className="auth-card" style={{ width: "650px" }}>
        <div className="auth-logo">VB</div>

        <h1>Complete Registration</h1>
        <p>Create your VendorBridge profile</p>

        {/* PROFILE PHOTO */}
        <div className="field">
          <label>Profile Photo</label>
          <input type="file" className="input" />
        </div>

        <form onSubmit={handleSubmit}>
          {/* 2 COLUMN GRID START */}
          <div className="grid-2">
            <div className="field">
              <label>First Name</label>
              <input
                className="input"
                name="firstName"
                onChange={handleChange}
              />
            </div>

            <div className="field">
              <label>Last Name</label>
              <input
                className="input"
                name="lastName"
                onChange={handleChange}
              />
            </div>

            <div className="field">
              <label>Email Address</label>
              <input
                className="input"
                name="email"
                onChange={handleChange}
              />
            </div>

            <div className="field">
              <label>Phone Number</label>
              <input
                className="input"
                name="phone"
                onChange={handleChange}
              />
            </div>

            <div className="field">
              <label>Role</label>
              <select
                className="input"
                name="role"
                onChange={handleChange}
              >
                <option value="admin">Admin</option>
                <option value="officer">Officer</option>
              </select>
            </div>

            <div className="field">
              <label>Country</label>
              <input
                className="input"
                name="country"
                onChange={handleChange}
              />
            </div>
          </div>
          {/* 2 COLUMN GRID END */}

          {/* FULL WIDTH FIELD */}
          <div className="field" style={{ marginTop: "12px" }}>
            <label>Additional Information</label>
            <textarea
              className="input"
              name="info"
              onChange={handleChange}
            />
          </div>

          <button className="btn primary" type="submit">
            Register & Continue
          </button>
        </form>
      </div>
    </div>
  );
}