import classes from './Storage.module.css'
import { useOutletContext } from 'react-router-dom'
export default function Storage(){
    const {storage} = useOutletContext()

    return(
        <p><b>Storage instructions:</b> {storage}</p>
    )
}