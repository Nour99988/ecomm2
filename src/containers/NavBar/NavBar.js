import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import { useSelector } from "react-redux";

const NavBar = () => {
  const products = useSelector((state) => state.choseProducts);
  // console.log(products);
  const renderList = products.map(({ title, price, qty, id }) => (
    <li className={styles.titleProductInList} key={id}>
      <span>
        {title} {qty > 1 ? `qty:${qty}` : ""}
      </span>
      <span>$ {price}</span>
    </li>
  ));

  return (
    <div className={styles.navbar}>
      <ul className={styles.links}>
        <Link to="/">Home</Link>
        <Link to="/mycard">Card</Link>
        {/* <Link to="/profile">Profile</Link> */}
        {/* <Link to="/setting">Setting</Link> */}
        <Link to="/about">About</Link>
        <Link to="/sign"> sign in </Link>
        <span className={styles.icon}>
          icon
          <span className={styles.after}>{products.length}</span>
          <ul className={styles.productsList}>
            {renderList.length !== 0 ? renderList : "no item yet"}
          </ul>
        </span>
      </ul>
    </div>
  );
};

export default NavBar;
