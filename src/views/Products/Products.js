import ItemListContainer from "../../components/ItemsListContainer/ItemListContainer";
import NavBar from "../../components/NavBar/NavBar"

export default function Products (){
    return(
        <div>
            <h1>Listado de Productos</h1>
            <NavBar />
            <ItemListContainer />
        </div>
    )
}