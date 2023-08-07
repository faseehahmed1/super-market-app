import classes from './Products.module.css'
import ItemCard from '../ItemCard/ItemCard'

export default function Products({productData, setProductData}){
    return(
        <div className={classes.container}>
        <div className={classes.product_layout}>
        <h1>Products</h1>
        <p className={classes.description}>Take a look at our products</p>
        <div className={classes.products_container}>
        <ItemCard productData={productData} setProductData={setProductData}/>
        </div>
        </div>
        </div>
    )
}