import React, { useState } from "react";
import Button from "./Button";
import "../styles/Login.css";

const Login = ({ onBackToRegister, onLogin }) => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: call login API
    onLogin();
  };

  return (
    <div className="login-container">
      <div className="logo">Artiqlate</div>

      <div className="login-warning">
        Your email is not verified. Please verify to continue.
      </div>

      <h2 className="login-title">Log In to Artiqlate</h2>

      <form onSubmit={handleSubmit} className="login-form">
        <div className="input-field">
          <label>Email Address</label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
        </div>

        <div className="input-field">
          <label>Password</label>
          <input
            type="password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />
        </div>

        <p className="only-verified">
          Only email-verified accounts can access the platform.
        </p>

        <Button type="submit" variant="primary" className="full-width">
          Log In
        </Button>
      </form>

      <div className="login-links">
        <button type="button" className="link-btn">
          Forgot password?
        </button>
        <button
          type="button"
          className="link-btn"
          onClick={onBackToRegister}
        >
          Back to registration
        </button>
      </div>
    </div>
  );
};

export default Login;
