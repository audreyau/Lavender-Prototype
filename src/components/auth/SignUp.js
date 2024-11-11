import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import email_icon from "../assets/email.png";
import password_icon from "../assets/password.png";
import './auth.css';

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("User signed up");
      setEmail("");
      setPassword("");
      setError(null);
    } catch (error) {
      setError(error.message);
      console.error("Error signing up:", error);
    }
  };

  return (
    <form onSubmit={handleSignUp}>
      <div className="input">
        <img src={email_icon} alt="Email" />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email ID"
          required
        />
      </div>

      <div className="input">
        <img src={password_icon} alt="Password" />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
      </div>

      {error && <p>{error}</p>}

      <div className="submit-container">
        <button type="submit" className="submit">Sign Up</button>
      </div>
    </form>
  );
}

export default SignUp;
