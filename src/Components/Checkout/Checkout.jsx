import React from "react";
import "./Checkout.scss";
import CartImg from "../../assets/images/image-product-1-thumbnail.jpg";
import Delete from "../../assets/images/icon-delete.svg";
import Close from "../../assets/images/icon-close.svg";
function Checkout({ setShow }) {
  const isEmpty = true;

  return (
    <div className="checkout">
      {isEmpty ? (
        <>
          <img
            src={Close}
            alt="delete"
            onClick={() => {
              setShow(false);
            }}
            style={{ cursor: "pointer" }}
          />
          <p className="empty">Cart is Empty</p>
        </>
      ) : (
        <>
          <div className="titel">
            <h1>Cart</h1>
            <img
              src={Close}
              alt=""
              onClick={() => {
                setShow(false);
              }}
            />
          </div>
          <div className="prd">
            <img src={CartImg} alt="cartimg" />
            <div className="prd-info">
              <p>Fall Limited Edition Sneakers</p>
              <p className="price">
                $125.00 x <span>quantity</span> =
                <span className="total">total</span>
              </p>
            </div>
            <img src={Delete} alt="delete" />
          </div>
          <button type="button">Checkout</button>
        </>
      )}
    </div>
    //   }
  );
}

export default Checkout;
