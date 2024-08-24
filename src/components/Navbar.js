import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './images/LOGO PNG 1.png';

function Navbar() {


    return (
        <div>
            {/* NavBar */}
            <section className="sticky-top">
                <nav className="navbar navbar-dark bg-navbar">
                    <div className="container">
                        <div className="d-flex w-100 align-items-center justify-content-between">
                            {/* Logo */}
                            <Link className="navbar-brand" to="/">
                                <img src={Logo} alt="Logo" style={{ height: '65px' }} />
                            </Link>

                            {/* Elementos */}
                            <div className="d-flex align-items-center">
                                <Link to="/voluntario" className="btn text-light m-2 fs-5 bg-btn-navbar" style={{ width: '20vh' }}>
                                    <i className="bi bi-person-plus-fill"></i> Únete
                                </Link>
                                <Link to="/donar" className="btn text-light m-2 fs-5 bg-btn-navbar" style={{ width: '20vh' }}>
                                    <i className="bi bi-patch-plus-fill"></i> Donar
                                </Link>
                                <button
                                    className="navbar-toggler ms-2"
                                    type="button"
                                    data-bs-toggle="offcanvas"
                                    data-bs-target="#offcanvasDarkNavbar"
                                    aria-controls="offcanvasDarkNavbar"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                            </div>
                        </div>

                        <div
                            className="offcanvas offcanvas-end text-bg-dark"
                            tabIndex="-1"
                            id="offcanvasDarkNavbar"
                            aria-labelledby="offcanvasDarkNavbarLabel"
                        >
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">PROTECT OUR WILDLIFE</h5>
                                <button
                                    type="button"
                                    className="btn-close btn-close-white"
                                    data-bs-dismiss="offcanvas"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/about_us">Sobre Nosotros</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/voluntario">Voluntariado</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/donar">Donar</Link>
                                    </li>
                                </ul>
                                <form className="d-flex mt-3" role="search">
                                    <input
                                        className="form-control me-2"
                                        type="search"
                                        placeholder="Buscar"
                                        aria-label="Search"
                                    />
                                    <button className="btn btn-success" type="submit">Buscar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </nav>
            </section>

        </div>
    );
}

export default Navbar;