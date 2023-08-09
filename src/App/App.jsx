import classes from "./App.module.css";
import Button from "../Button/button";
import { Route, Routes, NavLink } from "react-router-dom";
import Home from "../Home/Home";
import AboutUs from "../AboutUs/AboutUs";
import Products from "../Products/Products";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import { useEffect, useState } from "react";
import Nutrition from "../Nutrition/Nutrition";
import Storage from "../Storage/Storage";
import Details from "../Details/Details";

function App() {
  const [productData, setProductData] = useState(() => JSON.parse(localStorage.getItem("localitems")));
  useEffect(() => {
    if (localStorage.getItem("localitems")) return;
    (async () => {
      try {
        const response = await fetch(
          "https://react-tutorial-demo.firebaseio.com/supermarket.json"
          );
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          
          const data = await response.json();
          setProductData(data);
        } catch (error) {
          console.error(error);
        }
      })();
    }, []);
    
    useEffect(() => {
      localStorage.setItem("localitems", JSON.stringify(productData));
  }, [productData]);

  const totalCartItems = productData?.reduce((total, current) => {
    return total + (current.quantity || 0);
}, 0);

  return (
    <>
      <nav>
      
        <p className={classes.logo}>SuperM</p>
        <li className={classes.nav_links}>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : classes.inactive
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : classes.inactive
            }
            to="/aboutus"
          >
            About Us
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : classes.inactive
            }
            to="/products"
          >
            Products
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : classes.inactive
            }
            to="/cart"
          >
            <Button>Cart({totalCartItems ?? 0})</Button>
          </NavLink>
        </li>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/products" element={<Products productData={productData} setProductData={setProductData}/>} />
        <Route path="/cart" element={<Cart productData={productData} />} />
        <Route path="/products/:id" element={<Product productData={productData} setProductData={setProductData}/>} >
        <Route path="" element={<Details/>}></Route>
            <Route path="nutrition" element={<Nutrition/>}></Route>
            <Route path="storage" element={<Storage/>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
