import { useState } from "react";
import axios from "axios";

function Login() {
  const [user_l, setuser_l] = useState({
    email: "",
    password: "",
  });
  const handlechange = (e) => {
    const { name, value } = e.target;
    setuser_l({
      ...user_l,
      [name]: value,
    });
  };
  const login = () => {
    axios.post("http://localhost:1234/users/login", user_l).then((res) => {
      if (res.data.message === "User logged in succesfully") {
        console.log(res);
        alert("Logged in succesfully");
      } else if (res.data.message === "Password is not correct") {
        alert("Password is not correct");
      } else {
        alert("User not Registered");
      }
      //  history.push("/home")
    });
  };
  return (
    <div>
      <div>
        <div>
          <h2>Log in or sign up on Booking.com</h2>
        </div>
        <div>
          <div>
            <input
              type="text"
              name="email"
              value={user_l.email}
              onChange={handlechange}
            />
            <span>Email address</span>
          </div>
          <div>
            <input
              type="password"
              value={user_l.password}
              onChange={handlechange}
              name="password"
            />
            <span>Password</span>
          </div>
          <button onClick={login}>LOGIN</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
