import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import soundFile from './images/tigerr.mp3';
import Voluntario from './Voluntario';

function Contacto() {
    const [formData, setFormData] = useState({
        nombre: '',
        correo: '',
        tipoVoluntario: 'Voluntario de Rescate y Rehabilitación', // Valor por defecto
        mensaje: ''
    });
    
    const backg_quokka = {
        backgroundImage: `url(https://i.ibb.co/fC9bzYD/Guarda-Recursos.webp)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '110vh' // O el alto que prefieras
    };

    useEffect(() => {
        const button = document.getElementById('btnSendForm');
        const clickSound = document.getElementById('clickSound');

        const playSound = () => {
            clickSound.currentTime = 0; // Reinicia el sonido antes de reproducirlo
            clickSound.play().catch(error => {
                console.error('Error al intentar reproducir el sonido:', error);
            });
        };

        if (button) {
            button.addEventListener('click', playSound);
        }

        return () => {
            if (button) {
                button.removeEventListener('click', playSound);
            }
        };
    }, []);

    const scrollToForm = () => {
        document.getElementById('Form').scrollIntoView({ behavior: 'smooth' });
    };

    const [errors, setErrors] = useState({
        nombre: '',
        correo: '',
        mensaje: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        
        // Validaciones para nombre, correo y mensaje
        switch (name) {
            case 'nombre':
                if (value.length > 154) {
                    setErrors((prevErrors) => ({ ...prevErrors, nombre: 'El nombre no puede superar los 154 caracteres.' }));
                } else if (value === '') {
                    setErrors((prevErrors) => ({ ...prevErrors, nombre: 'El nombre no puede estar vacío.' }));
                } else {
                    setErrors((prevErrors) => ({ ...prevErrors, nombre: '' }));
                }
                break;
            
            case 'correo':
                if (value.length > 154) {
                    setErrors((prevErrors) => ({ ...prevErrors, correo: 'El correo no puede superar los 154 caracteres.' }));
                } else if (value === '') {
                    setErrors((prevErrors) => ({ ...prevErrors, correo: 'El correo no puede estar vacío.' }));
                } else {
                    setErrors((prevErrors) => ({ ...prevErrors, correo: '' }));
                }
                break;
            
            case 'mensaje':
                if (value.length > 500) {
                    setErrors((prevErrors) => ({ ...prevErrors, mensaje: 'El mensaje no puede superar los 500 caracteres.' }));
                } else if (value === '') {
                    setErrors((prevErrors) => ({ ...prevErrors, mensaje: 'El mensaje no puede estar vacío.' }));
                } else {
                    setErrors((prevErrors) => ({ ...prevErrors, mensaje: '' }));
                }
                break;
            
            default:
                break;
        }

        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Evita que la página se recargue
    
        // Validación simple
        if (!formData.nombre || !formData.correo || !formData.mensaje || !formData.tipoVoluntario) {
            alert('Por favor completa todos los campos.');
            return;
        }
    
        try {
            const response = await fetch('http://localhost:3006/testimonios', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            if (response.ok) {
                alert('Testimonio enviado con éxito.');
                // Limpiar el formulario
                setFormData({
                    nombre: '',
                    correo: '',
                    tipoVoluntario: 'Voluntario de Rescate y Rehabilitación',
                    mensaje: ''
                });
            } else {
                alert('Hubo un error al enviar el testimonio.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error en la conexión con el servidor.');
        }
    };

    return (
        <div>
            <Navbar />
            <section className='fondo-donar py-5'>
                <div className='container'>

                    <div className='py-3'>
                        <h1 className='texto-verde fw-bolder text-center' style={{ fontSize: '75px' }}>¡Tambien puedes darnos tu opinión!</h1>
                    </div>

                    <div id='Form' className='p-5 my-3 custom-cursor' style={{ backgroundColor: 'white', borderRadius: '10px' }}>
                        <h1 className='texto-verde fw-bolder text-center'>¡Puedes ingresar tus testimonios acá!</h1>
                        <form onSubmit={handleSubmit}>
                            <div className='d-flex flex-column justify-content-center align-items-center'>
                                <div className="input-group w-75 mt-4">
                                    <input
                                        type="text"
                                        className="form-control border-mensaje"
                                        placeholder="Nombre"
                                        name="nombre"
                                        value={formData.nombre}
                                        onChange={handleChange}
                                        aria-label="Nombre"
                                        aria-describedby="basic-addon1" />
                                </div>

                                <div className="input-group  w-75 mt-5">
                                    <input
                                        type="email"
                                        className="form-control border-mensaje"
                                        placeholder="Correo"
                                        name="correo"
                                        value={formData.correo}
                                        onChange={handleChange}
                                        aria-label="Correo"
                                        aria-describedby="basic-addon2" />
                                </div>


                                <div className="input-group  w-75 mt-5">
                                    <label htmlFor="volunteerType" className="form-label " >Tipo de Voluntario:</label>
                                    <select
                                        className="form-select border-mensaje"
                                        id="volunteerType"
                                        name="tipoVoluntario"
                                        value={formData.tipoVoluntario}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="Voluntario de Rescate y Rehabilitación">Voluntario de Rescate y Rehabilitación</option>
                                        <option value="Voluntario de Educación y Concienciación">Voluntario de Educación y Concienciación</option>
                                        <option value="Voluntario de Monitoreo y Observación">Voluntario de Monitoreo y Observación</option>
                                        <option value="Voluntario de Conservación de Hábitats">Voluntario de Conservación de Hábitats</option>
                                        <option value="Voluntario de Apoyo Veterinario">Voluntario de Apoyo Veterinario</option>
                                        <option value="Voluntario de Gestión y Administración">Voluntario de Gestión y Administración</option>
                                        <option value="Voluntario de Comunicación y Redes Sociales">Voluntario de Comunicación y Redes Sociales</option>
                                        <option value="Voluntario de Captura y Manejo">Voluntario de Captura y Manejo</option>
                                        <option value="Voluntario de Investigación">Voluntario de Investigación</option>
                                        <option value="Voluntario de Educación Ambiental para Niños">Voluntario de Educación Ambiental para Niños</option>
                                    </select>

                                </div>

                                <div className="form-floating mt-5 w-75">
                                    <textarea
                                        className="form-control border-mensaje"
                                        placeholder="Deja tu mensaje"
                                        id="floatingTextarea2"
                                        name="mensaje"
                                        value={formData.mensaje}
                                        onChange={handleChange}
                                        style={{ height: '300px' }}></textarea>
                                    <label htmlFor="floatingTextarea2">Testimonio</label>
                                </div>
                            </div>


                            <div className='d-flex justify-content-center mt-5'>
                                <button type="submit" className='btnSendForm btn-apoyo w-25' id='btnSendForm'>Enviar Testimonio</button>
                                <audio id="clickSound" src={soundFile} preload="auto"></audio>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            <section className='bg-footer text-light p-3'>
                <div className='container'>
                    <p className='text-center'>© 2024 Protect Our WildLife. Todos los derechos reservados.</p>
                </div>
            </section>
        </div>
    );
}

export default Contacto;
