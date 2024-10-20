import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';




function Home() {
  const backgroundStyleHeader = {
    backgroundImage: `url(https://i.ibb.co/16x9N7N/Mana-Elefantes.webp)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '150vh',
  };

  const backgroundStyleIntro = {
    backgroundImage: `url(https://i.ibb.co/VDKjjMm/leon-lookup.webp)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '200vh',
  };

  useEffect(() => {
    // Selecciona todas las tarjetas con las clases de animación
    const cards = document.querySelectorAll('.card');

    // Configura el IntersectionObserver
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Agrega la clase 'in-view' cuando la tarjeta esté en vista
          entry.target.classList.add('in-view');
        }
      });
    });

    // Observa cada tarjeta
    cards.forEach(card => {
      observer.observe(card);
    });

    // Limpieza al desmontar el componente
    return () => {
      observer.disconnect();
    };
  }, []);



  return (
    <div className=''>
      {/* NavBar */}
      <Navbar />
      {/* header */}
      <section style={backgroundStyleHeader}>
        <div className='container text-light d-flex flex-column align-items-center' style={{ paddingTop: '120vh' }}>
          <h1 className='texto-header'>Unidos por la Vida Salvaje</h1>
          <div>
            <Link to="/voluntario" className="btn btn-apoyo text-light m-2 fs-5 bg-btn-header" style={{ width: '50vh' }}>
              Registrate como voluntario
            </Link>
            <Link to="/donar" className="btn btn-apoyo text-light m-2 fs-5 bg-btn-header" style={{ width: '50vh' }}>
              Apoya la vida salvaje
            </Link>
          </div>
        </div>
      </section>

      {/* Introduccion */}
      <section style={backgroundStyleIntro}>
        <div className='container text-light' style={{ padding: '20vh' }}>
          <div className='texto-intro'>
            <h1 className='d-flex justify-content-start'>¿Qué es POW?</h1>
            <p>
              En Protect Our WildLife (POW), nuestra misión es preservar y proteger la vida silvestre.
              Nos dedicamos a conservar los hábitats naturales y la biodiversidad del planeta a través de la
              educación, la investigación y la implementación de proyectos de conservación. Trabajamos
              incansablemente para asegurar que las futuras generaciones puedan disfrutar de la riqueza de la
              vida silvestre y los ecosistemas que sustentan. Nuestros esfuerzos incluyen la protección de especies
              en peligro de extinción, la restauración de hábitats degradados y la promoción de prácticas sostenibles.
            </p>
          </div>
          <div className='d-flex justify-content-center' style={{ paddingTop: '12vh' }}>
            <Link to="/about_us" className="btn btn-light m-2  fw-bold btn-intro" style={{ width: '50vh' }}>
              Sobre Nosotros   <i class="bi bi-chevron-right"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Proyectos */}
      <section className='backgroundStyleProyectos'>
        <div className='container text-light' style={{ padding: '10vh' }}>
          <div className='texto-proyecto'>
            <h1 className='d-flex justify-content-center'>Proyectos Destacados</h1>
          </div>
          <div className='d-flex justify-content-evenly' style={{ paddingTop: '12vh' }}>
            {/* card 1 */}
            <div className="card slide-left" style={{ width: '20rem' }}>
              <img src='https://i.ibb.co/ZXS32Jb/puma.webp' className="card-img-top" alt="..." style={{ height: '30rem' }} />
              <div className="card-body bg-card text-light text-center">
                <h5 className="card-title fw-bold ">Santuario de Pumas</h5>
                <p className="card-text">
                  América
                </p>
                <a href="#" className="btn btn-outline-light">
                  Leer Más  <i class="bi bi-caret-right-fill"></i>
                </a>
              </div>
            </div>
            {/* card 2 */}
            <div className="card slide-right" style={{ width: '20rem' }}>
              <img src='https://i.ibb.co/C5PYD8M/primates.webp' className="card-img-top" alt="..." style={{ height: '30rem' }} />
              <div className="card-body bg-card text-light text-center">
                <h5 className="card-title fw-bold ">Conservación de Primates</h5>
                <p className="card-text">
                  Asia
                </p>
                <a href="#" className="btn btn-outline-light">
                  Leer Más  <i class="bi bi-caret-right-fill"></i>
                </a>
              </div>
            </div>
          </div>

          <div className='d-flex justify-content-evenly' style={{ paddingTop: '12vh' }}>
            {/* card 3 */}
            <div className="card slide-left" style={{ width: '20rem' }}>
              <img src='https://i.ibb.co/n16mZXY/elefante-solo.webp' className="card-img-top" alt="..." style={{ height: '30rem' }} />
              <div className="card-body bg-card text-light text-center">
                <h5 className="card-title fw-bold ">Preservación de Elefantes</h5>
                <p className="card-text">
                  África
                </p>
                <a href="#" className="btn btn-outline-light">
                  Leer Más  <i class="bi bi-caret-right-fill"></i>
                </a>
              </div>
            </div>
            {/* card 4 */}
            <div className="card slide-right" style={{ width: '20rem' }}>
              <img src='https://i.ibb.co/ZcNF7Ks/Wallabies.webp' className="card-img-top" alt="..." style={{ height: '30rem' }} />
              <div className="card-body bg-card text-light text-center">
                <h5 className="card-title fw-bold ">Protección de Marsupiales</h5>
                <p className="card-text">
                  Oceanía
                </p>
                <a href="#" className="btn btn-outline-light">
                  Leer Más  <i class="bi bi-caret-right-fill"></i>
                </a>
              </div>
            </div>
          </div>
          <div className='texto-proyecto' style={{ paddingTop: '15vh' }}>
            <h1 className='d-flex justify-content-center'>Eventos</h1>
          </div>
        </div>
      </section>


      {/* Eventos */}
      <section>
        <div className="text-light">
          <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            </div>
            <div className="carousel-inner">
              {/* item 1 */}
              <div className="carousel-item active">
                <img src='https://i.ibb.co/5sqL116/Tortuga-Marina.webp' className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <div className='text-center' style={{ paddingBottom: '55vh' }}>
                    <h1>Save the Turtles</h1>
                    <p className='fs-5' style={{ textAlign: 'justify' }}>Save the Turtles es un evento anual organizado por la ONG Protect Our Wildlife (POW)
                      con el objetivo de proteger y conservar las tortugas marinas. Este evento reúne a voluntarios,
                      conservacionistas, científicos y entusiastas de la vida silvestre para participar en actividades
                      de limpieza de playas, liberación de crías de tortuga, monitoreo de nidos y campañas de concientización
                      sobre la importancia de las tortugas marinas en el ecosistema.</p>
                  </div>
                  <div className='d-flex flex-column justify-content-start text-start'>
                    <h3><i class="bi bi-calendar-fill"></i>   4 de Septiembre</h3>
                    <h3><i class="bi bi-alarm-fill"></i>  7:00 a.m.</h3>
                    <h3><i class="bi bi-geo-alt-fill"></i><a className='no-decoration' href='https://maps.app.goo.gl/qWNhnwTvrhDWYgtt6' target="_blank">  Barra de Santiago, Ahuachapán, El Salvador</a></h3>
                  </div>
                  <div className='d-flex justify-content-center'>
                    <Link to="/about-me" className="btn btn-light m-2 fw-bold texto-verde fs-5" style={{ width: '20vh' }}>
                      Asistir
                    </Link>
                  </div>
                </div>
              </div>

              {/* item 2 */}
              <div className="carousel-item">
                <img src='https://i.ibb.co/9WDyx0s/cocodrilo.webp' className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <div className='text-center' style={{ paddingBottom: '60vh' }}>
                    <h1>Campaña de Concientización de la Importancia de Cocrodilos</h1>
                    <p className='fs-5' style={{ textAlign: 'justify' }}>La Campaña de
                      Concientización de la Importancia de Cocodrilos es un evento organizado
                      por la ONG Protect Our Wildlife (POW) para educar al público sobre la crucial
                      función ecológica de los cocodrilos y la necesidad de su conservación. Este
                      evento incluye una serie de actividades diseñadas para informar y sensibilizar
                      a la comunidad sobre los beneficios de los cocodrilos para los ecosistemas acuáticos
                      y los desafíos que enfrentan debido a la pérdida de hábitat y otras amenazas.</p>
                  </div>
                  <div className='d-flex flex-column justify-content-start text-start'>
                    <h3><i class="bi bi-calendar-fill"></i>   5 de Octubre</h3>
                    <h3><i class="bi bi-alarm-fill"></i>  10:00 a.m.</h3>
                    <h3><i class="bi bi-geo-alt-fill"></i><a className='no-decoration' href='https://maps.app.goo.gl/CF9XnemjMRLttdjs8' target="_blank">  Cairns, Queensland, Australia</a></h3>
                  </div>
                  <div className='d-flex justify-content-center'>
                    <Link to="/about-me" className="btn btn-light m-2 fw-bold texto-verde fs-5" style={{ width: '20vh' }}>
                      Asistir
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className='bg-light'>
        <div className='container texto-verde' style={{ padding: '10vh' }}>
          <div className='text-center'>
            <h1 className='fw-bold'>Testimonios</h1>
            <h3>¿Qué significa POW para otros?</h3>
          </div>

          <div id="testimoniosCarousel" className="carousel slide mt-5" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="d-flex flex-column align-items-center">
                  <img src='https://i.ibb.co/kQY2bZs/Ana.webp' className="rounded-circle mb-3" alt="Ana Martínez" style={{ width: '150px', height: '150px' }} />
                  <div className='d-flex justify-content-start w-75'>
                    <img src='https://i.ibb.co/nDjSf4p/comilla-left.png' className="mb-3" alt="quote icon" style={{ width: '50px' }} />
                  </div>
                  <p className="text-center" style={{ maxWidth: '600px' }}>
                    "Unirme a Protect Our Wildlife ha sido increíblemente gratificante. Ver el impacto positivo de nuestras campañas y educar a las comunidades sobre la conservación de la vida silvestre me llena de orgullo. POW no solo protege a los animales, sino que también empodera a las personas para cuidar su entorno. Estoy orgullosa de ser parte de esta misión."
                  </p>
                  <div className='d-flex justify-content-end w-75'>
                    <img src='https://i.ibb.co/2hGqXVD/comilla-right.png' className="mb-3" alt="quote icon" style={{ width: '50px' }} />
                  </div>

                  <h5 className="fw-bold">Ana Martínez</h5>
                  <p>Voluntaria de POW</p>
                </div>
              </div>
              <div className="carousel-item">
                <div className="d-flex flex-column align-items-center">
                  <img src='https://i.ibb.co/tHLCjXW/chico-camara.webp' className="rounded-circle mb-3" alt="Juan Pérez" style={{ width: '150px', height: '150px' }} />
                  <div className='d-flex justify-content-start w-75'>
                    <img src='https://i.ibb.co/nDjSf4p/comilla-left.png' className="mb-3" alt="quote icon" style={{ width: '50px' }} />
                  </div>
                  <p className="text-center" style={{ maxWidth: '600px' }}>
                    "Trabajar con POW me ha permitido hacer una diferencia real en la protección de la vida silvestre. La organización tiene un enfoque práctico y efectivo para abordar los desafíos de conservación."
                  </p>
                  <div className='d-flex justify-content-end w-75'>
                    <img src='https://i.ibb.co/2hGqXVD/comilla-right.png' className="mb-3" alt="quote icon" style={{ width: '50px' }} />
                  </div>
                  <h5 className="fw-bold">Juan Pérez</h5>
                  <p>Voluntario de POW</p>
                </div>
              </div>
              <div className="carousel-item">
                <div className="d-flex flex-column align-items-center">
                  <img src='https://i.ibb.co/KyD9N5c/chica-lago.webp' className="rounded-circle mb-3" alt="María López" style={{ width: '150px', height: '150px' }} />
                  <div className='d-flex justify-content-start w-75'>
                    <img src='https://i.ibb.co/nDjSf4p/comilla-left.png' className="mb-3" alt="quote icon" style={{ width: '50px' }} />
                  </div>
                  <p className="text-center" style={{ maxWidth: '600px' }}>
                    "POW es una organización que realmente se preocupa por la conservación de la vida silvestre. Me siento honrada de ser parte de este increíble equipo y contribuir a una causa tan noble."
                  </p>
                  <div className='d-flex justify-content-end w-75'>
                    <img src='https://i.ibb.co/2hGqXVD/comilla-right.png' className="mb-3" alt="quote icon" style={{ width: '50px' }} />
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

export default Home;
