import { CiSearch, CiHeart } from "react-icons/ci";
import { FaCartPlus } from "react-icons/fa";

export default function Header() {
    return (
        <header className="main-header">
            <nav className="navbar navbar-expand-lg py-3">
                <div className="container">
                    <a className="navbar-brand fw-bold fs-3" href="#">Aranoz.</a>

                    <button aria-label="menu-btn" className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-center" id="navMenu">
                        <ul className="navbar-nav">
                            <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Shop</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Pages</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Blog</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
                        </ul>
                    </div>

                    <div className="d-flex align-items-center header-icons mt-0">
                        <a href="#" className="mx-2 fs-5"><CiSearch /></a>
                        <a href="#" className="mx-2 fs-5"><CiHeart /></a>
                        <a href="#" className="mx-2 fs-5"><FaCartPlus /></a>
                    </div>
                </div>
            </nav>
        </header>
    );
}