
import ItemListContainer from "./components/ItemsListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (

    <div className="miApp">
        <NavBar />
        <ItemListContainer category1={"Ropa"} category2={"Calzado"} category3={"Accesorios"}   />
    </div>

  );
}

export default App;
