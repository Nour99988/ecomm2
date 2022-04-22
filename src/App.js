import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./App.css";
import { useSelector } from "react-redux";
import Header from "./containers/Header/Header";
// import ProductComponent from "./containers/ProductComponent";
import ProductDetails from "./containers/ProductDetails/ProductDetails";
import ProductListing from "./containers/ProductListing/ProductListing";
import MyCard from "./containers/MyCard/MyCard";
import SignIn from "./containers/SignIn/SignIn";
import Profile from "./containers/Profile/Profile";
import LogInAsAdmin from "./containers/Admin/LogInAsAdmin";
import PageNotFound from "./containers/general components/PageNotFound/PageNotFound";
import DashBoard from "./containers/Admin/DashBoard";
import Products from "./containers/Admin/component/Products/Products";
import Users from "./containers/Admin/component/Users/Users";

function App() {
  const allow = useSelector((state) => state.logAdmin);

  return (
    <div className="App">
      <Router basename="/ecomm2">
        {!allow && <Header />}
        <Routes>
          {!allow && <Route path="/" exact element={<ProductListing />} />}
          {!allow && <Route path="/profile" element={<Profile />} />}
          {!allow && (
            <Route path="/product/:productId" element={<ProductDetails />} />
          )}
          {!allow && <Route path="/mycard" element={<MyCard />} />}
          {!allow && <Route path="/sign" element={<SignIn />} />}
          {!allow && <Route path="/Admin4455" element={<LogInAsAdmin />} />}
          {allow && <Route path="/dashBoard" element={<DashBoard />} />}
          {allow && <Route path="/dashBoard/products" element={<Products />} />}
          {allow && <Route path="/dashBoard/users" element={<Users />} />}

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
