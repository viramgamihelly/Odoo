export default function Dashboard() {
  return (
    <div className="content">
      <h1>Dashboard</h1>

      <div className="stats-grid">
        <div className="card">Total Vendors: 15</div>
        <div className="card">Active Vendors: 10</div>
        <div className="card">Avg Rating: 4.4</div>
        <div className="card">Top Category: IT Hardware</div>
      </div>
    </div>
  );
}