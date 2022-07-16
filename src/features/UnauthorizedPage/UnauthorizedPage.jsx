import React from "react";
import "./unauthorizedPage.styles.css";
import { useNavigate } from "react-router-dom";

const UnauthorizedPage = () => {
  let navigate = useNavigate();

  return (
    <div className="user_login_container">
      <label htmlFor="userAuth">Click to log in</label>

      <select
        name="userAuth"
        id="userAuth"
        onChange={(e) => {
          if (e.target.value === "login") {
            navigate("/todo");
          }
        }}
      >
        <option value="login">Log In</option>
        <option value="logout">Log Out</option>
      </select>
    </div>
  );
};

export default UnauthorizedPage;
