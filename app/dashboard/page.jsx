"use client";

import { useSession, signOut } from "next-auth/react";
import DashboardHeader from "@/components/DashboardHeader";
import RecentActivity from "@/components/RecentActivity";
import QuickActions from "@/components/QuickActions";
import Counters from "@/components/Counters";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (!session) {
    if (typeof window !== "undefined") {
      window.location.href = "/auth/signin";
    }
    return null;
  }

  const { user } = session;

  // Dummy data for demo
  const recentActivities = [
    "You submitted a complaint about hostel maintenance.",
    "Admin posted a new announcement.",
    "You reported a lost item.",
  ];

  const quickActions = [
    {
      label: "Submit Complaint",
      onClick: () => router.push("/complaints/add"),
    },
    {
      label: "Report Lost Item",
      onClick: () => router.push("/lostfound/add"),
    },
    { label: "View Timetable", onClick: () => router.push("/timetable") },
    {
      label: "View Announcements",
      onClick: () => router.push("/announcements"),
    },
  ];

  const counters = [
    { label: "Announcements", value: 12 },
    { label: "Lost & Found Items", value: 5 },
    { label: "Complaints", value: 3 },
    { label: "Classes This Week", value: 20 },
  ];

  return (
    <div style={{ maxWidth: "900px", margin: "2rem auto", padding: "1rem" }}>
      <DashboardHeader title={`Welcome, ${user.email}`} />

      <Counters counters={counters} />

      <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
        <div style={{ flex: "2 1 500px" }}>
          <RecentActivity activities={recentActivities} />
        </div>
        <div style={{ flex: "1 1 250px" }}>
          <QuickActions actions={quickActions} />
        </div>
      </div>

      <button
        onClick={() => signOut({ callbackUrl: "/auth/signin" })}
        style={{
          marginTop: "2rem",
          padding: "0.5rem 1rem",
          backgroundColor: "#0070f3",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Logout
      </button>
    </div>
  );
}
