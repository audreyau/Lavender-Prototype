import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import Logout from "./components/auth/Logout";
import "./components/auth/auth.css";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("Auth state changed:", currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <div>
        {user ? (
          <>
            <div className="header">
              <div className="text">Welcome, {user.email}</div>
              <div className="underline"></div>
            </div>
            <Logout />
          </>
        ) : (
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        )}
        {/* <div className="navigation">
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Login</Link>
        </div> */}
      </div>
    </Router>
  );
}

export default App;
