import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setActionLogAsAdmin } from "../../redux/actions/productAction";

const LogInAsAdmin = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const navegate = useNavigate();

  const cheakIt = (e) => {
    e.preventDefault();
    if (user === "admin" && password === "123") {
      console.log(user, password);
      dispatch(setActionLogAsAdmin(true));
      navegate("/dashBoard");
    } else {
      navegate("/*");
      console.log("error");
    }
  };
  return (
    <div>
      <form onSubmit={cheakIt}>
        <label>
          Enter User
          <input
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
        </label>
        <label>
          Enter password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit"> Enter </button>{" "}
      </form>
    </div>
  );
};

export default LogInAsAdmin;
