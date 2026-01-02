import React from "react";
import Button from "./Button";
import "../styles/VerifyEmail.css";

const VerifyEmail = ({ email, onVerify, onResend }) => {
  return (
    <div className="verify-container">
      <div className="logo">Artiqlate</div>

      <div className="email-icon">📧</div>
      <h2 className="verify-title">Verify your email address</h2>
      <p className="verify-text">
        We&apos;ve sent a verification link to your registered email address.
        Please verify your email to continue.
      </p>

      <div className="email-highlight">
        {email || "your-email@domain.com"}
      </div>

      <Button variant="secondary" className="full-width" onClick={onResend}>
        Resend Verification Email
      </Button>

      <Button
        variant="primary"
        className="full-width verify-continue"
        onClick={onVerify}
      >
        Email verified, continue
      </Button>

      <p className="verify-note">
        For security reasons, access to the platform is enabled only after email
        verification.
      </p>
    </div>
  );
};

export default VerifyEmail;
