import React, { useState } from 'react';

const FAQ = () => {
  const [preguntaAbierta, setPreguntaAbierta] = useState(null);

  // Tus preguntas exactas con la estructura de tu HTML original
  const listaPreguntas = [
    {
      id: 1,
      categoria: "Reparaciones Eléctricas",
      icono: "fa-solid fa-screwdriver-wrench",
      pregunta: "¿Qué tipo de fallas eléctricas reparan?",
      respuesta: "Reparamos todo tipo de fallas eléctricas: cortocircuitos, sobrecargas, problemas en tomacorrientes e interruptores, fallas en cableado, tableros que se disparan constantemente, luces que parpadean, caídas de tensión, entre otros. Realizamos un diagnóstico completo para identificar la causa raíz del problema y ofrecer una solución definitiva."
    },
    {
      id: 2,
      categoria: "Pozos a Tierra",
      icono: "fa-solid fa-plug-circle-bolt",
      pregunta: "¿Es obligatorio tener pozo a tierra en mi vivienda/negocio?",
      respuesta: <>Sí, el <span className="emphasis-text">Código Nacional de Electricidad</span> exige que toda instalación eléctrica cuente con sistema de puesta a tierra. Es fundamental para proteger a las personas contra descargas eléctricas, proteger equipos electrónicos de sobretensiones y garantizar el correcto funcionamiento de interruptores diferenciales. Su ausencia puede ser causal de multas en inspecciones técnicas.</>
    },
    {
      id: 3,
      categoria: "Instalación de Luminarias",
      icono: "fa-solid fa-lightbulb",
      pregunta: "¿Incluyen las luminarias o solo hacen la instalación?",
      respuesta: "Ofrecemos ambas opciones: podemos instalar luminarias que usted ya tenga, o proveer e instalar las luminarias completas según sus necesidades y presupuesto. Trabajamos con marcas reconocidas y le asesoramos para elegir las mejores opciones en relación calidad-precio para su proyecto específico."
    },
    {
      id: 4,
      categoria: "Tableros Eléctricos",
      icono: "fa-solid fa-bolt",
      pregunta: "¿Brindan mantenimiento de tableros eléctricos?",
      respuesta: <>Sí, el <span className="emphasis-text">mantenimiento preventivo de tableros</span> incluye: inspección visual de componentes, limpieza interna, ajuste de conexiones, medición de corrientes por circuito, verificación de interruptores termomagnéticos y diferenciales, termografía para detectar puntos calientes, identificación y etiquetado de circuitos. Esto previene fallas y extiende la vida útil del sistema.</>
    },
    {
      id: 5,
      categoria: "Alarmas Contra Incendios",
      icono: "fa-solid fa-fire-extinguisher",
      pregunta: "¿Las alarmas cumplen con normativas de seguridad?",
      respuesta: <>Sí, todos nuestros sistemas cumplen con la <span className="emphasis-text">Norma Técnica Peruana (NTP) 350.043</span> y el Reglamento Nacional de Edificaciones. Utilizamos equipos certificados por laboratorios internacionales (UL, FM, CE). La instalación es realizada según estándares NFPA (National Fire Protection Association) y entregamos documentación técnica completa.</>
    },
    {
      id: 6,
      categoria: "Cámaras de Seguridad",
      icono: "fa-solid fa-video",
      pregunta: "¿El sistema permite ver las cámaras desde el celular?",
      respuesta: <>Sí, configuramos <span className="emphasis-text">acceso remoto</span> desde smartphones (Android/iOS), tablets y computadoras. Puede ver las cámaras en tiempo real, reproducir grabaciones, recibir notificaciones de movimiento, y gestionar el sistema desde cualquier lugar con internet. Incluimos capacitación en el uso de las aplicaciones móviles.</>
    },
    {
      id: 7,
      categoria: "Red de Datos",
      icono: "fa-solid fa-network-wired",
      pregunta: "¿Realizan cableado estructurado para oficinas?",
      respuesta: <>Sí, ejecutamos proyectos de <span className="emphasis-text">cableado estructurado categoría 6 y 6A</span> para redes de datos. Incluye: tendido de cable UTP/STP, instalación de racks, patch panels, certificación de puntos de red, canalización ordenada, etiquetado, documentación técnica y planos as-built. Diseñado para soportar redes de alta velocidad (1 Gbps / 10 Gbps).</>
    }
  ];

  const toggleAcordeon = (id) => {
    setPreguntaAbierta(preguntaAbierta === id ? null : id);
  };

  return (
    <section className="container mb-5" id="faq">
      {/* Usamos tu grilla exacta de dos columnas */}
      <div className="faq-layout-grid">
        
        {/* Columna Izquierda: Título Fijo */}
        <div className="sidebar-heading">
          <h1>Preguntas Frecuentes</h1>
          <p>Las preguntas más frecuentes sobre nuestros servicios eléctricos y soluciones profesionales.</p>
        </div>

        {/* Columna Derecha: El Acordeón */}
        <div className="content-area">
          
          {listaPreguntas.map((item) => {
            const isOpen = preguntaAbierta === item.id;

            return (
              <div key={item.id} className="topic-section">
                
                {/* El Banner con el ícono y la categoría */}
                <div className="topic-banner">
                  <i className={`${item.icono} banner-icon`}></i>
                  <span>{item.categoria}</span>
                </div>

                <div className="accordion-item">
                  
                  {/* El botón de abrir/cerrar (inyecta tu clase 'is-open' dinámicamente) */}
                  <div 
                    className={`accordion-trigger ${isOpen ? 'is-open' : ''}`}
                    onClick={() => toggleAcordeon(item.id)}
                  >
                    <span className="trigger-label">{item.pregunta}</span>
                    <span className="chevron-icon">▼</span>
                  </div>
                  
                  {/* El cuerpo de la respuesta (inyecta tu clase 'is-open' para animar el max-height) */}
                  <div className={`accordion-body ${isOpen ? 'is-open' : ''}`}>
                    <p>{item.respuesta}</p>
                  </div>

                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default FAQ;