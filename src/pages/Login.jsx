import { useState } from "react";
import "../styles/auth.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!email || !password) {
      setError("All fields are required");
      return;
    }

    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password
    ) {
      alert("Login Successful!");
      setError("");
    } else {
      setError("Invalid Email or Password");
    }
  }

  return (
    <div className="auth-container">
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type={show ? "text" : "password"}
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <p className="show-password" onClick={() => setShow(!show)}>
          {show ? "Hide Password" : "Show Password"}
        </p>

        <p className="error">{error}</p>

        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;



