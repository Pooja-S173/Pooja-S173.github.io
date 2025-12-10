import { useState } from "react";
import "../styles/auth.css";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");

  function handleSignup(e) {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("All fields are required");
      return;
    }

    localStorage.setItem("user", JSON.stringify({ name, email, password }));
    alert("Signup Successful!");
    setError("");
  }

  return (
    <div className="auth-container">
      <h2>Signup</h2>

      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
        />

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

        <button>Signup</button>
      </form>
    </div>
  );
}

export default Signup;

