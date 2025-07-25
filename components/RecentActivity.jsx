export default function RecentActivity({ activities }) {
  return (
    <section style={{ marginBottom: "1.5rem" }}>
      <h2 style={{ fontSize: "1.4rem", fontWeight: "600", marginBottom: "0.75rem" }}>
        Recent Activity
      </h2>
      {activities.length === 0 ? (
        <p>No recent activity.</p>
      ) : (
        <ul style={{ listStyle: "none", paddingLeft: 0 }}>
          {activities.map((activity, index) => (
            <li
              key={index}
              style={{
                padding: "0.5rem 0",
                borderBottom: "1px solid #eee",
                color: "#555",
              }}
            >
              {activity}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
