import React from "react";

const DashBoard = (props) => {
  const { handleLogout } = props;

  return (
    <section className="hero">
      <h2>Welcome User!</h2>
      <button onClick={handleLogout}>Log out</button>
    </section>
  );
};

export default DashBoard;
