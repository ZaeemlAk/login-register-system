import React, { useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";
import "../styles/Form.css";
import { IoIosContact } from "react-icons/io";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", form);
      localStorage.setItem("user", JSON.stringify(res.data));
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        {/* WORKING SIGN IN BUTTON */}
        <button type="submit" className="signin-button">
          SIGN IN
        </button>

        {/* ICON BELOW BUTTON */}
        <div className="form-icon">
          <IoIosContact size={40} />
        </div>

        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          onChange={handleChange}
          required
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          onChange={handleChange}
          required
        />
      </form>

      <div className="form-footer">
        Don't have an account? <a href="/register">Register</a>
      </div>
    </div>
  );
};

export default Login;
