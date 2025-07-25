// components/ComplaintForm.js
"use client";

import { useState } from "react";
import styles from "./ComplaintForm.module.css";

export default function ComplaintForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Low");
  const [category, setCategory] = useState("");
  const [hostelBlock, setHostelBlock] = useState("");
  const [room, setRoom] = useState("");
  const [reportedBy, setReportedBy] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description || !category || !hostelBlock || !room) {
      setError("Please fill in all required fields.");
      return;
    }
    setError("");

    const formData = {
      title,
      description,
      priority,
      category,
      hostelBlock,
      room,
      reportedBy,
    };

    onAdd(formData); // pass to parent

    // Reset form
    setTitle("");
    setDescription("");
    setPriority("Low");
    setCategory("");
    setHostelBlock("");
    setRoom("");
    setReportedBy("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>Submit Complaint</h2>
      {error && <p className={styles.error}>{error}</p>}
      <label>
        Title*
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label>
        Description*
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <label>
        Priority*
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
      </label>
      <label>
        Category*
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </label>
      <label>
        Hostel Block*
        <input
          type="text"
          value={hostelBlock}
          onChange={(e) => setHostelBlock(e.target.value)}
        />
      </label>
      <label>
        Room*
        <input
          type="text"
          value={room}
          onChange={(e) => setRoom(e.target.value)}
        />
      </label>
      <label>
        Reported By
        <input
          type="text"
          value={reportedBy}
          onChange={(e) => setReportedBy(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
