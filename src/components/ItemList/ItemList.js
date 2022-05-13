//import Item from "../Item/Item";
import { products } from "../Data/Productos"
import Item from "../Item/Item";

export default function ItemList() {
    const task = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, 2000)

    })

    task.then((result) => {
        console.log(result)
    }, err => {
        console.log(err)
    }).catch((err) => {
        console.log(err)
    })
    return (
        <div>
            {products.map((product, index) => (
                <Item product={product} key={product.id} />

                )
        )}
        </div>



    );

}