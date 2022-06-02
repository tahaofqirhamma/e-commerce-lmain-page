import React from "react";
import { useState } from "react";
import "./ShowCase.scss";
import data from "../../data/data";
import LightBox from "../LightBox/LightBox";
// import mainimg1 from "../../assets/images/image-product-1.jpg";
import Inc from "../../assets/images/icon-plus.svg";
import Dec from "../../assets/images/icon-minus.svg";

function ShowCase() {
  const [show, setShow] = useState(false);
  const [mainImg, setMainImg] = useState(data[0]);
  const [quantity, setQuantity] = useState(0);
  const [cartItem, setCartItem] = useState(0);

  const openBox = () => {
    setShow(true);
  };

  const closeBox = () => {
    setShow(false);
  };

  const chooseImg = (id) => {
    console.log(id);
    const newImage = data.filter((img) => img.id === id);
    setMainImg(newImage[0]);
  };

  const incQnt = () => {
    setQuantity(quantity + 1);
  };
  const decQnt = () => {
    setQuantity(quantity - 1);
    if (quantity === 0) {
      setQuantity(0);
    }
  };
  const c = 0;

  const addToCart = () => {
    alert("This option well be enable Soon !!");
  };
  //   console.log(quantity);
  return (
    <>
      <section className="container">
        <div className="prd-imgs">
          <div className="main-img">
            <img
              src={mainImg.src0}
              alt=""
              onClick={() => {
                openBox();
              }}
            />
          </div>
          <div className="sub-imgs">
            {data.map((prd, index) => {
              const { id, titel, src1 } = prd;
              return (
                <img
                  src={src1}
                  alt={titel}
                  key={id + index + 99}
                  onClick={() => {
                    chooseImg(id);
                  }}
                />
              );
            })}
          </div>
        </div>

        <div className="prd-infos">
          <div className="titel">
            <p>SNEAKER COMPANY</p>
            <h1>Fall Limited Edition Sneakers</h1>
          </div>

          <p className="prd-descr">
            These low-profile sneakers are you perfect casual wear
            companion.Featuring a durable rubber outer sole, they'll whithstrand
            everything the weather can offer.
          </p>
          <div className="price-buy">
            <h1>
              $125.00 <span>50%</span>
            </h1>
            <h2>$250.00</h2>

            <div className="prd-q">
              <div className="quantity">
                <img
                  src={Inc}
                  alt=""
                  onClick={() => {
                    incQnt();
                  }}
                />
                <span>{quantity}</span>
                <img
                  src={Dec}
                  alt=""
                  onClick={() => {
                    decQnt();
                  }}
                />
              </div>

              <button
                type="button"
                className="btn"
                onClick={() => {
                  addToCart();
                }}
              >
                <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                    fill="#fff"
                    fillRule="nonzero"
                  />
                </svg>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>

      {show && <LightBox closeBox={closeBox} chooseImg={chooseImg} />}
    </>
  );
}

export default ShowCase;
