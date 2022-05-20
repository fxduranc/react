import React from "react";
import { useParams } from "react-router-dom";


export default function Item(props) {
    const { productid } = useParams
    return (
        <div>
            <h3>Detalle del Producto</h3>
           
        </div>



    );
}