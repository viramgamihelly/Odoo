import { useState } from "react";

export default function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // dummy login (no backend yet)
    if (email && password) {
      setUser({ email });
    }
  };

  return (
    <main className="auth-page">
      <section className="auth-card">
        <div className="auth-logo">VB</div>

        <h1>VendorBridge</h1>
        <p>Procurement & Vendor Management ERP</p>

        <form onSubmit={handleLogin}>
          <div className="field">
            <label>Email</label>
            <input
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
            />
          </div>

          <div className="field">
            <label>Password</label>
            <input
              className="input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
            />
          </div>

          <button className="btn primary" type="submit">
            Login
          </button>
        </form>
      </section>
    </main>
  );
}