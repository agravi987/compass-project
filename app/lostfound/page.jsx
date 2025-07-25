"use client";

import { useState, useEffect } from "react";
import LostFoundCard from "../../components/LostFoundCard";
import LostFoundForm from "../../components/LostFoundForm";
import styles from "./page.module.css";

export default function LostFoundPage() {
  const [items, setItems] = useState([]);
  const [filterCategory, setFilterCategory] = useState("");
  const [filterDate, setFilterDate] = useState("");
  const [type, setType] = useState("lost");

  useEffect(() => {
    fetchItems();
  }, [type]);

  async function fetchItems() {
    try {
      let url = `/api/lostfound?type=${type}`;
      if (filterCategory) url += `&category=${filterCategory}`;
      if (filterDate) url += `&date=${filterDate}`;
      const res = await fetch(url);
      const data = await res.json();
      setItems(data);
    } catch (error) {
      console.error("Failed to fetch lost and found items", error);
    }
  }

  function handleAdd(newItem) {
    setItems((prev) => [newItem, ...prev]);
  }

  const filteredItems = items.filter((item) =>
    filterCategory ? item.category === filterCategory : true
  );

  return (
    <div className={styles.container}>
      <h1>Lost & Found Section</h1>
      <div className={styles.tabs}>
        <button
          className={type === "lost" ? styles.active : ""}
          onClick={() => setType("lost")}
        >
          Lost Items
        </button>
        <button
          className={type === "found" ? styles.active : ""}
          onClick={() => setType("found")}
        >
          Found Items
        </button>
      </div>
      <LostFoundForm onAdd={handleAdd} />
      <div className={styles.filters}>
        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          aria-label="Filter by category"
        >
          <option value="">All Categories</option>
          {[...new Set(items.map((i) => i.category))].map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <input
          type="date"
          value={filterDate}
          onChange={(e) => setFilterDate(e.target.value)}
          aria-label="Filter by date"
        />
        <button
          onClick={() => {
            setFilterCategory("");
            setFilterDate("");
          }}
        >
          Clear Filters
        </button>
      </div>
      <div>
        {filteredItems.length === 0 && <p>No items found.</p>}
        {filteredItems.map((item) => (
          <LostFoundCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
}
