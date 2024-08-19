import React from "react";
import {
  FaPiggyBank,
  FaShippingFast,
  FaHeadset,
  FaWallet,
} from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="left-box">
            <div className="box">
              <div className="icon_box">
                <FaPiggyBank />
              </div>
              <div className="detail">
                <h3>Tích Điểm</h3>
                <p>Để nhận được nhiều ưu đãi hơn</p>
              </div>
            </div>
            <div className="box">
              <div className="icon_box">
                <FaShippingFast />
              </div>
              <div className="detail">
                <h3>Miễn Phí Vận Chuyển</h3>
                <p>Để nhận được nhiều ưu đãi hơn</p>
              </div>
            </div>
            <div className="box">
              <div className="icon_box">
                <FaHeadset />
              </div>
              <div className="detail">
                <h3>Hỗ Trợ 24/7</h3>
                <p>Để nhận được nhiều ưu đãi hơn</p>
              </div>
            </div>
            <div className="box">
              <div className="icon_box">
                <FaWallet />
              </div>
              <div className="detail">
                <h3>Money bank</h3>
                <p>Để nhận được nhiều ưu đãi hơn</p>
              </div>
            </div>
          </div>
          <div className="right-box">
            <div className="header">
              <img src="image/logo.webp" alt=""></img>
              <p>
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups.
              </p>
            </div>
            <div className="bottom">
              <div className="box">
                <h3>Your Account</h3>
                <ul>
                  <li>About Us</li>
                  <li>Account</li>
                  <li>Payment</li>
                  <li>Sales</li>
                </ul>
              </div>
              <div className="box">
                <h3>Product</h3>
                <ul>
                  <li>Delivery</li>
                  <li>Track Oder</li>
                  <li>New Product</li>
                  <li>Old Product</li>
                </ul>
              </div>
              <div className="box">
                <h3>Contact Us</h3>
                <ul>
                  <li>Đại Học Nguyễn Tất Thành</li>
                  <li>0794961907</li>
                  <li>2100012053@nttu.edu.vn</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
