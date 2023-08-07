import classes from "./Cart.module.css";
import clsx from "clsx";

export default function Cart({productData}) {
    const totalQuantity = productData.reduce((total, current)=>{
        return total + (current.quantity || 0)
    },0)

    const totalPrice = productData.reduce((total, current)=>{
        return total + (current.price* (current.quantity || 1))
    }, 1)

  let rowIndex = 0;
  return (
    <div className={classes.container}>
      <h1>Your Cart</h1>
      <div className={classes.table_container}>
        <div className={classes.header_row}>
          <p>Product</p>
          <p>Unit Price</p>
          <p>Qunaitity</p>
          <p>Total</p>
        </div>
        {productData && productData.map((product) => {
          const productClass = clsx(classes.product_row, {
            [classes.product_even]: rowIndex % 2 !== 0,
          });
          if (!product.quantity) return;
          rowIndex++;
          return (
            <div key={product.id} className={productClass}>
              <p>{product.name}</p>
              <p>{product.price}</p>
              <p>{product.quantity}</p>
              <p>$ {product.price * product.quantity}</p>
            </div>
          );
        })}
        <div className={classes.total_row_container}>
        <div className={classes.total_row}>
          <p>{totalQuantity}</p>
          <p>$ {totalPrice}</p>
        </div>
        </div>
      </div>
      <p>Enter your email and then click on pay and your products will be delivered to you on the same day!</p>
    </div>
  );
}
