import classes from "./ItemCard.module.css";
import { Link } from "react-router-dom";
export default function ItemCard({ productData, setProductData }) {

  function handleProductAddClick(id) {
    const copyProductData = [...productData];

    const productIndex = copyProductData.findIndex((product) => product.id === id);
    if ('quantity' in copyProductData[productIndex]){
      copyProductData[productIndex].quantity+=1
    } else{
      copyProductData[productIndex].quantity = 1;
    }

    setProductData(copyProductData)
  }

  function handleProductDelClick(id){
    const copyProductData = [...productData];
    const productIndex = copyProductData.findIndex((product) => product.id === id);
    copyProductData[productIndex].quantity = 0;
    setProductData(copyProductData)
  }

  return (
    <div className={classes.product_grid}>
      {productData && productData.map((product) => {
        return (
          <div key={product.id} className={classes.container}>
            <div className={classes.img_containter}>
            <Link to={`${product.id}`}>
              <img
                className={classes.image}
                src={product.image}
                alt={`image of ${product.name}`}
              />
              <div className={classes.product_quantity_container}>
                {product.quantity > 0 && <p className={classes.quantity}>{product.quantity}</p>}
              </div>
              </Link>
            </div>
            <div className={classes.product_info}>
              <h2 className={classes.name}>{product.name}</h2>
              <p className={classes.description}>{product.description}</p>
            </div>
            <div className={classes.product_checkout}>
              <div>
                {product.quantity > 0 && <button onClick={()=>handleProductDelClick(product.id)} className={classes.closebtn}>x</button>}
              </div>
              <button
                onClick={() => handleProductAddClick(product.id)}
                className={classes.pricebtn}
              >
                ${product.price}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
