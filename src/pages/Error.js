import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <h1>ERROR 404 !</h1>
      <h2>Page not found</h2>
      <Link to="/">Back to Home Page</Link>
    </>
  );
};

export default Error;
