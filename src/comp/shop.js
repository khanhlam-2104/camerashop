import React, { useState } from "react";
import "./shop.css";
import { FaHeart, FaEye } from "react-icons/fa";
import { GrClose } from "react-icons/gr";

const Shop = ({ shop, Filter, allcatefilter, addproduct }) => {
  //Thong tin chi tiet
  const [showDetail, setShowDetail] = useState(false)

  //Du Lieu Cua So Nho Chi Tiet San Pham
  const[detail, setDetail] = useState([])

  //Ham hien thi thong tin chi tiet
  const detailPage = (product) =>{
    const detaildata = ([{product}])
    const productdetail = detaildata[0]['product']
    // console.log(productdetail)
    setDetail(productdetail)
    setShowDetail(true)
  }
  const closeDetail = () =>{
    setShowDetail(false)
  }
  return (
    <>
      {
        showDetail ?
        <>
        <div className="product_detail">
          <button className="close_btn" onClick={closeDetail}><GrClose /></button>
          <div className="container">
            <div className="img_box">
              <img src={detail.image} alt=""></img>
            </div>
            <div className="info">
              <h4># {detail.cat}</h4>
              <h2>{detail.Name}</h2>
              <p>{detail.info}</p>
              <h3>{detail.price} VNĐ</h3>
              <button onClick={() => addproduct (detail)}>Add to cart</button>
            </div>
          </div>
        </div>
        </>
        :null
      }
      
      <div className="shop">
        <h2># shop</h2>
        <p>Home . Shop</p>
        <div className="container">
          <div className="left_box">
            <div className="category">
              <div className="header">
                <h3>all categories</h3>
              </div>
              <div className="box">
                <ul>
                  <li onClick={() => allcatefilter ()}>#all</li>
                  <li onClick={() => Filter('DH-HAC')}>#DH-HAC</li>
                  <li onClick={() => Filter('DS')}>#DS</li>
                  <li onClick={() => Filter('IPC')}>#IPC</li>
                  <li onClick={() => Filter('KX')}>#KX</li>
                </ul>
              </div>
            </div>
            <div className="banner">
              <div className="imh_box">
                <img src="image/shop_left.jpg" alt=""></img>
              </div>
            </div>
          </div>
          <div className="right_box">
            <div className="banner">
              <div className="img_box">
                <img src="image/shop_top.jpg" alt=""></img>
              </div>
            </div>
            <div className="product_box">
              <h2>Shop Product</h2>
              <div className="product_container">
                {shop.map((curElm) => {
                  return (
                    <>
                      <div className="box">
                        <div className="img_box">
                          <img src={curElm.image} alt=""></img>
                          <div className="icon">
                            <li><FaHeart /></li>
                            <li onClick={() => detailPage (curElm)}><FaEye /></li>
                          </div>
                        </div>
                        <div className="detail">
                          <h3>{curElm.Name}</h3>
                          <p>{curElm.price} VNĐ</p>
                          <button onClick={() => addproduct (curElm)}>Add to cart</button>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
