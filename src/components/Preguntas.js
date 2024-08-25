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
                    <div className="input-group mb-3 p-5">
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