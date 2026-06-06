export default function Badge({ status }) {
  const map = {
    Active: "green",
    Inactive: "red",
    Pending: "amber",
    Published: "blue",
    "Under Evaluation": "amber",
    "Approval Pending": "red",
  };

  const color = map[status] || "gray";

  return <span className={`badge ${color}`}>{status}</span>;
}