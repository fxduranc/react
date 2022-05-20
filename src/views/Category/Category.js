import ItemListContainer from "../../components/ItemsListContainer/ItemListContainer";
import NavBar from "../../components/NavBar/NavBar"
import { useParams } from "react-router-dom";

export default function Category (){
    const {categoryid} = useParams ();
    return(
        <div>
            <h1>Listado de Productos</h1>
            <NavBar />
            <ItemListContainer />
        </div>
    )
}