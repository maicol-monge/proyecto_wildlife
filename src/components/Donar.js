import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import soundFile from './images/tigerr.mp3';

function Donar() {
    const [correo, setCorreo] = useState('');
    const [monto, setMonto] = useState('');
    const [numeroTarjeta, setNumeroTarjeta] = useState('');
    const [fechaExpiracion, setFechaExpiracion] = useState('');
    const [cvv, setCvv] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const donacion = { correo, monto: parseFloat(monto), numero_tarjeta: numeroTarjeta, fecha_expiracion: fechaExpiracion, cvv };



        fetch('http://localhost:3006/donar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(donacion),
        })
            .then((response) => response.text())
            .then((data) => {
                alert(data);
                // Limpiar los campos
                setCorreo('');
                setMonto('');
                setNumeroTarjeta('');
                setFechaExpiracion('');
                setCvv('');
            })
            .catch((error) => {
                console.error('Error al procesar la donación:', error);
            });
    };

    const scrollToDonar = () => {
        document.getElementById('Donar').scrollIntoView({ behavior: 'smooth' });
    };
    useEffect(() => {
        const button = document.getElementById('btnSendForm');
        const clickSound = document.getElementById('clickSound');

        if (button && clickSound) {
            button.addEventListener('click', () => {
                clickSound.play();
            });
        }

        // Limpieza del evento cuando el componente se desmonte
        return () => {
            if (button) {
                button.removeEventListener('click', () => {
                    clickSound.play();
                });
            }
        };
    }, []);

    return (
        <div>
            {/* NavBar */}
            <Navbar />
            {/* body */}
            <section className='fondo-donar'>
                <div className='text-center texto-verde ' style={{ padding: '15vh' }}>
                    <h1 className='fw-bold txtDonar pb-5'>DONA</h1>
                    <h1 className='fw-bold pb-5'>A LA</h1>
                    <h1 className='fw-bold txtDonar txtVidaSalvaje'>VIDA SALVAJE</h1>
                    <div className='d-flex justify-content-center' style={{ paddingTop: '12vh' }}>
                        <button onClick={scrollToDonar} className="btn btn-light m-2 text-light fw-bold btn-donar" style={{ width: '50vh' }}>
                            ¡Donar Ahora!
                        </button>
                    </div>
                </div>
                <div className="bird-container">
                    <img src='https://i.ibb.co/TwZQSPT/bird1.png' className="bird bird1 w-25" alt="Bird 1" />
                    <img src='https://i.ibb.co/Ss9mrfj/bird2.png' className="bird bird2 w-25" alt="Bird 2" />
                </div>
            </section>

            <section id='Donar' className='fondo-donar pt-5 '>
                <img src='https://i.ibb.co/Wyn7b1v/bird3.png' className="bird bird3 w-25" alt="Bird 2" />
                <div className='bg-light p-5 texto-verde text-center w-75 custom-cursor' style={{ border: '5px solid #1F4226' }}>
                    <h1 className='fw-bold py-4'>Apoya a Protect Our WildLife</h1>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <div className="input-group my-3 w-75">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Correo Electrónico"
                                    value={correo}
                                    onChange={(e) => setCorreo(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="input-group my-3 w-25">
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Monto"
                                    value={monto}
                                    onChange={(e) => setMonto(e.target.value)}
                                    required
                                />
                            </div>

                            <h4 className='fw-bold text-start pt-3'>Datos de Tarjeta <i className="bi bi-credit-card"></i></h4>

                            <div className="input-group my-3 w-50">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Número de Tarjeta"
                                    value={numeroTarjeta}
                                    onChange={(e) => setNumeroTarjeta(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="input-group my-3 w-25">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="MM/AA"
                                    value={fechaExpiracion}
                                    onChange={(e) => setFechaExpiracion(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="input-group my-3 w-25">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="CVV"
                                    value={cvv}
                                    onChange={(e) => setCvv(e.target.value)}
                                    required
                                />
                            </div>



                            <div className='d-flex justify-content-center'>
                                <button type="submit" className="btn btn-light m-2 text-light fw-bold btn-donar" id='btnSendForm' style={{ width: '20vh' }}>
                                    ¡Donar!
                                </button>
                                <audio id="clickSound" src={soundFile} preload="auto"></audio>
                            </div>
                        </form>
                    </div>
                </div>

                <div className='d-flex pinos'>
                    <i class="bi bi-tree-fill pino1"></i>
                    <i class="bi bi-tree-fill pino2"></i>
                    <i class="bi bi-tree-fill pino1"></i>
                    <i class="bi bi-tree-fill pino2"></i>
                    <i class="bi bi-tree-fill pino1"></i>
                    <i class="bi bi-tree-fill pino2"></i>

                </div>
            </section>


            {/* Footer */}
            <section className='bg-footer text-light p-3 footer-donar'>
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

export default Donar;