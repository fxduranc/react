
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
                                <li><a href="#" id="logo">LOGO</a></li>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Portfolio</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Contact</a></li>
                                <CartWidget count= {3} />
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </div >
    )


}