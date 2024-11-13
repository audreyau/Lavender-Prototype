import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import '../../App.css';

function Logout() {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User logged out");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return <button onClick={handleLogout} className="nav-btn nav-signup">Logout</button>;
}

export default Logout;
