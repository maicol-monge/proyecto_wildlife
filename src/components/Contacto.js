import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import guardarecursos from './images/GuardaRecursos.webp';



function Contacto() {

    const backg_quokka = {
        backgroundImage: `url(${guardarecursos})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '110vh' // O el alto que prefieras
    };
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.querySelector('.fade-in-left');
            if (element) {
                const rect = element.getBoundingClientRect();
                const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
                if (rect.top <= viewHeight && rect.bottom >= 0) {
                    setIsVisible(true);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Call once to set initial state

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.querySelector('.fade-in-right');
            if (element) {
                const rect = element.getBoundingClientRect();
                const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
                if (rect.top <= viewHeight && rect.bottom >= 0) {
                    setIsVisible(true);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Call once to set initial state

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div>
            {/* NavBar */}
            <Navbar />
            {/* body */}
            <section style={backg_quokka}>
                <div className='container text-start text-white quokka fs-1' style={{ paddingTop: '90vh' }}>
                    <h1>Contáctanos</h1>
                </div>

            </section>

            <section className='fondo-donar py-5'>
                <div className='container'>
                    <div className='py-5'>
                        <h1 className='texto-verde fw-bolder'>¿Tienes preguntas sobre POW?</h1>
                        <p className='texto-verde fs-3'>
                            La mayoria de preguntas tienen una respuesta inmediata <Link className="nav-link active link-offset-2 link-underline link-underline-opacity-0" aria-current="page" to="/preguntas" style={{ color: '#639B3B', display: 'inline' }}>aquí</Link> .
                        </p>
                    </div>
                    <div className='py-5'>
                        <h1 className='texto-verde fw-bolder'>¿Necesitas ayuda para contactar a nuestro equipo de volunatariado, asociar tu organización a nuestra red de POW o realizar una donación?</h1>
                        <p className='texto-verde fs-3'>
                            Contacta a Protect Our WildLife <Link className="nav-link active link-offset-2 link-underline link-underline-opacity-0" aria-current="page" to="/preguntas" style={{ color: '#639B3B', display: 'inline' }}>aquí</Link> .
                        </p>
                    </div>
                    <div className='bg-light p-5 my-5'>
                        <h3 className='texto-verde fw-bolder '>Para contactar a Protect Our WildLife completa este formulario</h3>

                        <div className='d-flex justify-content-evenly'>

                            <div className="input-group me-3 w-50">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre"
                                    aria-label="Nombre"
                                    aria-describedby="basic-addon1" />
                            </div>

                            <div class="input-group ms-3 w-50">
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Correo"
                                    aria-label="Correo"
                                    aria-describedby="basic-addon2" />

                            </div>

                        </div>
                        <div className="my-3 w-25">
                            <label htmlFor="volunteerType" className="form-label">País:</label>
                            <select className="form-select" id="volunteerType">
                                <option value="pais1">El Salvador</option>
                                <option value="pais2">Honduras</option>
                                <option value="pais3">Guatemala</option>
                            </select>
                        </div>

                        <div class="form-floating">
                            <textarea className="form-control" placeholder="Deja tu mensaje" id="floatingTextarea2" style={{height:'300px'}}></textarea>
                            <label for="floatingTextarea2">Mensaje</label>
                        </div>

                    </div>
                </div>

            </section>


            {/* Footer */}
            <section className='bg-footer text-light p-3'>
                <div className='container'>
                    <div className='row d-flex justify-content-between'>
                        <div className='col-md-2 d-flex justify-content-between fs-4'>
                            <a href='#' className='no-decoration'><i class="bi bi-youtube"></i></a>
                            <a href='#' className='no-decoration'><i class="bi bi-facebook"></i></a>
                            <a href='#' className='no-decoration'><i class="bi bi-instagram"></i></a>
                            <a href='#' className='no-decoration'><i class="bi bi-twitter-x"></i></a>
                        </div>

                        <div className='col-md-4 d-flex justify-content-end '>
                            <p className='text-end'>Privacy Policy & Cookies | By POW </p>
                        </div>
                    </div>


                </div>
            </section>
        </div>
    );
}

export default Contacto;