import { UserButton, useUser } from "@clerk/nextjs";

export default function DashboardPage() {
  const { user } = useUser();

  return (
    <div style={{ padding: "50px", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>👋 Welcome, {user?.firstName || "User"}!</h1>
        <UserButton />
      </div>

      <p style={{ marginTop: "20px" }}>
        This is your <strong>Nexora Dashboard</strong>.
      </p>

      <p>✅ Only logged-in users can see this page.</p>
    </div>
  );
}

