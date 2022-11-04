import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email) return; // اگر مقدارها خالی باشند کد های بعد از آن اجرا نمی شوند
    setUser({ name: name, email: email });
    navigate("/dashboard"); // از یک روت به روت دیگر میفرستد
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="name"
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div>
          <input
            type="text"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
