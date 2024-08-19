import React, { useEffect, useState } from "react";
import "./home.css";
import { Link } from "react-router-dom";
import { Homeproduct } from "./home_product";
import {
  FaEye,
  FaHeart,
  FaFacebook,
  FaTwitterSquare,
  FaInstagramSquare,
  FaYoutube,
  FaShoppingCart,
} from "react-icons/fa";
const Home = ({addproduct}) => {
  const [newProduct, setNewProduct] = useState([]);

  const [featuredProduct, setFeaturedProduct] = useState([]);

  const [topProduct, setTopProduct] = useState([]);

  const [trendingProduct, setTrendingProduct] = useState(Homeproduct);

  const filtercate = (x) => {
    const filterProduuct = Homeproduct.filter((curElm) => {
      return curElm.type === x;
    });
    setTrendingProduct(filterProduuct);
  };

  const allTrendingProduct = () => {
    setTrendingProduct(Homeproduct);
  };

  useEffect(() => {
    productcategory();
  });

  const productcategory = () => {
    const newcategory = Homeproduct.filter((x) => {
      return x.type === "new";
    });
    setNewProduct(newcategory);

    const featuredcategory = Homeproduct.filter((x) => {
      return x.type === "featured";
    });
    setFeaturedProduct(featuredcategory);

    const topcategory = Homeproduct.filter((x) => {
      return x.type === "top";
    });
    setTopProduct(topcategory);
  };

  return (
    <>
      <div className="home">
        <div className="top_banner">
          <div className="contant">
            <h3>Cửa Hàng Camera</h3>
            <h2>Camera - DS-2CD1127G2-L</h2>
            <p>30% off at your first odder</p>
            <Link to={`/shop`} className="link">
              Shop Now
            </Link>
          </div>
        </div>
        <div className="trending">
          <div className="container">
            <div className="left-box">
              <div className="header">
                <div className="heading">
                  <h2 onClick={() => allTrendingProduct()}>Trending Product</h2>
                </div>
                <div className="cate">
                  <h3 onClick={() => filtercate("new")}>New</h3>
                  <h3 onClick={() => filtercate("featured")}>Feature</h3>
                  <h3 onClick={() => filtercate("top")}>Top selling</h3>
                </div>
              </div>
              <div className="product">
                <div className="container">
                  {trendingProduct.map((curElm, index) => {
                    return (
                      <>
                        <div className="box" key={index}>
                          <div className="img-box">
                            <img src={curElm.image} alt=""></img>
                            <div className="icon">
                              <div className="icon_box">
                                <FaEye />
                              </div>
                              <div className="icon_box">
                                <FaHeart />
                              </div>
                            </div>
                          </div>
                          <div className="info">
                            <h3>{curElm.Name}</h3>
                            <p>{curElm.price} VNĐ</p>
                            <button className="btn" onClick={() => addproduct (curElm)}>Add To Cart</button>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
                <button>Show More</button>
              </div>
            </div>
            <div className="right-box">
              <div className="right_container">
                <div className="textimonial">
                  <div className="head">
                    <h3>Our testimonial</h3>
                  </div>
                  <div className="detail">
                    <div className="img_box">
                      <img src="image/T1.avif" alt="testimonial"></img>
                    </div>
                    <div className="info">
                      <h3>setphan robot</h3>
                      <h4>web designer</h4>
                      <p>
                        Moi thac vui long lien he chung toi qua phone:
                        0794961907
                      </p>
                    </div>
                  </div>
                </div>
                <div className="newsletter">
                  <div className="head">
                    <h3>newslatter</h3>
                  </div>
                  <div className="form">
                    <p>Nhap mail cua ban</p>
                    <input
                      type="email"
                      placeholder="E-mail"
                      autoComplete="off"
                    ></input>
                    <button>subscrise</button>
                    <div className="icon_box">
                      <div className="icon">
                        <FaFacebook />
                      </div>
                      <div className="icon">
                        <FaTwitterSquare />
                      </div>
                      <div className="icon">
                        <FaInstagramSquare />
                      </div>
                      <div className="icon">
                        <FaYoutube />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="banner">
          <div className="container">
            <div className="left_box">
              <div className="box">
                <img src="image/Multi-Banner-1.avif" alt="banner"></img>
              </div>
              <div className="box">
                <img src="image/Multi-Banner-2.avif" alt="banner"></img>
              </div>
            </div>
            <div className="right_box">
              <div className="top">
                <img src="image/Multi-Banner-3.webp" alt="banner"></img>
                <img src="image/Multi-Banner-4.avif" alt="banner"></img>
              </div>
              <div className="bottom">
                <img src="image/Multi-Banner-5.webp" alt="banner"></img>
              </div>
            </div>
          </div>
        </div>
        <div className="product_type">
          <div className="container">
            <div className="box">
              <div className="header">
                <h2>New Product</h2>
              </div>
              {newProduct.map((curElm) => {
                return (
                  <>
                    <div className="productbox">
                      <div className="img_box">
                        <img src={curElm.image} alt=""></img>
                      </div>
                      <div className="detail">
                        <h3>{curElm.Name}</h3>
                        <p>{curElm.price} VNĐ</p>
                        <div className="icon">
                          <button>
                            <FaEye />
                          </button>
                          <button>
                            <FaHeart />
                          </button>
                          <button onClick={() => addproduct (curElm)}>
                            <FaShoppingCart />
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="box">
              <div className="header">
                <h2>Feature Product</h2>
              </div>
              {featuredProduct.map((curElm) => {
                return (
                  <>
                    <div className="productbox">
                      <div className="img_box">
                        <img src={curElm.image} alt=""></img>
                      </div>
                      <div className="detail">
                        <h3>{curElm.Name}</h3>
                        <p>{curElm.price} VNĐ</p>
                        <div className="icon">
                          <button>
                            <FaEye />
                          </button>
                          <button>
                            <FaHeart />
                          </button>
                          <button onClick={() => addproduct (curElm)}>
                            <FaShoppingCart />
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="box">
              <div className="header">
                <h2>Top Product</h2>
              </div>
              {topProduct.map((curElm) => {
                return (
                  <>
                    <div className="productbox">
                      <div className="img_box">
                        <img src={curElm.image} alt=""></img>
                      </div>
                      <div className="detail">
                        <h3>{curElm.Name}</h3>
                        <p>{curElm.price} VNĐ</p>
                        <div className="icon">
                          <button>
                            <FaEye />
                          </button>
                          <button>
                            <FaHeart />
                          </button>
                          <button onClick={() => addproduct (curElm)}>
                            <FaShoppingCart />
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
