import React, { useState } from "react";
import axios from "axios";

const SignIn = () => {
  const [userValue, setuserValue] = useState({
    name: "",
    password: "",
  });

  const handelsubmit = (e) => {
    e.preventDefault();
    console.log(userValue);
    axios
      .post("http://fakestoreapi.com/auth/login", {
        body: JSON.stringify({
          // username: userValue.name,
          // password: userValue.password,
          username: "mor_2314",
          password: "83r5^_",
        }),
      })
      .then((res) => res.json())
      .then((json) => console.log(json))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={handelsubmit}>
        <label>
          User Name:
          <input
            type="text"
            value={userValue.name}
            onChange={(e) =>
              setuserValue({ ...userValue, name: e.target.value })
            }
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={userValue.password}
            onChange={(e) =>
              setuserValue({ ...userValue, password: e.target.value })
            }
          />
        </label>
        {/* vcv vcv c c v */}
        <button type="submit"> login </button>
      </form>
    </div>
  );
};

export default SignIn;
