import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService.jsx";

export function useLogin() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (email, password) => {
    setLoading(true);
    try {
      const data = await loginUser(email, password);
      alert("Login successful");
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      navigate("/home");
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { handleLogin, loading };
}
