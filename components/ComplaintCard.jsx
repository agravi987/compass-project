import styles from "./ComplaintCard.module.css";

export default function ComplaintCard({ complaint, onStatusChange }) {
  const handleChange = (e) => {
    onStatusChange(complaint._id, e.target.value);
  };

  return (
    <div className={styles.card}>
      <h3>{complaint.title}</h3>
      <p>{complaint.description}</p>
      <div className={styles.info}>
        <span className={styles.category}>{complaint.category}</span>
        <span>Room: {complaint.room}</span>
        <span>Hostel: {complaint.hostelBlock}</span>
        <span>Date: {new Date(complaint.date).toLocaleDateString()}</span>
        <span>By: {complaint.reportedBy || "Anonymous"}</span>
      </div>
      <div className={styles.status}>
        <label>Status: </label>
        <select value={complaint.status} onChange={handleChange}>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Resolved">Resolved</option>
        </select>
      </div>
    </div>
  );
}
