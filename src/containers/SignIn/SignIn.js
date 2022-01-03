import React, { useState } from "react";
// import axios from "axios";

const SignIn = () => {
  const [userValue, setuserValue] = useState({
    name: "",
    password: "",
  });

  const handelsubmit = (e) => {
    e.preventDefault();
    console.log(userValue);
    const data = fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      body: JSON.stringify({
        username: "mor_2314",
        password: "83r5^_",
      }),
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
    console.log(data);
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
