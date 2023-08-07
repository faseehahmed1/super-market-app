import classes from './Product.module.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
export default function Product(){
    const [itemData, setItemData] = useState(null)

    const {id} = useParams()
    useEffect(()=>{
        (async()=>{
            try{
                const response = await fetch(`https://react-tutorial-demo.firebaseio.com/productinfo/id${id}.json`)
                if(!response.ok){
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setItemData(data)
            }
            catch(error){
                console.error(error)
            }
        })()
    }, [])

    return(
        <h1>hello</h1>
    )
}