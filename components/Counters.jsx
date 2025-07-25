export default function Counters({ counters }) {
  return (
    <section style={{ marginBottom: "1.5rem" }}>
      <h2 style={{ fontSize: "1.4rem", fontWeight: "600", marginBottom: "0.75rem" }}>
        Counters
      </h2>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {counters.map((counter, index) => (
          <div
            key={index}
            style={{
              flex: "1 1 120px",
              backgroundColor: "#f5f5f5",
              padding: "1rem",
              borderRadius: "8px",
              textAlign: "center",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
            }}
          >
            <div style={{ fontSize: "1.5rem", fontWeight: "700", color: "#0070f3" }}>
              {counter.value}
            </div>
            <div style={{ fontSize: "1rem", color: "#555" }}>{counter.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
