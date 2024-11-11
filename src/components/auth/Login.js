import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import email_icon from "../assets/email.png";
import password_icon from "../assets/password.png";
import './auth.css';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in");
      setEmail("");
      setPassword("");
      setError(null);
    } catch (error) {
      setError(error.message);
      console.error("Error logging in:", error);
    }
  };

  return (
    <form onSubmit={handleLogin}>
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
        <button type="submit" className="submit">Login</button>
      </div>
    </form>
  );
}

export default Login;
