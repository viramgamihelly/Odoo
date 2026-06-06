export default function Topbar({ user }) {
  return (
    <div className="topbar">
      <div className="search">
        <span>🔍</span>
        <input placeholder="Search vendors, RFQs..." />
      </div>

      <div className="profile">
        <div className="avatar">
          {user?.firstName?.[0] || "U"}
        </div>

        <div>
          <div style={{ fontSize: "12px" }}>
            {user?.firstName} {user?.lastName}
          </div>
          <div style={{ fontSize: "10px", color: "gray" }}>
            {user?.role}
          </div>
        </div>
      </div>
    </div>
  );
}