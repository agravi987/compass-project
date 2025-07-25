"use client";

import { useRouter } from "next/navigation";
import styles from "./dashboard.module.css";

const features = [
  {
    title: "Dashboard",
    description: "Overview with recent activity, quick actions, counters",
    path: "/dashboard",
  },
  {
    title: "Announcements Feed",
    description: "View and filter announcements by category and date",
    path: "/announcements",
  },
  {
    title: "Lost & Found",
    description: "Report and search lost/found items with images and filters",
    path: "/lostfound",
  },
  {
    title: "Weekly Timetable",
    description: "Add, edit, delete classes shown in a grid view",
    path: "/timetable",
  },
  {
    title: "Hostel Complaints",
    description: "Submit complaints and track status updates",
    path: "/complaints",
  },
];

export default function Home() {
  const router = useRouter();

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        CampusLink - Centralized Student Utility Hub
      </h1>
      <div className={styles.grid}>
        {features.map((feature) => (
          <div
            key={feature.title}
            className={styles.card}
            onClick={() => router.push(feature.path)}
            tabIndex={0}
            role="button"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                router.push(feature.path);
              }
            }}
          >
            <h2>{feature.title}</h2>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
