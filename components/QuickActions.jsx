export default function QuickActions({ actions }) {
  return (
    <section style={{ marginBottom: "1.5rem" }}>
      <h2 style={{ fontSize: "1.4rem", fontWeight: "600", marginBottom: "0.75rem" }}>
        Quick Actions
      </h2>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {actions.map((action, index) => (
          <button
            key={index}
            onClick={action.onClick}
            style={{
              padding: "0.75rem 1.25rem",
              backgroundColor: "#0070f3",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "600",
              flex: "1 1 150px",
              minWidth: "150px",
              transition: "background-color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#005bb5")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#0070f3")}
          >
            {action.label}
          </button>
        ))}
      </div>
    </section>
  );
}
