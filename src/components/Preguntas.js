import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import bird1 from './images/bird1.png';
import bird2 from './images/bird2.png';
import bird3 from './images/bird3.png';


function Preguntas() {


    const scrollToDonar = () => {
        document.getElementById('Donar').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div>
            {/* NavBar */}
            <Navbar />
            {/* body */}
            <section className='p-5'>

                <div className='container'>
                    <div className='texto-verde text-center'>
                        <h1 className='fw-bold'>Preguntas Frecuentes</h1>
                    </div>
                    <div className="input-group mb-3 pt-5">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Buscar 🔍"
                            aria-label="Buscar 🔍"
                            aria-describedby="button-addon2"
                        />
                        <button className="btn btn-outline-success" type="button" id="button-addon2">
                            Buscar
                        </button>
                    </div>
                </div>

            </section>

            <section className=''>
                <div className='container'>
                    <div>
                        <div className='fondoTituloAcordion text-light text-start'>
                            <h1 className='p-3'>General</h1>
                        </div>
                        <div className="accordion pb-4 custom-accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button custom-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                    >
                                        ¿Qué es Protect Our Wildlife (POW)?
                                    </button>
                                </h2>
                                <div
                                    id="collapseOne"
                                    className="accordion-collapse  collapse show"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                    Protect Our Wildlife (POW) es una organización no gubernamental dedicada a la conservación de la vida silvestre y sus hábitats en todo el mundo. Trabajamos para proteger especies en peligro, restaurar ecosistemas, y educar a las comunidades sobre la importancia de la biodiversidad.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button custom-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo"
                                        aria-expanded="false"
                                        aria-controls="collapseTwo"
                                    >
                                        ¿Dónde opera POW?
                                    </button>
                                </h2>
                                <div
                                    id="collapseTwo"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                    POW tiene proyectos activos en varios continentes, incluyendo América del Norte, América del Sur, África, Asia y Oceanía. Nos asociamos con comunidades locales, gobiernos y otras organizaciones para maximizar nuestro impacto global.
                                    </div>
                                </div>
                            </div>
                            
                        </div>

                    </div>

                    <div>
                        <div className='fondoTituloAcordion text-light text-start'>
                            <h1 className='p-3'>Donaciones</h1>
                        </div>
                        <div className="accordion pb-4 custom-accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button custom-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                    >
                                        ¿Cómo puedo hacer una donación a POW?
                                    </button>
                                </h2>
                                <div
                                    id="collapseOne"
                                    className="accordion-collapse  collapse show"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                    Puedes hacer una donación directamente a través de nuestro sitio web en la sección "Donar". Aceptamos varias formas de pago, incluidas tarjetas de crédito, PayPal y transferencias bancarias.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button custom-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo"
                                        aria-expanded="false"
                                        aria-controls="collapseTwo"
                                    >
                                        ¿Mi donación es deducible de impuestos?
                                    </button>
                                </h2>
                                <div
                                    id="collapseTwo"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                    Sí, todas las donaciones realizadas a POW son deducibles de impuestos en la mayoría de los países. Después de realizar tu donación, recibirás un recibo que podrás utilizar para tus impuestos.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button custom-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree"
                                        aria-expanded="false"
                                        aria-controls="collapseThree"
                                    >
                                        ¿Puedo elegir a qué proyecto se destinará mi donación?
                                    </button>
                                </h2>
                                <div
                                    id="collapseThree"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                    Sí, puedes optar por donar a un proyecto específico o permitir que POW asigne los fondos a la iniciativa que más lo necesite en ese momento.
                                    </div>
                                </div>
                            </div>
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

export default Preguntas;