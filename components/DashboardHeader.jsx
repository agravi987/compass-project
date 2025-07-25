export default function DashboardHeader({ title }) {
  return (
    <header style={{ marginBottom: "1rem" }}>
      <h1 style={{ fontSize: "1.8rem", fontWeight: "700", color: "#222" }}>
        {title}
      </h1>
      <hr style={{ borderColor: "#ddd", marginTop: "0.5rem" }} />
    </header>
  );
}
