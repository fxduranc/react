import React from "react";

export default function Item(props) {
    const { item } = props
    return (
        <div>
            <h3>Detalle del Producto</h3>
            {item.map((item) =>
                )}
        </div>



    );
}