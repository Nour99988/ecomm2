import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./DashBoard.module.css";
import useFetchData from "../general function/useFetchData";
import { useSelector, useDispatch } from "react-redux";
import { setProducts, setUsers } from "../../redux/actions/productAction";
const DashBoard = () => {
  const productsFromRed = useSelector((state) => state.allProducts.products);
  const usersFromRed = useSelector((state) => state.users);
  const [productsFromApi] = useFetchData("https://fakestoreapi.com/products");
  const [usersFromApi] = useFetchData("https://fakestoreapi.com/users");
  const products =
    productsFromRed.length > 1 ? productsFromRed : productsFromApi;
  const users = usersFromRed.length > 1 ? usersFromRed : usersFromApi;
  const dispatch = useDispatch();
  useEffect(() => {
    if (products && users) {
      dispatch(setUsers(users));
      dispatch(setProducts(products));
      console.log(users);
      console.log(products);
    }
  }, [products, users]);
  return (
    <div className={style.contener}>
      <Link to="products">
        <div className={style.circle}>
          {products?.length}
          <br /> products{" "}
        </div>
      </Link>
      <Link to="users">
        <div className={style.circle}>
          {users?.length}
          <br /> Users
        </div>
      </Link>
    </div>
  );
};

export default DashBoard;
