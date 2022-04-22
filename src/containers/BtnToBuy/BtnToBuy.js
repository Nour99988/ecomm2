import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Modal from "../general components/Modal/Modal";

const BtnToBuy = () => {
  const navegate = useNavigate();
  const products = useSelector((state) => state.choseProducts);
  const { id } = useSelector((state) => state.logUser);
  const [showModal, setShowModal] = useState(false);
  const [showModalIfCatch, setShowModalIfCatch] = useState(false);
  const [showCatchModal, setShowCatchModal] = useState("");
  const [invoicId, setInvoicId] = useState(Number);
  // console.log(invoicId);
  const handelClick = () => {
    if (id !== undefined) {
      navegate("/sign");
    } else {
      document.body.style.cursor = "wait";
      const dataToBackend = products.map(({ id, qty }) => {
        return { productId: id, quantity: qty };
      });
      axios
        .post("https://fakestoreapi.com/carts", {
          body: JSON.stringify({
            userId: id,
            date: Date,
            products: dataToBackend,
          }),
        })
        .then((res) => {
          console.log(res.data);
          setInvoicId(res.data);
          setShowModal(true);
          document.body.style.cursor = "default";
        })
        .catch((err) => {
          setShowModalIfCatch(true);
          setShowCatchModal("please cheak internet coonection");
          document.body.style.cursor = "default";
          console.log(err);
        });
    }
  };
  return (
    <div>
      <button onClick={handelClick}>Click to get invoice id</button>
      {showModal && (
        <Modal
          closeModal={setShowModal}
          content={`Your invoic Id is: ${invoicId.id}`}
        />
      )}
      {showModalIfCatch && (
        <Modal closeModal={setShowModalIfCatch} content={showCatchModal} />
      )}
    </div>
  );
};

export default BtnToBuy;
