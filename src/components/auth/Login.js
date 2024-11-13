import React, { useState } from "react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleHome = () => {
    navigate("/");
  };

  return (
    <div class="page">
      <div className="verticalStack">
        <div className="back-arrow" onClick={handleHome}>
          <FontAwesomeIcon icon={faArrowLeft} className="back-arrow-icon" style={{ fontSize: "1.3rem" }}/>
        </div>
        <div className="logo" style={{ fontSize: "2.5rem", color: "white"}}>
        lavender
        </div>
        <div className="container">
          <div className="header">
            <h2 className="header-text">Login to your account</h2>
            <p className="subtext">
              Don't have an account? <a href="/signup">Sign up here.</a>
            </p>
          </div>

          <form onSubmit={handleLogin} className="form">
            <div className="input-group">
              <label htmlFor="email" className="input-label">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="input-field"
              />
            </div>

            <div className="input-group">
              <label htmlFor="password" className="input-label">Password</label>
              <div className="password-container">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="input-field"
                />
                <FontAwesomeIcon
                  icon={faEye}
                  onClick={() => setShowPassword(!showPassword)}
                  className="toggle-password-icon"
                />
              </div>
            </div>

            {error && <p>{error}</p>}
            <button type="submit" className="submit-btn">Log In</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
