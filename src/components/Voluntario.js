import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import soundFile from './images/tigerr.mp3';

function Voluntario() {

    const backg_quokka = {
        backgroundImage: `url(https://i.ibb.co/LY4PNPB/quokka.webp)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '200vh' // O el alto que prefieras
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


    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [edad, setEdad] = useState('');
    const [correo, setCorreo] = useState('');
    const [tipoVoluntario, setTipoVoluntario] = useState('rescate');
    const [pais, setPais] = useState('AF');
    const [direccion, setDireccion] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const voluntario = { nombre, apellido, edad, correo, tipoVoluntario, pais, direccion };

        fetch('http://localhost:3002/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(voluntario),
        })
            .then((response) => response.text())
            .then((data) => {
                alert(data);
                // Limpiar los campos
                setNombre('');
                setApellido('');
                setEdad('');
                setCorreo('');
                setTipoVoluntario('');
                setPais('');
                setDireccion('');
            })
            .catch((error) => {
                console.error('Error registrando voluntario:', error);
            });
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

                <div className={`block beige d-flex justify-content-center align-items-center text-center fade-in-left ${isVisible ? 'visible' : ''}`} style={{ marginTop: "7vh" }}>
                    <h3>Edad mínima es 18 años.</h3>
                </div>

                <div className={`block dark-green d-flex align-self-end align-items-center text-center justify-content-center fade-in-right ${isVisible ? 'visible' : ''}`}>
                    <h3>Salud: Buen estado físico y mental, especialmente para trabajos de campo.</h3>
                </div>

                <div className={`block light-green d-flex align-items-center text-center justify-content-center fade-in-left ${isVisible ? 'visible' : ''}`}>
                    <h3>Compromiso de tiempo: Proyectos desde 2 semanas hasta 6 meses o más.</h3>
                </div>

                <div className={`block dark-green d-flex align-self-end align-items-center text-center justify-content-center fade-in-right ${isVisible ? 'visible' : ''}`}>
                    <h3>Capacitación Específica: Asistir y completar sesiones de capacitación.</h3>
                </div>

                <div className={`block beige d-flex justify-content-center align-items-center text-center fade-in-left ${isVisible ? 'visible' : ''}`} style={{ marginBottom: "7vh" }}>
                    <h3>Pasión por la Conservación: Un interés genuino por la vida silvestre y ecosistemas naturales.</h3>
                </div>
            </section>

            <section class="gradiente-section">
                <div className='container text-center'>
                    <h2 class="requisitos-text">Beneficios</h2>
                </div>
            </section>

            <section className='d-flex flex-column'>

                <div className={`block beige d-flex justify-content-center align-items-center text-center fade-in-left ${isVisible ? 'visible' : ''}`} style={{ marginTop: "7vh" }}>
                    <h3>Impacto real en la conservación.</h3>
                </div>

                <div className={`block dark-green d-flex align-self-end align-items-center text-center justify-content-center fade-in-right ${isVisible ? 'visible' : ''}`}>
                    <h3>Aprendizaje y desarrollo personal</h3>
                </div>

                <div className={`block light-green d-flex align-items-center text-center justify-content-center fade-in-left ${isVisible ? 'visible' : ''}`}>
                    <h3>Conexiones globales con personas afines.</h3>
                </div>

                <div className={`block dark-green d-flex align-self-end align-items-center text-center justify-content-center fade-in-right ${isVisible ? 'visible' : ''}`}>
                    <h3>Experiencia Única.</h3>
                </div>

                <div className={`block beige d-flex justify-content-center align-items-center text-center fade-in-left ${isVisible ? 'visible' : ''}`} style={{ marginBottom: "7vh" }}>
                    <h3>Contribución a la Conservación.</h3>
                </div>

            </section>

            <section class="gradiente-section">
                <div className='container text-center'>
                    <h2 class="requisitos-text">Unirse</h2>
                </div>
            </section>

            <section className='datos_personales'>
                <div className='container personal d-flex flex-column'>
                    <h3 className='text-center'>Datos personales</h3>

                    <br />

                    <div >
                        <form onSubmit={handleSubmit} className='data_imput d-flex flex-column align-items-center'>
                            <div className="nombre input-group w-50" style={{ marginBottom: "5vh" }}>
                                <input
                                    required
                                    type="text"
                                    className="input"
                                    value={nombre}
                                    onChange={(e) => setNombre(e.target.value)}
                                />
                                <span className="highlight"></span>
                                <span className="bar"></span>
                                <label>Nombre</label>
                            </div>

                            <div className="nombre input-group w-50 mb-5">
                                <input
                                    required
                                    type="text"
                                    className="input"
                                    value={apellido}
                                    onChange={(e) => setApellido(e.target.value)}
                                />
                                <span className="highlight"></span>
                                <span className="bar"></span>
                                <label>Apellido</label>
                            </div>

                            <div className="nombre input-group w-50 mb-5">
                                <input
                                    required
                                    type="text"
                                    className="input"
                                    value={edad}
                                    onChange={(e) => setEdad(e.target.value)}
                                />
                                <span className="highlight"></span>
                                <span className="bar"></span>
                                <label>Edad</label>
                            </div>

                            <div className="nombre input-group w-50 mb-5">
                                <input
                                    required
                                    type="email"
                                    className="input"
                                    value={correo}
                                    onChange={(e) => setCorreo(e.target.value)}
                                />
                                <span className="highlight"></span>
                                <span className="bar"></span>
                                <label>Correo</label>
                            </div>

                            <div className='d-flex justify-content-between w-50'>



                                <div className="mb-5 w-50">
                                    <label htmlFor="volunteerType" className="form-label">Tipo de Voluntario:</label>
                                    <select
                                        className="form-select"
                                        style={{ backgroundColor: "transparent" }}
                                        id="volunteerType"
                                        value={tipoVoluntario}
                                        onChange={(e) => {
                                            
                                            setTipoVoluntario(e.target.value);
                                        }}
                                        required
                                    >
                                        <option value="rescate">Voluntario de Rescate y Rehabilitación</option>
                                        <option value="educacion">Voluntario de Educación y Concienciación</option>
                                        <option value="monitoreo">Voluntario de Monitoreo y Observación</option>
                                        <option value="conservacion">Voluntario de Conservación de Hábitats</option>
                                        <option value="veterinario">Voluntario de Apoyo Veterinario</option>
                                        <option value="administracion">Voluntario de Gestión y Administración</option>
                                        <option value="comunicacion">Voluntario de Comunicación y Redes Sociales</option>
                                        <option value="manejo">Voluntario de Captura y Manejo</option>
                                        <option value="investigacion">Voluntario de Investigación</option>
                                        <option value="educacion-ninos">Voluntario de Educación Ambiental para Niños</option>
                                    </select>
                                </div>

                                <div className="mb-5 w-25">
                                    <label htmlFor="country" className="form-label">País:</label>
                                    <select
                                        className="form-select"
                                        id="country"
                                        style={{ backgroundColor: "transparent", color: "black" }}
                                        value={pais}
                                        onChange={(e) => setPais(e.target.value)}
                                        required
                                    >
                                        <option value="AF">Afghanistan</option>
                                        <option value="AL">Albania</option>
                                        <option value="DZ">Algeria</option>
                                        <option value="AS">American Samoa</option>
                                        <option value="AD">Andorra</option>
                                        <option value="AO">Angola</option>
                                        <option value="AI">Anguilla</option>
                                        <option value="AQ">Antarctica</option>
                                        <option value="AG">Antigua and Barbuda</option>
                                        <option value="AR">Argentina</option>
                                        <option value="AM">Armenia</option>
                                        <option value="AW">Aruba</option>
                                        <option value="AU">Australia</option>
                                        <option value="AT">Austria</option>
                                        <option value="AZ">Azerbaijan</option>
                                        <option value="BS">Bahamas</option>
                                        <option value="BH">Bahrain</option>
                                        <option value="BD">Bangladesh</option>
                                        <option value="BB">Barbados</option>
                                        <option value="BY">Belarus</option>
                                        <option value="BE">Belgium</option>
                                        <option value="BZ">Belize</option>
                                        <option value="BJ">Benin</option>
                                        <option value="BM">Bermuda</option>
                                        <option value="BT">Bhutan</option>
                                        <option value="BO">Bolivia</option>
                                        <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                                        <option value="BA">Bosnia and Herzegovina</option>
                                        <option value="BW">Botswana</option>
                                        <option value="BV">Bouvet Island</option>
                                        <option value="BR">Brazil</option>
                                        <option value="IO">British Indian Ocean Territory</option>
                                        <option value="BN">Brunei Darussalam</option>
                                        <option value="BG">Bulgaria</option>
                                        <option value="BF">Burkina Faso</option>
                                        <option value="BI">Burundi</option>
                                        <option value="CV">Cabo Verde</option>
                                        <option value="KH">Cambodia</option>
                                        <option value="CM">Cameroon</option>
                                        <option value="CA">Canada</option>
                                        <option value="KY">Cayman Islands</option>
                                        <option value="CF">Central African Republic</option>
                                        <option value="TD">Chad</option>
                                        <option value="CL">Chile</option>
                                        <option value="CN">China</option>
                                        <option value="CX">Christmas Island</option>
                                        <option value="CC">Cocos (Keeling) Islands</option>
                                        <option value="CO">Colombia</option>
                                        <option value="KM">Comoros</option>
                                        <option value="CG">Congo</option>
                                        <option value="CD">Congo, Democratic Republic of the</option>
                                        <option value="CK">Cook Islands</option>
                                        <option value="CR">Costa Rica</option>
                                        <option value="CI">Côte d'Ivoire</option>
                                        <option value="HR">Croatia</option>
                                        <option value="CU">Cuba</option>
                                        <option value="CW">Curaçao</option>
                                        <option value="CY">Cyprus</option>
                                        <option value="CZ">Czech Republic</option>
                                        <option value="DK">Denmark</option>
                                        <option value="DJ">Djibouti</option>
                                        <option value="DM">Dominica</option>
                                        <option value="DO">Dominican Republic</option>
                                        <option value="EC">Ecuador</option>
                                        <option value="EG">Egypt</option>
                                        <option value="SV">El Salvador</option>
                                        <option value="GQ">Equatorial Guinea</option>
                                        <option value="ER">Eritrea</option>
                                        <option value="EE">Estonia</option>
                                        <option value="SZ">Eswatini</option>
                                        <option value="ET">Ethiopia</option>
                                        <option value="FK">Falkland Islands (Malvinas)</option>
                                        <option value="FO">Faroe Islands</option>
                                        <option value="FJ">Fiji</option>
                                        <option value="FI">Finland</option>
                                        <option value="FR">France</option>
                                        <option value="GF">French Guiana</option>
                                        <option value="PF">French Polynesia</option>
                                        <option value="TF">French Southern Territories</option>
                                        <option value="GA">Gabon</option>
                                        <option value="GM">Gambia</option>
                                        <option value="GE">Georgia</option>
                                        <option value="DE">Germany</option>
                                        <option value="GH">Ghana</option>
                                        <option value="GI">Gibraltar</option>
                                        <option value="GR">Greece</option>
                                        <option value="GL">Greenland</option>
                                        <option value="GD">Grenada</option>
                                        <option value="GP">Guadeloupe</option>
                                        <option value="GU">Guam</option>
                                        <option value="GT">Guatemala</option>
                                        <option value="GG">Guernsey</option>
                                        <option value="GN">Guinea</option>
                                        <option value="GW">Guinea-Bissau</option>
                                        <option value="GY">Guyana</option>
                                        <option value="HT">Haiti</option>
                                        <option value="HM">Heard Island and McDonald Islands</option>
                                        <option value="HN">Honduras</option>
                                        <option value="HK">Hong Kong</option>
                                        <option value="HU">Hungary</option>
                                        <option value="IS">Iceland</option>
                                        <option value="IN">India</option>
                                        <option value="ID">Indonesia</option>
                                        <option value="IR">Iran</option>
                                        <option value="IQ">Iraq</option>
                                        <option value="IE">Ireland</option>
                                        <option value="IM">Isle of Man</option>
                                        <option value="IL">Israel</option>
                                        <option value="IT">Italy</option>
                                        <option value="JM">Jamaica</option>
                                        <option value="JP">Japan</option>
                                        <option value="JE">Jersey</option>
                                        <option value="JO">Jordan</option>
                                        <option value="KZ">Kazakhstan</option>
                                        <option value="KE">Kenya</option>
                                        <option value="KI">Kiribati</option>
                                        <option value="KP">Korea, Democratic People's Republic of</option>
                                        <option value="KR">Korea, Republic of</option>
                                        <option value="KW">Kuwait</option>
                                        <option value="KG">Kyrgyzstan</option>
                                        <option value="LA">Lao People's Democratic Republic</option>
                                        <option value="LV">Latvia</option>
                                        <option value="LB">Lebanon</option>
                                        <option value="LS">Lesotho</option>
                                        <option value="LR">Liberia</option>
                                        <option value="LY">Libya</option>
                                        <option value="LI">Liechtenstein</option>
                                        <option value="LT">Lithuania</option>
                                        <option value="LU">Luxembourg</option>
                                        <option value="MO">Macao</option>
                                        <option value="MG">Madagascar</option>
                                        <option value="MW">Malawi</option>
                                        <option value="MY">Malaysia</option>
                                        <option value="MV">Maldives</option>
                                        <option value="ML">Mali</option>
                                        <option value="MT">Malta</option>
                                        <option value="MH">Marshall Islands</option>
                                        <option value="MQ">Martinique</option>
                                        <option value="MR">Mauritania</option>
                                        <option value="MU">Mauritius</option>
                                        <option value="YT">Mayotte</option>
                                        <option value="MX">Mexico</option>
                                        <option value="FM">Micronesia (Federated States of)</option>
                                        <option value="MD">Moldova</option>
                                        <option value="MC">Monaco</option>
                                        <option value="MN">Mongolia</option>
                                        <option value="ME">Montenegro</option>
                                        <option value="MS">Montserrat</option>
                                        <option value="MA">Morocco</option>
                                        <option value="MZ">Mozambique</option>
                                        <option value="MM">Myanmar</option>
                                        <option value="NA">Namibia</option>
                                        <option value="NR">Nauru</option>
                                        <option value="NP">Nepal</option>
                                        <option value="NL">Netherlands</option>
                                        <option value="NC">New Caledonia</option>
                                        <option value="NZ">New Zealand</option>
                                        <option value="NI">Nicaragua</option>
                                        <option value="NE">Niger</option>
                                        <option value="NG">Nigeria</option>
                                        <option value="NU">Niue</option>
                                        <option value="NF">Norfolk Island</option>
                                        <option value="MK">North Macedonia</option>
                                        <option value="MP">Northern Mariana Islands</option>
                                        <option value="NO">Norway</option>
                                        <option value="OM">Oman</option>
                                        <option value="PK">Pakistan</option>
                                        <option value="PW">Palau</option>
                                        <option value="PS">Palestine, State of</option>
                                        <option value="PA">Panama</option>
                                        <option value="PG">Papua New Guinea</option>
                                        <option value="PY">Paraguay</option>
                                        <option value="PE">Peru</option>
                                        <option value="PH">Philippines</option>
                                        <option value="PN">Pitcairn</option>
                                        <option value="PL">Poland</option>
                                        <option value="PT">Portugal</option>
                                        <option value="PR">Puerto Rico</option>
                                        <option value="QA">Qatar</option>
                                        <option value="RE">Réunion</option>
                                        <option value="RO">Romania</option>
                                        <option value="RU">Russian Federation</option>
                                        <option value="RW">Rwanda</option>
                                        <option value="BL">Saint Barthélemy</option>
                                        <option value="SH">Saint Helena, Ascension and Tristan da Cunha</option>
                                        <option value="KN">Saint Kitts and Nevis</option>
                                        <option value="LC">Saint Lucia</option>
                                        <option value="MF">Saint Martin (French part)</option>
                                        <option value="PM">Saint Pierre and Miquelon</option>
                                        <option value="VC">Saint Vincent and the Grenadines</option>
                                        <option value="WS">Samoa</option>
                                        <option value="SM">San Marino</option>
                                        <option value="ST">Sao Tome and Principe</option>
                                        <option value="SA">Saudi Arabia</option>
                                        <option value="SN">Senegal</option>
                                        <option value="RS">Serbia</option>
                                        <option value="SC">Seychelles</option>
                                        <option value="SL">Sierra Leone</option>
                                        <option value="SG">Singapore</option>
                                        <option value="SX">Sint Maarten (Dutch part)</option>
                                        <option value="SK">Slovakia</option>
                                        <option value="SI">Slovenia</option>
                                        <option value="SB">Solomon Islands</option>
                                        <option value="SO">Somalia</option>
                                        <option value="ZA">South Africa</option>
                                        <option value="GS">South Georgia and the South Sandwich Islands</option>
                                        <option value="SS">South Sudan</option>
                                        <option value="ES">Spain</option>
                                        <option value="LK">Sri Lanka</option>
                                        <option value="SD">Sudan</option>
                                        <option value="SR">Suriname</option>
                                        <option value="SJ">Svalbard and Jan Mayen</option>
                                        <option value="SE">Sweden</option>
                                        <option value="CH">Switzerland</option>
                                        <option value="SY">Syrian Arab Republic</option>
                                        <option value="TW">Taiwan</option>
                                        <option value="TJ">Tajikistan</option>
                                        <option value="TZ">Tanzania, United Republic of</option>
                                        <option value="TH">Thailand</option>
                                        <option value="TL">Timor-Leste</option>
                                        <option value="TG">Togo</option>
                                        <option value="TK">Tokelau</option>
                                        <option value="TO">Tonga</option>
                                        <option value="TT">Trinidad and Tobago</option>
                                        <option value="TN">Tunisia</option>
                                        <option value="TR">Turkey</option>
                                        <option value="TM">Turkmenistan</option>
                                        <option value="TC">Turks and Caicos Islands</option>
                                        <option value="TV">Tuvalu</option>
                                        <option value="UG">Uganda</option>
                                        <option value="UA">Ukraine</option>
                                        <option value="AE">United Arab Emirates</option>
                                        <option value="GB">United Kingdom</option>
                                        <option value="US">United States of America</option>
                                        <option value="UM">United States Minor Outlying Islands</option>
                                        <option value="UY">Uruguay</option>
                                        <option value="UZ">Uzbekistan</option>
                                        <option value="VU">Vanuatu</option>
                                        <option value="VE">Venezuela</option>
                                        <option value="VN">Viet Nam</option>
                                        <option value="VG">Virgin Islands (British)</option>
                                        <option value="VI">Virgin Islands (U.S.)</option>
                                        <option value="WF">Wallis and Futuna</option>
                                        <option value="EH">Western Sahara</option>
                                        <option value="YE">Yemen</option>
                                        <option value="ZM">Zambia</option>
                                        <option value="ZW">Zimbabwe</option>
                                    </select>
                                </div>


                            </div>

                            <div className="nombre input-group w-50 mb-5">
                                <input
                                    required
                                    type="text"
                                    className="input"
                                    value={direccion}
                                    onChange={(e) => setDireccion(e.target.value)}
                                />
                                <span className="highlight"></span>
                                <span className="bar"></span>
                                <label>Dirección</label>
                            </div>

                            <div className='d-flex justify-content-center'>
                                <button type="submit" className='btnSendForm btn-apoyo w-100 ' id='btnSendForm'>Enviar Formulario
                                </button>
                                <audio id="clickSound" src={soundFile} preload="auto"></audio>

                            </div>
                        </form>
                    </div>
                    <br />
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

export default Voluntario;