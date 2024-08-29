import React, { useEffect } from 'react';
import yellowMan from './images/hombreamarillo.webp';
import Navbar from './Navbar';
import backg2 from './images/jaguar.webp';
import elefante from './images/-elefante.png';
import jirafa from './images/jirafa.webp';
import soundFile from './images/Sonido_elefante.mp3';


function About_us() {
    const backgroundStyle = {
        backgroundImage: `url(${yellowMan})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '150vh' // O el alto que prefieras
    };

    const backgroundDiv2 = {
        backgroundImage: `url(${backg2})`,
        backgroundSize: 'cover',
        //backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '200vh' // O el alto que prefieras
    };
    const backg_jirafa = {
        backgroundImage: `url(${jirafa})`,
        backgroundSize: 'cover',
        //backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh' // O el alto que prefieras
    };

    useEffect(() => {
        const elefante = document.getElementById('hoverElefante');
        const hoverSound = document.getElementById('hoverSound');

        if (elefante && hoverSound) {
            elefante.addEventListener('click', () => {
                hoverSound.play();
            });
        }

        // Limpieza del evento cuando el componente se desmonte
        return () => {
            if (elefante) {
                elefante.removeEventListener('click', () => {
                    hoverSound.play();
                });
            }
        };
    }, []);

    useEffect(() => {
        const elefante2 = document.getElementById('hoverElefante2');
        const hoverSound2 = document.getElementById('hoverSound2');

        if (elefante2 && hoverSound2) {
            elefante2.addEventListener('click', () => {
                hoverSound2.play();
            });
        }

        // Limpieza del evento cuando el componente se desmonte
        return () => {
            if (elefante2) {
                elefante2.removeEventListener('click', () => {
                    hoverSound2.play();
                });
            }
        };
    }, []);


    return (
        <div>
            {/* NavBar */}
            <Navbar />
            {/* body */}
            <section style={backgroundStyle}>
                <div className='container text-light d-flex flex-column align-items-start ourHistory' style={{ paddingTop: '90vh' }}>
                    <h1>Sobre<br />Nosotros</h1>
                </div>
            </section>
            <section style={backgroundDiv2}>
                <div className='container d-flex flex-column align-items-end text-end ourHistory' style={{ paddingTop: '25vh', paddingLeft: '100vh' }}>
                    <h1>Nuestra Historia</h1>
                    <p>Fundada en 2010, Protect Our Wildlife (POW) nació de la pasión y dedicación de un pequeño grupo de conservacionistas
                        comprometidos con la protección de la vida silvestre en peligro. Inicialmente enfocada en la preservación de especies locales,
                        POW ha crecido hasta convertirse en una organización global, abarcando proyectos en varios continentes. A través de campañas de
                        concienciación, programas educativos y esfuerzos de conservación directos, POW ha trabajado incansablemente para asegurar un futuro
                        sostenible para la biodiversidad del planeta. Hoy en día, POW continúa expandiendo su alcance y colaboración con comunidades, gobiernos
                        y otras ONG para proteger la vida salvaje y sus hábitats en todo el mundo.</p>
                </div>
            </section>

            <section style={{ backgroundColor: '#1F4226' }}>
                <div className='container d-flex misionandvision' style={{ paddingTop: '15vh', paddingBottom: '15vh' }} >

                    <div className='mision'>
                        <h1>MISIÓN</h1>
                        <p>Proteger y conservar la vida silvestre a través de acciones educativas, programas de conservación y proyectos de investigación, fomentando
                            la convivencia armoniosa entre las comunidades humanas y los ecosistemas naturales para garantizar un futuro sostenible para todas las especies.</p>
                        <div className='custom-cursor d-flex align-items-center flex-column'>
                            <img id="hoverElefante" src={elefante} alt="elefante" className='w-50' />
                            <audio id="hoverSound" src={soundFile} preload="auto"></audio>
                        </div>

                    </div>

                    <div className="divider">.</div>

                    <div className='vision'>
                        <div className='custom-cursor d-flex align-items-center flex-column'>
                            <img id="hoverElefante2" src={elefante} alt="elefante" className='w-50' />
                            <audio id="hoverSound2" src={soundFile} preload="auto"></audio>
                        </div>
                        <p>Ser una organización líder a nivel mundial en la preservación de la vida silvestre, reconocida por nuestro impacto positivo en la biodiversidad y por
                            inspirar a las personas y comunidades a valorar y proteger los recursos naturales para las generaciones futuras.</p>
                        <h1>VISIÓN</h1>
                    </div>
                </div>
            </section>

            <section style={backg_jirafa}>
                <div className='container d-flex flex-column texto-verde' >
                    <h1 style={{ paddingTop: '15vh', fontSize: '80px' }} className='fw-bold texto-verde'>POW incluye...</h1>

                    <div className='d-flex justify-content-end'>
                        <div className='col-md-5'>
                            <div className='div1 text-center d-flex justify-content-between p-1'>

                                <div className='col-5 d-flex flex-column justify-content-center texto-verde'>
                                    <i class="bi bi-globe2 fs-1 " ></i>
                                    <h3>+120 Países</h3>

                                </div>
                                <div className=' col-5 d-flex flex-column justify-content-center texto-verde'>

                                    <i class="bi bi-house-fill fs-1"></i>
                                    <h3>+60 Reservas Naturales</h3>

                                </div>


                            </div>
                            <div className='div1 text-center d-flex justify-content-between p-1'>
                                <div className='col-5 d-flex flex-column justify-content-center'>
                                    <i class="bi bi-cash-coin fs-1"></i>
                                    <h3>+50K Donaciones</h3>

                                </div>
                                <div className='col-5 d-flex flex-column justify-content-center'>

                                    <i class="bi bi-people-fill fs-1"></i>
                                    <h3>+5K Voluntarios</h3>

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

export default About_us;