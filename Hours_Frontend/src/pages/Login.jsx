import { useState } from "react";
import "../styles/Login.css";
import { useLogin } from "../hooks/useLogin.jsx";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleLogin, loading } = useLogin();

  const onSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, password);
  };

  return (
    <>
      <header className="login-header">
        <div className="logo">The Hours</div>
        <div className="nav-links">
          <a href="/" className="nav-link">Home</a>
          <a href="/register" className="nav-link">Register</a>
        </div>
      </header>

      <div className="login-container">
        <div className="login-left">
          <h1>Welcome Back</h1>
          <p>
            Please log in to continue accessing your personalized news feed,
            saved articles, and preferences.
          </p>
        </div>

        <form onSubmit={onSubmit} className="login-form">
          <h2>Login</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
          <p className="newto">
            New to The Hours?{" "}
            <a href="/register" className="register-link">Register here</a>
          </p>
        </form>
      </div>

      <footer className="login-footer">
        &copy; 2025 The Hours.
      </footer>
    </>
  );
}
