import { useNavigate } from "react-router-dom";
import "../styles/HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="homepage-container">
      <header className="homepage-header">
        <div className="logo">The Hours</div>
        <div className="nav-buttons">
          <button onClick={() => navigate("/login")}>Login</button>
          <button onClick={() => navigate("/register")}>Register</button>
        </div>
      </header>

      <main className="homepage-main">
        <div className="homepage-left">
          <h1>Welcome</h1>
          <p>
            Your trusted source for real-time news and impactful stories.
            Stay ahead with reliable, curated, and trending headlines delivered directly to you with clarity and credibility.
          </p>
          <p className="action-links">
            <span onClick={() => navigate("/login")}>Login</span> or{" "}
            <span onClick={() => navigate("/register")}>Register</span> to get started.
          </p>
        </div>
        <div className="homepage-right">
          <img className = "imageshp" src="/newshome.png" alt="Homepage" />
        </div>
      </main>

      <footer className="homepage-footer">
        © 2025 The Hours.
      </footer>
    </div>
  );
};

export default HomePage;
