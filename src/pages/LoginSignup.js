// import React, { useState, useEffect } from "react";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "../firebase";
// import SignUp from "../components/auth/SignUp";
// import Login from "../components/auth/Login";
// import Logout from "../components/auth/Logout";
// import '../components/auth/auth.css';

// function LoginSignup() {
//   const [user, setUser] = useState(null);
//   const [action, setAction] = useState("Sign Up");

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//       console.log("Auth state changed:", currentUser);
//     });
//     return () => unsubscribe();
//   }, []);

//   return (
//     <div className="container">
//       {user ? (
//         <>
//           <div className="header">
//             <div className="text">Welcome, {user.email}</div>
//             <div className="underline"></div>
//           </div>
//           <Logout />
//         </>
//       ) : (
//         <>
//           <div className="header">
//             <div className="text">{action}</div>
//             <div className="underline"></div>
//           </div>

//           <div className="inputs">
//             {action === "Sign Up" && <SignUp />}
//             {action === "Login" && <Login />}
//           </div>

//           <div className="submit-container">
//             <div
//               className={action === "Login" ? "submit gray" : "submit"}
//               onClick={() => setAction("Sign Up")}
//             >
//               Sign Up
//             </div>
//             <div
//               className={action === "Sign Up" ? "submit gray" : "submit"}
//               onClick={() => setAction("Login")}
//             >
//               Login
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// export default LoginSignup;
