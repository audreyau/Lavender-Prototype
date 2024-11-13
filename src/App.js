import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import Layout from "./Layout";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      console.log("Auth state changed:", currentUser);
    });
    return () => unsubscribe();
  }, []);

  if (loading) return null;

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout user={user}>
              <div className="landing-page">
                <h1>home page stuff goes here...</h1>
              </div>
            </Layout>
          }
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      {user && (
        <div className="header">
          <div className="text">Welcome, {user.email}</div>
          <div className="underline"></div>
        </div>
      )}
    </Router>
  );
}

export default App;
