export const registerUser = async (fullName, email, password) => {
  try {
    const res = await fetch("http://localhost:3000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fullName, email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      return { success: true };
    } else {
      return { success: false, message: data.message };
    }
  } catch (err) {
    console.error("Register error:", err);
    return { success: false, message: "Server error. Try again." };
  }
};
