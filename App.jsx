import React, { useState } from "react";
import RoleSelection from "./components/RoleSelection";    
import Register from "./components/Register";              
import VerifyEmail from "./components/VerifyEmail";        
import Login from "./components/Login";                    

import "./App.css";

const App = () => {
  
  const [currentStep, setCurrentStep] = useState("role"); // role | register | verify | login
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    role: "",
  });

  const updateUserData = (data) => {
    setUserData((prev) => ({ ...prev, ...data }));
  };

  return (
    <div className="app-container">
      {currentStep === "role" && (
        <RoleSelection
          onRoleSelect={(role) => {
            updateUserData({ role });
            setCurrentStep("register");
          }}
        />
      )}

      {currentStep === "register" && (
        <Register
          userData={userData}
          updateUserData={updateUserData}
          onRegisterSuccess={() => setCurrentStep("verify")}
          onBack={() => setCurrentStep("role")}
          goToLogin={() => setCurrentStep("login")}
        />
      )}

      {currentStep === "verify" && (
        <VerifyEmail
          email={userData.email}
          onVerify={() => setCurrentStep("login")}
          onResend={() => console.log("Resend verification")}
        />
      )}

      {currentStep === "login" && (
        <Login
          onBackToRegister={() => setCurrentStep("register")}
          onLogin={() => console.log("Login success")}
        />
      )}
    </div>
  );
};

export default App;
