import { useState } from "react";
import { loginUser, validateEmail } from "../utils/auth";
import "../styles/Login.css"; // Assuming you have a CSS file for styling

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    if (name === "email" && value && !validateEmail(value)) {
      setErrors((prev) => ({
        ...prev,
        email: "Please enter a valid email address",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrors({});
    setMessage(null);

    // Validation
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);

    try {
      const result = await loginUser(formData);

      if (result.success) {
        setMessage({ type: "success", text: result.message });

        setFormData({ email: "", password: "" });
      } else {
        setMessage({ type: "error", text: result.message });
      }
    } catch (error) {
      console.error("Login error:", error);
      setMessage({ type: "error", text: "An error occurred during login" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <form onSubmit={handleSubmit} noValidate>
          {message && (
            <div className={`alert ${message.type}`}>
              <p>{message.text}</p>
            </div>
          )}

          <h1 className="login-title">Login To Your Account</h1>

          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`form-control ${errors.email ? "error" : ""}`}
              placeholder="Email"
              required
            />
            {errors.email && (
              <div
                className="alert error"
                style={{ marginTop: "0.5rem", marginBottom: 0 }}
              >
                {errors.email}
              </div>
            )}
          </div>

          <div className="form-group">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`form-control ${errors.password ? "error" : ""}`}
              placeholder="Password"
              required
            />
            {errors.password && (
              <div
                className="alert error"
                style={{ marginTop: "0.5rem", marginBottom: 0 }}
              >
                {errors.password}
              </div>
            )}
          </div>

          <div className="form-group">
            <button type="submit" className="login-btn" disabled={loading}>
              {loading && <span className="spinner"></span>}
              {loading ? "Signing In..." : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
