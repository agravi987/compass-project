"use client";

import { useState } from "react";
import styles from "./LostFoundForm.module.css";

export default function LostFoundForm({ onAdd }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    image: "",
    email: "",
    phone: "",
    location: "",
    type: "lost",
    reportedBy: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, description, category, location, type } = formData;

    if (!title || !description || !category || !location || !type) {
      setError("Please fill in all required fields.");
      return;
    }

    setError("");

    const payload = {
      ...formData,
      contact: {
        email: formData.email,
        phone: formData.phone,
      },
    };

    // Remove separate email & phone from root
    delete payload.email;
    delete payload.phone;

    onAdd(payload);

    // Reset form
    setFormData({
      title: "",
      description: "",
      category: "",
      image: "",
      email: "",
      phone: "",
      location: "",
      type: "lost",
      reportedBy: "",
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>Report Lost/Found Item</h2>
      {error && <p className={styles.error}>{error}</p>}

      <label>
        Title*
        <input name="title" value={formData.title} onChange={handleChange} />
      </label>

      <label>
        Description*
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </label>

      <label>
        Category*
        <input
          name="category"
          value={formData.category}
          onChange={handleChange}
        />
      </label>

      <label>
        Image URL
        <input name="image" value={formData.image} onChange={handleChange} />
      </label>

      <label>
        Contact Email
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>

      <label>
        Contact Phone
        <input
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
        />
      </label>

      <label>
        Location*
        <input
          name="location"
          value={formData.location}
          onChange={handleChange}
        />
      </label>

      <label>
        Type*
        <select name="type" value={formData.type} onChange={handleChange}>
          <option value="lost">Lost</option>
          <option value="found">Found</option>
        </select>
      </label>

      <label>
        Reported By
        <input
          name="reportedBy"
          value={formData.reportedBy}
          onChange={handleChange}
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
}
