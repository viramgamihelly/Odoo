export default function Login({ setUser }) {
  return (
    <main className="auth-page">
      <section className="auth-card">
        <div className="auth-logo">VB</div>

        <h1>VendorBridge</h1>
        <p>Procurement & Vendor Management ERP</p>

        <form
          onSubmit={(e) => {
            e.preventDefault();

            setUser({
              firstName: "Admin",
              lastName: "User",
              role: "admin",
            });
          }}
        >
          <div className="field">
            <label>Email</label>
            <input className="input" placeholder="email" />
          </div>

          <div className="field">
            <label>Password</label>
            <input className="input" type="password" placeholder="password" />
          </div>

          <button className="btn primary" type="submit">
            Login
          </button>
        </form>
      </section>
    </main>
  );
}