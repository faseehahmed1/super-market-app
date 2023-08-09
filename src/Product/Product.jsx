import classes from "./Product.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../Button/button";
import { NavLink, Outlet } from "react-router-dom";

export default function Product({ productData, setProductData }) {
  const [itemData, setItemData] = useState(null);

  const { id } = useParams();
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `https://react-tutorial-demo.firebaseio.com/productinfo/id${id}.json`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setItemData(data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  function handleProductAddClick(id) {
    const copyProductData = [...productData];

    const productIndex = copyProductData.findIndex(
      (product) => product.id === id
    );
    if ("quantity" in copyProductData[productIndex]) {
      copyProductData[productIndex].quantity += 1;
    } else {
      copyProductData[productIndex].quantity = 1;
    }

    setProductData(copyProductData);
  }

  return (
    <>
      {itemData && (
        <div className={classes.container}>
          <div className={classes.inner_container}>
            <div className={classes.image_container}>
              <h1 className={classes.title}>{itemData.name}</h1>
              <img
                className={classes.image}
                src={itemData.image}
                alt={`An image of ${itemData.name}`}
              />
            </div>
            <div className={classes.info_container}>
              <ul className={classes.links}>
                <NavLink
                end
                  className={({ isActive }) =>
                    isActive ? classes.active : classes.inactive
                  }
                  to=""
                >
                  Details
                </NavLink>
                <NavLink
                
                  className={({ isActive }) =>
                    isActive ? classes.active : classes.inactive
                  }
                  to="nutrition"
                >
                  Nutrition
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? classes.active : classes.inactive
                  }
                  to="storage"
                >
                  Storage
                </NavLink>
              </ul>
              <Outlet context={itemData} />
              <Button
                onClick={() => handleProductAddClick(itemData.id)}
                color="green"
              >
                ${itemData.price}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
