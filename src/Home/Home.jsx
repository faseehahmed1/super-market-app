import Button from '../Button/button'
import classes from './Home.module.css'
import landing_img from '../../assets/landing-img.jpeg'
import { Link } from 'react-router-dom'

export default function Home(){
    return(
        <div className={classes.container}>
        <div className={classes.description_container}>
            <h1 className={classes.title}>Online shopping simplified</h1>
            <p className={classes.description}>Order your groceries from <span>SuperM</span> with our easy to use app, and get your products delivered straight to your doorstep.</p>
            <Link to="/products">
            <Button color='green'>Start Shopping</Button>
            </Link>
        </div>
            <img className={classes.landing_img} src={landing_img} alt="image of friuts and a book" />
        </div>
    )
}