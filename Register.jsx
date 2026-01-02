import React, { useState } from "react";
import Button from "./Button";
import Checkbox from "./Checkbox";
import "../styles/Register.css";

const Register = ({
  userData,
  updateUserData,
  onRegisterSuccess,
  onBack,
  goToLogin,
}) => {
  const [termsAccepted, setTermsAccepted] = useState({
    terms: false,
    privacy: false,
    consent: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: call register API
    onRegisterSuccess();
  };

  const toggle = (key) =>
    setTermsAccepted((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <div className="register-container">
      <div className="logo">Artiqlate</div>
      <p className="register-role">
        Registering as: <span>{userData.role || "Freelancer"}</span>
      </p>

      <form onSubmit={handleSubmit} className="register-form">
        <div className="input-field">
          <label>Email Address</label>
          <input
            type="email"
            value={userData.email}
            onChange={(e) => updateUserData({ email: e.target.value })}
            required
          />
        </div>

        <div className="input-field">
          <label>Password</label>
          <input
            type="password"
            value={userData.password}
            onChange={(e) => updateUserData({ password: e.target.value })}
            required
          />
        </div>

        <div className="input-field">
          <label>Confirm Password</label>
          <input
            type="password"
            required
          />
        </div>

        <div className="checkbox-group">
          <Checkbox
            checked={termsAccepted.terms}
            onChange={() => toggle("terms")}
            label="I accept the Terms & Conditions"
            required
          />
          <Checkbox
            checked={termsAccepted.privacy}
            onChange={() => toggle("privacy")}
            label="I accept the Privacy Policy"
            required
          />
          <Checkbox
            checked={termsAccepted.consent}
            onChange={() => toggle("consent")}
            label="I consent to data processing as per applicable laws (DPDP Act, 2023)"
            required
          />
        </div>

        <Button type="submit" variant="primary" className="full-width">
          Create Account
        </Button>
      </form>

      <p className="login-text">
        Already have an account?{" "}
        <button type="button" className="link-btn" onClick={goToLogin}>
          Log in
        </button>
      </p>

      <button type="button" className="link-btn back-link" onClick={onBack}>
        ← Back to role selection
      </button>
    </div>
  );
};

export default Register;
