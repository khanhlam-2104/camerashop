import React, { useState } from "react";
import Nav from "./comp/nav";
import { BrowserRouter } from "react-router-dom";
import Rout from "./comp/rout";
import Footer from "./comp/footer";
import { Homeproduct } from "./comp/home_product";

const App = () => {
  //Them sp
  const [cart, setCart] = useState([])

  //Trang sp
  const [shop, setShop] = useState(Homeproduct);

  //Tim kiem sp
  const[search, setSearch] = useState('')

  // Phan Loai SP
  const Filter = (x) =>{
    const catefilter = Homeproduct.filter((product)=>{
      return product.cat === x
    })
    setShop(catefilter)
  }
  const allcatefilter = () =>{
    setShop(Homeproduct)
  }

  //Ham tim kiem
  const searchleghth = (search || []).length === 0;
  const searchproduct = () =>{
    if(searchleghth)
    {
      alert("Vui Lòng Nhập Sản Phẩm Cần Tìm")
      setShop(Homeproduct)
    }
    else
    {
      const searchfilter = Homeproduct.filter((x)=>{
        return x.cat === search
      })
      setShop(searchfilter)
    } 
  }

  //Them gio hang  
  const addproduct = (product) =>{
    const exist = cart.find((x) =>{
      return x.id === product.id
    })
    if(exist){
      alert("Sản Phẩm Này Đã Được Thêm Vào Giỏ Hàng")
    }
    else{
      setCart([...cart, {...product, qty:1}])
      alert("Thêm Thành Công")
    }
  }
  console.log(cart)
  return (
    <>
      <BrowserRouter>
        <Nav search={search} setSearch={setSearch} searchproduct={searchproduct}/>
        <Rout setCart={setCart} cart={cart} shop={shop} Filter={Filter} allcatefilter={allcatefilter} addproduct={addproduct}/>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
