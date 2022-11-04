import React from "react";

const Dashboard = ({ user }) => {
  return (
    <>
      <h1>dashboard</h1>
      <h2>Hello, {user.name}</h2>
    </>
  );
};

export default Dashboard;
