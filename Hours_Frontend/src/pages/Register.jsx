import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";
import { registerUser } from "../api/registerApi";

export default function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    const result = await registerUser(fullName, email, password);

    if (result.success) {
      alert("✅ Registered successfully");
      navigate("/login");
    } else {
      alert(`⚠️ ${result.message}`);
    }

    setLoading(false);
  };

  return (
    <>
      <header className="login-header">
        <div className="logo">The Hours</div>
        <div className="nav-links">
          <a href="/" className="nav-link">Home</a>
          <a href="/login" className="nav-link">Login</a>
        </div>
      </header>

      <div className="login-container">
        <div className="login-left">
          <h1>Hello there!</h1>
          <p>
            Register to our news platform and enjoy personalized articles,
            real-time updates, and curated topics tailored just for you.
          </p>
        </div>

        <form onSubmit={handleRegister} className="login-form">
          <h2>Register</h2>
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
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
            {loading ? "Registering..." : "Register"}
          </button>
          <p className="newto">
            Already have an account?{" "}
            <a href="/login" className="register-link">Login here</a>
          </p>
        </form>
      </div>

      <footer className="login-footer">
        &copy; 2025 The Hours.
      </footer>
    </>
  );
}
