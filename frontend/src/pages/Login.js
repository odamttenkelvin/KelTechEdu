import React, { useState } from "react";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [responseMsg, setResponseMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setResponseMsg(data.message);
    } catch (err) {
      console.error(err);
      setResponseMsg("Login failed. Please try again.");
    }
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "400px", margin: "auto" }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "1rem" }}>
          <label>Email:</label><br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: "100%" }}
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label>Password:</label><br />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            style={{ width: "100%" }}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {responseMsg && <p style={{ marginTop: "1rem" }}>{responseMsg}</p>}
    </div>
  );
}

export default Login;
