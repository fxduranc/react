
import CartWidget from "../CartWidget/CartWidget"

export default function NavBar() {
    return (
        <div className='container'>
            <header className='header'>
                <div className='container'>
                    <h1>Tienda en línea</h1>
                    <br></br>
                    <div id="navigation-bar">
                        <nav>
                            <ul>
                                <li><a href="https://test.com" id="logo">LOGO</a></li>
                                <li><a href="https://test.com">Inicio</a></li>
                                <li><a href="https://test.com">Ropa</a></li>
                                <li><a href="https://test.com">Calzado</a></li>
                                <li><a href="https://test.com">Accesorios</a></li>
                                <li><a href="https://test.com">Contacto</a></li>
                                <CartWidget count= {3} />
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </div >
    )


}