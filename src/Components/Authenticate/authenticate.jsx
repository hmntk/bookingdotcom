import React from "react";
import { useState } from "react";
import axios from "axios";

function Authenticate() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handlechange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const register = () => {
    const { email, password } = user;
    if (email && password) {
      axios.post("http://localhost:1234/users/signup", user).then((res) => {
        if (res.data.message === "User already registered") {
          alert("User is already registered, Please login");
        } else {
          alert("Please login now.");
        }
      });
    } else {
      alert("Invalid Input");
    }
  };
  return (
    <div>
      <h2 className="">Sign up with Booking.com</h2>
      <input
        type="text"
        placeholder=" "
        name="email"
        value={user.email}
        onChange={handlechange}
      />
      <input
        type="password"
        placeholder=" "
        name="password"
        value={user.password}
        onChange={handlechange}
      />
      <button onClick={register}>Register</button>
    </div>
  );
}

export default Authenticate;
