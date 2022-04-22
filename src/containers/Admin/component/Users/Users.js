import React from "react";
import { useSelector } from "react-redux";
const Users = () => {
  const usersFromRedu = useSelector((state) => state.users);
  const productssdasd = useSelector((state) => state.allProducts.products);
  console.log(usersFromRedu);
  return <div></div>;
};

export default Users;
