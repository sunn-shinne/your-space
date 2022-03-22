import './Navbar.css'
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
            <div className="row toTop">
                <nav className="navbar navbar-expand-lg opacity-2 z-index-top navbar-bg sticky-top rounded-3 pl-0 pr-0">
                    <div className="container-fluid p-0">
                        <div className="col-4 ">
                            <Link className="navbar-brand m-2 text-uppercase text-light fs-4" to="/">Your Space</Link>
                        </div>
                        <div className="col- d-flex justify-content-end">
                            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div className="navbar-nav">
                                    <Link className="nav-link m-2 text-uppercase text-light"  to="/main">Главная</Link>
                                    <Link className="nav-link m-2 text-uppercase text-light" to="/overview">Обзор</Link>
                                    <Link className="nav-link m-2 text-uppercase text-light" to="/booking">Бронирование</Link>
                                    <Link className="nav-link m-2 text-uppercase text-light mr-0" to="/about">О нас</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
        </div>
    )
}

export default Navbar