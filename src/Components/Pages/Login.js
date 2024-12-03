import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaEnvelope, FaLock, FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate()

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (e) => {
    e.preventDefault();
   navigate('/dashboard')
  };

  return (
    <div
      style={{
        ...styles.container,
        backgroundImage:
          "url('https://dgmg81phhvh63.cloudfront.net/content/user-photos/Events/Institute-OER/7-Hero-4K.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <form style={styles.form} onSubmit={handleLogin}>
        <h2 style={styles.title}>Institute Admin</h2>
        {/* Email Input */}
        <div style={styles.inputGroup}>
          <label style={styles.label} htmlFor="email">
            Email
          </label>
          <div style={styles.inputWrapper}>
            <span style={{ ...styles.icon, color: "#dc3545" }}>
              <FaEnvelope />
            </span>
            <input
              type="email"
              id="email"
              style={{ ...styles.input, paddingLeft: "40px" }}
              placeholder="Enter your email"
            />
          </div>
        </div>
        {/* Password Input */}
        <div style={styles.inputGroup}>
          <label style={styles.label} htmlFor="password">
            Password
          </label>
          <div style={styles.inputWrapper}>
            {/* Lock Icon */}
            <span style={{ ...styles.icon, color: "#dc3545" }}>
              <FaLock />
            </span>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ ...styles.input, paddingLeft: "40px", paddingRight: "40px" }}
              placeholder="Enter your password"
            />
            {/* Show/Hide Password Icon */}
            <span
              onClick={handleTogglePassword}
              style={{ ...styles.icon, color: "#28a745", right: "10px", left: "unset", cursor: "pointer" }}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>
        {/* Login Button */}
        <button className="hvr-sweep-to-right" type="submit" style={styles.button} onClick={handleLogin} >
          Login{" "}
          <span style={{ paddingLeft: "16px", fontSize: "20px" }}>
            <FaLongArrowAltRight />
          </span>
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f7f7f7",
  },
  form: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    width: "460px",
    textAlign: "center",
  },
  title: {
    marginBottom: "20px",
  },
  inputGroup: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    marginBottom: "8px",
    textAlign: "left",
  },
  inputWrapper: {
    position: "relative",
    display: "flex",
    alignItems: "center",
  },
  input: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "14px",
  },
  icon: {
    position: "absolute",
    left: "10px",
    fontSize: "18px",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor:"#28337b",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default Login;
