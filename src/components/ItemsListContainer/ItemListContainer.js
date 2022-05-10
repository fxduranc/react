import React from "react"


export default function ItemListContainer({ category1, category2, category3 }) {
    return (
        <>
            <div className='container'>
                <h1>Contenido de la Tienda</h1>
                <div>
                    <ul>
                        <li>{category1}</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>{category2}</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>{category3}</li>
                    </ul>
                </div>
            </div >
        </>
    );


}