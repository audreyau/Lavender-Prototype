# Lavender Prototype

This is a prototype for the **Lavender Shift Work Sleep Disorder Platform**. It is a simple React application that provides a basic login and signup feature using Firebase Authentication. This project serves as an initial step in developing the full platform.

## Features

- User authentication (Sign up, Login, Logout)
- Firebase Authentication integration
- Built with Create React App

## Tech Stack

- **React** (via Create React App)
- **Firebase** (Authentication)

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (LTS version recommended)
- npm or yarn
- Firebase account

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/lavender-prototype.git
   cd lavender-prototype
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up Firebase:
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Enable **Email/Password Authentication** in the Firebase Authentication settings.
   - Create a `.env` file in the root of your project and add your Firebase config:
     ```sh
     REACT_APP_FIREBASE_API_KEY=your_api_key
     REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
     REACT_APP_FIREBASE_PROJECT_ID=your_project_id
     REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
     REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
     REACT_APP_FIREBASE_APP_ID=your_app_id
     ```
4. Start the development server:
   ```sh
   npm start
   ```
   The app should now be running on `http://localhost:3000/`.

## Usage

- Users can **sign up** with an email and password.
- After signing up, they can **log in** to their account.
- Users can **log out** at any time.

## Modified Files

```
/src
  |-- components/auth
      |-- Login.js
      |-- Logout.js
      |-- SignUp.js
  |-- App.css
  |-- App.js
  |-- Layout.js
```

## Future Enhancements

- Add password reset functionality
- Improve UI/UX
- Integrate Firestore for storing additional user data

## License

This project is licensed under the MIT License.

## Contact

For any questions or suggestions, feel free to reach out!

---

This is an early-stage prototype and subject to major changes as development progresses.

