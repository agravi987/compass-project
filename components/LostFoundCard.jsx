import styles from "./LostFoundCard.module.css";

export default function LostFoundCard({ item }) {
  return (
    <div className={styles.card}>
      {item.image && <img src={item.image} alt={item.title} className={styles.image} />}
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <div className={styles.info}>
        <span className={styles.category}>{item.category}</span>
        <span className={styles.location}>📍 {item.location}</span>
        <span className={styles.date}>{new Date(item.date).toLocaleDateString()}</span>
      </div>
      <div className={styles.contact}>
        {item.contact?.email && (
          <a href={`mailto:${item.contact.email}`} className={styles.email}>
            {item.contact.email}
          </a>
        )}
        {item.contact?.phone && (
          <a href={`tel:${item.contact.phone}`} className={styles.phone}>
            {item.contact.phone}
          </a>
        )}
      </div>
      <small>Reported by: {item.reportedBy || "Anonymous"}</small>
    </div>
  );
}
