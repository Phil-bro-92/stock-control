import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { postUsersItem } from "../services/UsersServices";

const RegisterContainer = () => {
  const navigate = useNavigate();
  // STATE
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [newUser, setNewUser] = useState({
    username: "",
    password: "",
  });
  // EFFECT
  useEffect(() => {
    setNewUser({ username: username, password: password });
  }, [password, username]);
  //   FUNCTIONS
  const handleRegister = () => {
    postUsersItem(newUser);
    navigate("/");
  };
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div>
      <div className="login-box">
        <h4>Welcome, please register below.</h4>
        <form onSubmit={handleRegister}>
          <div>
            <input
              type="text"
              placeholder="Username"
              onChange={handleUsernameChange}
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div>
            <input type="submit" value="Log In" />
          </div>
        </form>
        <p>Don't have an account?</p>
        <a href="/register">Click here to register</a>
      </div>
    </div>
  );
};

export default RegisterContainer;
