import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import quokka from './images/quokka.jpeg';
import AnaMartinez from './images/Ana.jpg';
import JuanPerez from './images/chico camara.jpg';
import MariaLopez from './images/chica lago.jpg';
import quoteLeft from './images/comilla-left.png';
import quoteRight from './images/comilla-right.png';

function Voluntario() {
    const backg_quokka = {
        backgroundImage: `url(${quokka})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '200vh' // O el alto que prefieras
    };

    return (
        <div>
            {/* NavBar */}
            <Navbar />
            {/* body */}

            <section style={backg_quokka}>
                <div className='container text-start text-white quokka fs-1' style={{ paddingTop: '170vh' }}>
                    <h1>¿Cómo volverte <br /> voluntario de POW?</h1>
                </div>

            </section>

            <section style={{ backgroundColor: '#6DAE40' }}>
                <div className="container d-flex justify-content-center align-items-center text-center" style={{ paddingTop: '15vh', paddingBottom: '15vh' }}>
                    <h3 className='text-light'>POW es una organización de la ONU que trabaja en la protección de animales y su hábitat.
                        Si te apasiona la conservación y quieres ayudar, puedes unirte como voluntario. </h3>
                </div>
            </section>

            <section class="gradiente-section">
                <div className='container text-center'>
                    <h2 class="requisitos-text">Requisitos</h2>
                </div>

            </section>

            <section className='d-flex flex-column' style={{}}>

                <div className="block beige d-flex justify-content-center align-items-center text-center">
                    <h3>Edad mínima es 18 años.</h3>
                </div>

                <div className="block dark-green d-flex align-self-end align-items-center text-center justify-content-center">
                    <h3>Salud: Buen estado físico y mental, especialmente para trabajos de campo.</h3>
                </div>

                <div className="block light-green d-flex align-items-center text-center justify-content-center">
                    <h3>Compromiso de tiempo: Proyectos desde 2 semanas hasta 6 meses o más.</h3>
                </div>

                <div className="block dark-green d-flex align-self-end align-items-center text-center justify-content-center">
                    <h3>Capacitación Específica: Asistir y completar sesiones de capacitación.</h3>
                </div>

                <div className="block beige d-flex justify-content-center align-items-center text-center">
                    <h3>Pasión por la Conservación: Un interés genuino por la vida silvestre y ecosistemas naturales.</h3>
                </div>
            </section>

            <section class="gradiente-section">
                <div className='container text-center'>
                    <h2 class="requisitos-text">Beneficios</h2>
                </div>
            </section>

            <section className='d-flex flex-column'>

                <div className="block beige d-flex justify-content-center align-items-center text-center">
                    <h3>Impacto real en la conservación.</h3>
                </div>

                <div className="block dark-green d-flex align-self-end align-items-center text-center justify-content-center">
                    <h3>Aprendizaje y desarrollo personal</h3>
                </div>

                <div className="block light-green d-flex align-items-center text-center justify-content-center">
                    <h3>Conexiones globales con personas afines.</h3>
                </div>

                <div className="block dark-green d-flex align-self-end align-items-center text-center justify-content-center">
                    <h3>Experiencia Única.</h3>
                </div>

                <div className="block beige d-flex justify-content-center align-items-center text-center">
                    <h3>Contribución a la Conservación.</h3>
                </div>

            </section>

            <section class="gradiente-section">
                <div className='container text-center'>
                    <h2 class="requisitos-text">Unirse</h2>
                </div>
            </section>

            <section className='datos_personales'>
                <div className='container personal d-flex flex-column '>

                    <h3 className='text-center'>Datos personales</h3>

                    <br />

                    <div className='data_imput d-flex flex-column align-items-center'>

                        <div className="input-group mb-3 w-50">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre"
                                aria-label="Nombre"
                                aria-describedby="basic-addon1" />
                        </div>

                        <div className="input-group mb-3 w-50">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Apellido"
                                aria-label="Apellido"
                                aria-describedby="basic-addon1"
                            />
                        </div>
                        
                        <div className="input-group mb-3 w-50">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Edad"
                                aria-label="Edad"
                                aria-describedby="basic-addon1"
                            />
                        </div>

                        <div class="input-group mb-3 w-50">
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Correo"
                                aria-label="Correo"
                                aria-describedby="basic-addon2" />
                            <span class="input-group-text" id="basic-addon2">@gmail.com</span>
                        </div>

                        <div className='d-flex justify-content-between w-50'>

                            <div className="mb-3 w-25" style={{}}>
                                <label htmlFor="volunteerType" className="form-label">Tipo de Voluntario:</label>
                                <select className="form-select" id="volunteerType">
                                    <option value="general">Voluntario 1</option>
                                    <option value="especializado">Voluntario 2</option>
                                    <option value="líder">Voluntario 3</option>
                                </select>
                            </div>

                            <div className="mb-3 w-25">
                                <label htmlFor="volunteerType" className="form-label">País:</label>
                                <select className="form-select" id="volunteerType">
                                    <option value="pais1">El Salvador</option>
                                    <option value="pais2">Honduras</option>
                                    <option value="pais3">Guatemala</option>
                                </select>
                            </div>

                        </div>

                        <div className="input-group mb-3 w-50">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Dirección: Ej. Av 2, calle 4"
                                aria-label="Dirección"
                                aria-describedby="basic-addon1"
                            />
                        </div>

                    </div>

                    <br />

                    <div className='d-flex justify-content-center'>
                        <button className='btnSendForm w-25'>Enviar Formulario</button>
                    </div>


                </div>
            </section>

            <section class="gradiente-section">
                <div className='container text-center'>
                    <h2 class="requisitos-text">Testimonios</h2>
                </div>
            </section>

            {/* Testimonios */}
            <section className='bg-light'>
                <div className='container texto-verde' style={{ padding: '10vh' }}>
                    
                    <div id="testimoniosCarousel" className="carousel slide mt-5" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="d-flex flex-column align-items-center">
                                    <img src={AnaMartinez} className="rounded-circle mb-3" alt="Ana Martínez" style={{ width: '150px', height: '150px' }} />
                                    <div className='d-flex justify-content-start w-75'>
                                        <img src={quoteLeft} className="mb-3" alt="quote icon" style={{ width: '50px' }} />
                                    </div>
                                    <p className="text-center" style={{ maxWidth: '600px' }}>
                                        "Unirme a Protect Our Wildlife ha sido increíblemente gratificante. Ver el impacto positivo de nuestras campañas y educar a las comunidades sobre la conservación de la vida silvestre me llena de orgullo. POW no solo protege a los animales, sino que también empodera a las personas para cuidar su entorno. Estoy orgullosa de ser parte de esta misión."
                                    </p>
                                    <div className='d-flex justify-content-end w-75'>
                                        <img src={quoteRight} className="mb-3" alt="quote icon" style={{ width: '50px' }} />
                                    </div>

                                    <h5 className="fw-bold">Ana Martínez</h5>
                                    <p>Voluntaria de POW</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="d-flex flex-column align-items-center">
                                    <img src={JuanPerez} className="rounded-circle mb-3" alt="Juan Pérez" style={{ width: '150px', height: '150px' }} />
                                    <div className='d-flex justify-content-start w-75'>
                                        <img src={quoteLeft} className="mb-3" alt="quote icon" style={{ width: '50px' }} />
                                    </div>
                                    <p className="text-center" style={{ maxWidth: '600px' }}>
                                        "Trabajar con POW me ha permitido hacer una diferencia real en la protección de la vida silvestre. La organización tiene un enfoque práctico y efectivo para abordar los desafíos de conservación."
                                    </p>
                                    <div className='d-flex justify-content-end w-75'>
                                        <img src={quoteRight} className="mb-3" alt="quote icon" style={{ width: '50px' }} />
                                    </div>
                                    <h5 className="fw-bold">Juan Pérez</h5>
                                    <p>Voluntario de POW</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="d-flex flex-column align-items-center">
                                    <img src={MariaLopez} className="rounded-circle mb-3" alt="María López" style={{ width: '150px', height: '150px' }} />
                                    <div className='d-flex justify-content-start w-75'>
                                        <img src={quoteLeft} className="mb-3" alt="quote icon" style={{ width: '50px' }} />
                                    </div>
                                    <p className="text-center" style={{ maxWidth: '600px' }}>
                                        "POW es una organización que realmente se preocupa por la conservación de la vida silvestre. Me siento honrada de ser parte de este increíble equipo y contribuir a una causa tan noble."
                                    </p>
                                    <div className='d-flex justify-content-end w-75'>
                                        <img src={quoteRight} className="mb-3" alt="quote icon" style={{ width: '50px' }} />
                                    </div>
                                    <h5 className="fw-bold">María López</h5>
                                    <p>Voluntaria de POW</p>
                                </div>
                            </div>
                        </div>

                        <div style={{ padding: '5vh' }}>
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#testimoniosCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#testimoniosCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#testimoniosCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
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

export default Voluntario;