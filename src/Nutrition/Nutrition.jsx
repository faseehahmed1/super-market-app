import classes from './Nutrition.module.css'
import { useOutletContext } from 'react-router-dom'
export default function Nutrition(){
    const {nutrition} = useOutletContext()
    const {carbs, protein, salt, fat} = nutrition
    return(
        <>
        <p>{carbs}</p>
        <p>{protein}</p>
        <p>{salt}</p>
        <p>{fat}</p>

        </>
    )
}