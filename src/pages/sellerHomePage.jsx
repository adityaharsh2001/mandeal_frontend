import React from "react";
import AddNewProduct from "../components/addNewProduct";
import SellerCard from "../components/sellerCard";

const SellerHomePage = () => {
  return (
    <div>
      <div className="sell">
        <div className="sell_nav">
          <div className="sell_nav-logo logo">
            Man<span className="span">deal</span>
          </div>
          <div className="sell_nav-profile">
            <img
              src="./images/icons/bell.png"
              alt=""
              className="sell_nav-profile-bell"
            />
            <img
              src="./images/icons/avatar.png"
              alt=""
              className="sell_nav-profile-avatar"
            />
          </div>
        </div>
        <hr />
        <h1 className="sell_heading">Your Products</h1>
        <div className="sell_items">
          <div className="sell_items-cards">
            <div className="sell_items-cards--img">
              <img
                src="./images/nimbu.jpg"
                className="sell_items-cards--img-i"
                alt="Lemon"
              />
            </div>

            <div className="sell_items-cards--main">
              <h2 className="sell_items-cards--main-heading">Lemon</h2>
              <div className="sell_items-cards--main-des">
                High Quality Premium Lemon
              </div>
              <div className="sell_items-cards--main-name">
                Sold by Hari Mohan Prasad
              </div>
              <div className="sell_items-cards--main-price">
                Min Price: <span>₹100/ kg</span>
              </div>
            </div>

            <div className="sell_items-cards--btn">
              <div className="sell_items-cards--btn-b btn-blue">See Stats</div>
            </div>
          </div>
        </div>

        <hr className="mu md" />

        <AddNewProduct />

        <div className="footer"></div>
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default SellerHomePage;
