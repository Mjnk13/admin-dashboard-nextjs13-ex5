import Link from "next/link";

const NavBar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fa-solid fa-bars text-white"></i>
                </button>
                <Link href={"/"} className="navbar-brand fw-bold text-white">Dashboard</Link>
                <div className="collapse navbar-collapse justify-content-end" id="navbarToggler">
                    <ul className="m-0 navbar-nav">
                        <li className="nav-item">
                            <Link className="text-decoration-none text-info" href={"/"}>Home</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
 
export default NavBar;