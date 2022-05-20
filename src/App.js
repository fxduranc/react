
import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Products from "./views/Products/Products";
import Home from './views/Home/Home';
import Cart from "./views/Cart/Cart";
import Product from "./views/Product/Product";
import Category from "./views/Category/Category";
import ItemListContainer from "./components/ItemsListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<ItemListContainer/>} />
        <Route exact path="/category/:id" element={<ItemListContainer/>} />
        <Route exact path="/product/:id" element={<Product/>} />
      </Routes>
    </BrowserRouter>
    // <div className="miApp">
    //     <NavBar />
    //     <ItemListContainer category1={"Ropa"} category2={"Calzado"} category3={"Accesorios"}   />
    // </div>

  );
}

export default App;
