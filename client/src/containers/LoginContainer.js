import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUsersItems } from "../services/UsersServices";

const LoginContainer = ({ getUsername }) => {
  const navigate = useNavigate();
  // STATE
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [registered, setRegistered] = useState(true);
  // EFFECT
  useEffect(() => {
    getUsersItems().then((res) => {
      setUsers(res);
    });
  }, []);
  //   FUNCTIONS
  const handleLogin = (e) => {
    e.preventDefault();
    for (const user of users) {
      if (user.username === username && user.password === password) {
        getUsername(user.username);
        navigate("/home");
      } else {
        setRegistered(false);
      }
    }
  };
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div>
      {registered ? (
        <div className="login-box">
          <h4>Welcome, please log in below.</h4>
          <form onSubmit={handleLogin}>
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
      ) : (
        <div className="login-box">
          <p>Looks like you don't have an account yet!</p>
          <a href="/register">Click here to register</a>
        </div>
      )}
    </div>
  );
};

export default LoginContainer;
