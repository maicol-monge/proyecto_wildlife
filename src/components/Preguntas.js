import React, { useState } from 'react';
import Navbar from './Navbar';

function Preguntas() {
    // Estado para almacenar el texto de búsqueda
    const [searchText, setSearchText] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);

    // Lista de preguntas con su categoría y contenido
    const faqItems = [
        {
            category: 'General',
            questions: [
                { title: '¿Qué es Protect Our Wildlife (POW)?', content: 'Protect Our Wildlife (POW) es una organización no gubernamental dedicada a la conservación de la vida silvestre y sus hábitats en todo el mundo. Trabajamos para proteger especies en peligro, restaurar ecosistemas, y educar a las comunidades sobre la importancia de la biodiversidad.' },
                { title: '¿Dónde opera POW?', content: 'POW tiene proyectos activos en varios continentes, incluyendo América del Norte, América del Sur, África, Asia y Oceanía. Nos asociamos con comunidades locales, gobiernos y otras organizaciones para maximizar nuestro impacto global.' }
            ]
        },
        {
            category: 'Donaciones',
            questions: [
                { title: '¿Cómo puedo hacer una donación a POW?', content: 'Puedes hacer una donación directamente a través de nuestro sitio web en la sección "Donar". Aceptamos varias formas de pago, incluidas tarjetas de crédito, PayPal y transferencias bancarias.' },
                { title: '¿Mi donación es deducible de impuestos?', content: 'Sí, todas las donaciones realizadas a POW son deducibles de impuestos en la mayoría de los países. Después de realizar tu donación, recibirás un recibo que podrás utilizar para tus impuestos.' },
                { title: '¿Puedo elegir a qué proyecto se destinará mi donación?', content: 'Sí, puedes optar por donar a un proyecto específico o permitir que POW asigne los fondos a la iniciativa que más lo necesite en ese momento.' }
            ]
        },
        {
            category: 'Voluntariado',
            questions: [
                { title: '¿Cómo puedo convertirme en voluntario de POW?', content: 'Puedes unirte a nuestro equipo de voluntarios completando el formulario de registro en la sección "Voluntarios" de nuestro sitio web. Nos pondremos en contacto contigo para discutir las oportunidades disponibles.' },
                { title: '¿Necesito experiencia previa para ser voluntario?', content: 'No es necesario tener experiencia previa. Ofrecemos formación y orientación para que todos nuestros voluntarios puedan contribuir de manera efectiva, independientemente de su nivel de experiencia.' },
                { title: '¿Hay oportunidades de voluntariado en el extranjero?', content: 'Sí, POW ofrece oportunidades de voluntariado tanto a nivel local como internacional. Puedes elegir participar en proyectos en diferentes partes del mundo, dependiendo de tus intereses y disponibilidad.' }
            ]
        },
        {
            category: 'Proyectos y Conservación',
            questions: [
                { title: '¿En qué tipos de proyectos trabaja POW?', content: 'POW se enfoca en una variedad de proyectos, incluyendo la protección de especies en peligro, restauración de hábitats, reforestación, y programas de educación ambiental. Cada proyecto está diseñado para abordar las necesidades específicas de la vida silvestre en diferentes regiones.' },
                { title: '¿Cómo selecciona POW los proyectos en los que trabaja?', content: 'Seleccionamos nuestros proyectos basándonos en la urgencia de las amenazas a la vida silvestre, el potencial de impacto, y la posibilidad de colaborar con socios locales. Evaluamos cuidadosamente cada oportunidad para asegurarnos de que nuestros recursos se utilicen de manera efectiva.' }
            ]
        }
    ];

    // Función para manejar cambios en el campo de búsqueda
    const handleSearchChange = (event) => {
        const value = event.target.value.toLowerCase();
        setSearchText(value);

        // Filtrar preguntas basadas en el texto ingresado
        const filtered = faqItems.map(item => ({
            ...item,
            questions: item.questions.filter(q => 
                q.title.toLowerCase().includes(value) || q.content.toLowerCase().includes(value)
            )
        })).filter(item => item.questions.length > 0);

        setFilteredItems(filtered);
    };

    // Mostrar los resultados filtrados o todas las preguntas si no hay búsqueda
    const itemsToDisplay = searchText ? filteredItems : faqItems;

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
                            value={searchText}
                            onChange={handleSearchChange}
                        />
                        <button className="btn btn-outline-success" type="button" id="button-addon2">
                            Buscar
                        </button>
                    </div>
                </div>
            </section>

            <section className=''>
                <div className='container custom-cursor'>
                    {itemsToDisplay.map((item, index) => (
                        <div key={index}>
                            <div className='fondoTituloAcordion text-light text-start'>
                                <h1 className='p-3'>{item.category}</h1>
                            </div>
                            <div className="accordion pb-4 custom-accordion" id={`accordionExample${index}`}>
                                {item.questions.map((q, qIndex) => (
                                    <div className="accordion-item" key={qIndex}>
                                        <h2 className="accordion-header">
                                            <button
                                                className="accordion-button custom-button texto-verde"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target={`#collapse${index}${qIndex}`}
                                                aria-expanded="true"
                                                aria-controls={`collapse${index}${qIndex}`}
                                            >
                                                {q.title}
                                            </button>
                                        </h2>
                                        <div
                                            id={`collapse${index}${qIndex}`}
                                            className="accordion-collapse texto-verde collapse show"
                                            data-bs-parent={`#accordionExample${index}`}
                                        >
                                            <div className="accordion-body">
                                                {q.content}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Preguntas;
