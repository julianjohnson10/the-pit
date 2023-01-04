import { useState } from "react";
import Dashboard from "./Dashboard";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [auth, setauth] = useState(
    localStorage.getItem(localStorage.getItem("auth") || false)
  );
  const users = [{ username: "Julian", password: "testpassword" }];
  const handleSubmit = (e) => {
    e.preventDefault();
    const account = users.find((user) => user.username === username);
    if (account && account.password === password) {
      setauth(true);
      localStorage.setItem("auth", true);
      navigate("/dashboard");
    }
  };
  return (
    <div>
      <p>Welcome!</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="Username"
          value={username}
          onChange={(e) => setusername(e.target.value)}
        />
        <input
          type="text"
          name="Password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  )
};

export default Login;
