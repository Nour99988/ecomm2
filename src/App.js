import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./App.css";
import Header from "./containers/Header/Header";
// import ProductComponent from "./containers/ProductComponent";
import ProductDetails from "./containers/ProductDetails/ProductDetails";
import ProductListing from "./containers/ProductListing/ProductListing";
import MyCard from "./containers/MyCard/MyCard";
import SignIn from "./containers/SignIn/SignIn";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes basename={window.location.pathname || ""}>
          <Route path="/" exact element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/mycard" element={<MyCard />} />
          <Route path="/sign" element={<SignIn />} />
          {/* <Route path="/*">404 Not Found!</Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
