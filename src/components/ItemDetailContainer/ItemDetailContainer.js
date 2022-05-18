import React from "react"
import { products } from "../Data/Productos"
import { useEffect, useState } from "react";
import ItemDetail from '../ItemDetails/ItemDetail'

export default function ItemDetailContainer() {
    const [item, setItem] = useState([])
    const getItem = new Promise((resolve, reject) => {
        let condition = true
        setTimeout(() => {
            if (condition) {
                resolve(products)
            } else {
                reject('Someting went wrong')
            }
        }, 2000)
    })

    useEffect(() => {
        getItem
            .then((res) => setItem(res.getItem[2]))
            .catch((error) => console.log(error))
    }, [])

    console.log(item)
    return (
        <div>
            <ItemDetail item={item}/>
        </div>



    );

}