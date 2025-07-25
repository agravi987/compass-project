"use client";

import { useState, useEffect } from "react";
import ComplaintCard from "../../components/ComplaintCard";
import ComplaintForm from "../../components/ComplaintForm";
import styles from "./page.module.css";

export default function ComplaintsPage() {
  const [complaints, setComplaints] = useState([]);
  const [filterStatus, setFilterStatus] = useState("");
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchComplaints();
  }, [filterStatus]);

  async function fetchComplaints() {
    try {
      let url = "/api/complaints";
      if (filterStatus) url += `?status=${filterStatus}`;
      const res = await fetch(url);
      const data = await res.json();
      setComplaints(data);
    } catch (error) {
      console.error("Failed to fetch complaints", error);
    }
  }

  function handleAdd(newComplaint) {
    setComplaints((prev) => [newComplaint, ...prev]);
    setShowForm(false);
  }

  async function handleStatusChange(id, status) {
    try {
      const res = await fetch("/api/complaints", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status }),
      });
      if (!res.ok) throw new Error("Failed to update status");
      fetchComplaints();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className={styles.container}>
      <h1>Hostel Complaints</h1>
      {!showForm && <button onClick={() => setShowForm(true)}>New Complaint</button>}
      {showForm && <ComplaintForm onAdd={handleAdd} />}
      <div className={styles.filters}>
        <button onClick={() => setFilterStatus("")} className={filterStatus === "" ? styles.active : ""}>All</button>
        <button onClick={() => setFilterStatus("Pending")} className={filterStatus === "Pending" ? styles.active : ""}>Pending</button>
        <button onClick={() => setFilterStatus("In Progress")} className={filterStatus === "In Progress" ? styles.active : ""}>In Progress</button>
        <button onClick={() => setFilterStatus("Resolved")} className={filterStatus === "Resolved" ? styles.active : ""}>Resolved</button>
      </div>
      <div>
        {complaints.length === 0 && <p>No complaints found.</p>}
        {complaints.map((complaint) => (
          <ComplaintCard key={complaint._id} complaint={complaint} onStatusChange={handleStatusChange} />
        ))}
      </div>
    </div>
  );
}
