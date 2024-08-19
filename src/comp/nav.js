import React from "react";
import { MdLocalShipping, MdSearch, MdLogin, MdLogout } from "react-icons/md";
import { SlUser } from "react-icons/sl";
import "./nav.css";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const Nav = ({search, setSearch , searchproduct}) => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  return (
    <>
      <div className="header">
        <div className="top-header">
          <div className="icon">
            <MdLocalShipping />
          </div>
          <div className="info">
            <p>Miễn Phí Giao Cho Các Đơn Hàng Từ 1 Triệu Trở Lên</p>
          </div>
        </div>
        <div className="mid_header">
          <div className="logo">
            <img src="image/logo.webp" alt="logo"></img>
          </div>
          <div className="search_box">
            <input type="text" value={search} placeholder="search" onChange={(e) => setSearch(e.target.value)}></input>
            <button onClick={searchproduct}>
              <MdSearch />
            </button>
          </div>
          {isAuthenticated ? (
            //Nếu tài khoản đang đăng nhập thì hiện nút Logout
            <div className="user">
              <div className="icon">
                <MdLogout />
              </div>
              <div className="btn">
                <button
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            //Nếu tài khoản chưa đăng nhập thì hiện nút Login
            <div className="user">
              <div className="icon">
                <MdLogin />
              </div>
              <div className="btn">
                <button onClick={() => loginWithRedirect()}>Login</button>
              </div>
            </div>
          )}
        </div>
        <div className="last_header">
          <div className="user_profile">
            {
              //Thong tin tai khoan
              isAuthenticated ? (
                <>
                  <div className="icon">
                    <SlUser />
                  </div>
                  <div className="info">
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="icon">
                    <SlUser />
                  </div>
                  <div className="info">
                    <p>Please Login</p>
                  </div>
                </>
              )
            }
          </div>
          <div className="nav">
            <ul>
              <li>
                <Link to="/" className="link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="link">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/cart" className="link">
                  Cart
                </Link>
              </li>
              <li>
                <Link to="/about" className="link">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="offer">
            <p>Flat 10% over all iphone</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
