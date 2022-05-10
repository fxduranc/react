import React, { useState } from "react"


export default function ItemCount({stock, initial, onAdd}) {
    const [count, setCount] = useState(+initial);
    const addCount = () => {
        if (count < stock) {
            setCount (count + 1);
        }
    }

    const decreaseCount = () => {
        if (count > 1) {
            setCount (count - 1);
        }
    };

    return (
        <>
            <div className='container'>
                <div>
                    <input type="button" value="+" onClick={addCount} />
                    {count}
                    <input type="button" value="-" onClick={decreaseCount} />
                    <br></br>
                    <input type="button" value="Agregar a Carrito" onClick={ () => onAdd(count)} />
                </div>
            </div>
        </>
    );


}