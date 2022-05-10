
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
                                <li><a href="https://test.com">Home</a></li>
                                <li><a href="https://test.com">About</a></li>
                                <li><a href="https://test.com">Portfolio</a></li>
                                <li><a href="https://test.com">Services</a></li>
                                <li><a href="https://test.com">Contact</a></li>
                                <CartWidget count= {3} />
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </div >
    )


}