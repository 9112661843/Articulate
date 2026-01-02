import React from "react";
import Button from "./Button";
import "../styles/RoleSelection.css";

const RoleSelection = ({ onRoleSelect }) => {
  const roles = [
    {
      title: "Freelancer",
      desc: "Artists, technicians & independent AVGC professionals.",
      icon: "👨‍💻",
    },
    {
      title: "Service Studio",
      desc: "Animation, VFX, gaming and production service studios.",
      icon: "🏢",
    },
    {
      title: "IP Studio",
      desc: "Original IP creators, producers and rights holders.",
      icon: "🎬",
    },
  ];

  return (
    <div className="role-container">
      <div className="logo">Artiqlate</div>
      <h1 className="role-title">“Who are you on Artiqlate?”</h1>
      <p className="role-subtitle">
        A verified professional ecosystem for the AVGC industry.
      </p>

      <div className="role-grid">
        {roles.map((role) => (
          <div
            key={role.title}
            className="role-card"
            onClick={() => onRoleSelect(role.title)}
          >
            <div className="role-icon">{role.icon}</div>
            <h3>{role.title}</h3>
            <p>{role.desc}</p>
            <Button variant="secondary" className="role-continue">
              Continue →
            </Button>
          </div>
        ))}
      </div>

      <p className="role-footer">
        By continuing, you accept our terms and verifiability policy.
      </p>
    </div>
  );
};

export default RoleSelection;
