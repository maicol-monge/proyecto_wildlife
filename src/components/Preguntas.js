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
                <div className='container custom-cursor'>
                    <div>
                        <div className='fondoTituloAcordion text-light text-start'>
                            <h1 className='p-3'>General</h1>
                        </div>
                        <div className="accordion pb-4 custom-accordion " id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button custom-button  texto-verde"
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
                                    className="accordion-collapse texto-verde collapse show"
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
                                        className="accordion-button custom-button collapsed texto-verde"
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
                                    className="accordion-collapse collapse texto-verde"
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
                                        className="accordion-button custom-button texto-verde"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree"
                                        aria-expanded="true"
                                        aria-controls="collapseThree"
                                    >
                                        ¿Cómo puedo hacer una donación a POW?
                                    </button>
                                </h2>
                                <div
                                    id="collapseThree"
                                    className="accordion-collapse  collapse show texto-verde"
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
                                        className="accordion-button custom-button collapsed texto-verde"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseFour"
                                        aria-expanded="false"
                                        aria-controls="collapseFour"
                                    >
                                        ¿Mi donación es deducible de impuestos?
                                    </button>
                                </h2>
                                <div
                                    id="collapseFour"
                                    className="accordion-collapse collapse texto-verde"
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
                                        className="accordion-button custom-button collapsed texto-verde"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseFive"
                                        aria-expanded="false"
                                        aria-controls="collapseFive"
                                    >
                                        ¿Puedo elegir a qué proyecto se destinará mi donación?
                                    </button>
                                </h2>
                                <div
                                    id="collapseFive"
                                    className="accordion-collapse collapse texto-verde"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                        Sí, puedes optar por donar a un proyecto específico o permitir que POW asigne los fondos a la iniciativa que más lo necesite en ese momento.
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div>
                        <div className='fondoTituloAcordion text-light text-start'>
                            <h1 className='p-3'>Voluntariado</h1>
                        </div>
                        <div className="accordion pb-4 custom-accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button custom-button texto-verde"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseSix"
                                        aria-expanded="true"
                                        aria-controls="collapseSix"
                                    >
                                        ¿Cómo puedo convertirme en voluntario de POW?
                                    </button>
                                </h2>
                                <div
                                    id="collapseSix"
                                    className="accordion-collapse  collapse show texto-verde"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                        Puedes unirte a nuestro equipo de voluntarios completando el formulario de registro en la sección "Voluntarios" de nuestro sitio web. Nos pondremos en contacto contigo para discutir las oportunidades disponibles.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button custom-button collapsed texto-verde"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseSeven"
                                        aria-expanded="false"
                                        aria-controls="collapseSeven"
                                    >
                                        ¿Necesito experiencia previa para ser voluntario?
                                    </button>
                                </h2>
                                <div
                                    id="collapseSeven"
                                    className="accordion-collapse collapse texto-verde"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                        No es necesario tener experiencia previa. Ofrecemos formación y orientación para que todos nuestros voluntarios puedan contribuir de manera efectiva, independientemente de su nivel de experiencia.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button custom-button collapsed texto-verde"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseEight"
                                        aria-expanded="false"
                                        aria-controls="collapseEight"
                                    >
                                        ¿Hay oportunidades de voluntariado en el extranjero?
                                    </button>
                                </h2>
                                <div
                                    id="collapseEight"
                                    className="accordion-collapse collapse texto-verde"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                        Sí, POW ofrece oportunidades de voluntariado tanto a nivel local como internacional. Puedes elegir participar en proyectos en diferentes partes del mundo, dependiendo de tus intereses y disponibilidad.
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div>
                        <div className='fondoTituloAcordion text-light text-start'>
                            <h1 className='p-3'>Proyectos y Conservación</h1>
                        </div>
                        <div className="accordion pb-4 custom-accordion " id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button custom-button  texto-verde"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseNine"
                                        aria-expanded="true"
                                        aria-controls="collapseNine"
                                    >
                                        ¿En qué tipos de proyectos trabaja POW?
                                    </button>
                                </h2>
                                <div
                                    id="collapseNine"
                                    className="accordion-collapse texto-verde collapse show"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                        POW se enfoca en una variedad de proyectos, incluyendo la protección de especies en peligro, restauración de hábitats, reforestación, y programas de educación ambiental. Cada proyecto está diseñado para abordar las necesidades específicas de la vida silvestre en diferentes regiones.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button custom-button collapsed texto-verde"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseTen"
                                        aria-expanded="false"
                                        aria-controls="collapseTen"
                                    >
                                        ¿Cómo selecciona POW los proyectos en los que trabaja?
                                    </button>
                                </h2>
                                <div
                                    id="collapseTen"
                                    className="accordion-collapse collapse texto-verde"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                        Seleccionamos nuestros proyectos basándonos en la urgencia de las amenazas a la vida silvestre, el potencial de impacto, y la posibilidad de colaborar con socios locales. Evaluamos cuidadosamente cada oportunidad para asegurarnos de que nuestros recursos se utilicen de manera efectiva.
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div>
                        <div className='fondoTituloAcordion text-light text-start'>
                            <h1 className='p-3'>Educación y Concientización</h1>
                        </div>
                        <div className="accordion pb-4 custom-accordion " id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button custom-button  texto-verde"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseEleven"
                                        aria-expanded="true"
                                        aria-controls="collapseEleven"
                                    >
                                        ¿Cómo puedo involucrar a mi comunidad en la protección de la vida silvestre?
                                    </button>
                                </h2>
                                <div
                                    id="collapseEleven"
                                    className="accordion-collapse texto-verde collapse show"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                        Puedes involucrar a tu comunidad organizando eventos de concienciación, participando en programas de educación ambiental, y compartiendo información sobre la importancia de la biodiversidad. POW ofrece recursos y apoyo para ayudar a las comunidades a tomar acción.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button custom-button collapsed texto-verde"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwelve"
                                        aria-expanded="false"
                                        aria-controls="collapseTwelve"
                                    >
                                        ¿Ofrece POW programas educativos para escuelas?
                                    </button>
                                </h2>
                                <div
                                    id="collapseTwelve"
                                    className="accordion-collapse collapse texto-verde"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                        Sí, POW tiene programas diseñados para educar a estudiantes de todas las edades sobre la vida silvestre y la conservación. Ofrecemos materiales educativos, talleres, y visitas guiadas a nuestras áreas de conservación.
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