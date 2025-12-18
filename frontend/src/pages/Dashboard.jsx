import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("user");
    if (data) setUser(JSON.parse(data).user);
  }, []);

  if (!user) return <p>Please login to view this page.</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Welcome, {user.name}</h2>
      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "1rem" }}>
        <thead>
          <tr style={{ background: "#646cff", color: "#fff" }}>
            <th style={{ padding: "0.5rem", border: "1px solid #ddd" }}>ID</th>
            <th style={{ padding: "0.5rem", border: "1px solid #ddd" }}>Name</th>
            <th style={{ padding: "0.5rem", border: "1px solid #ddd" }}>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: "0.5rem", border: "1px solid #ddd" }}>1</td>
            <td style={{ padding: "0.5rem", border: "1px solid #ddd" }}>John Doe</td>
            <td style={{ padding: "0.5rem", border: "1px solid #ddd" }}>john@example.com</td>
          </tr>
          <tr>
            <td style={{ padding: "0.5rem", border: "1px solid #ddd" }}>2</td>
            <td style={{ padding: "0.5rem", border: "1px solid #ddd" }}>Jane Smith</td>
            <td style={{ padding: "0.5rem", border: "1px solid #ddd" }}>jane@example.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
