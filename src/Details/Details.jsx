import { useOutletContext } from 'react-router-dom'
import classes from './Details.module.css'

export default function Details(){
    const {description, price} = useOutletContext()
    return(
        <p>{description} at ${price} a piece.</p>
    )
}