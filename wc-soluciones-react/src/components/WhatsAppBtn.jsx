import React from 'react';

const WhatsAppBtn = () => {
  return (
    // Contenedor principal que agrupa la silueta y el botón
    <div className="whatsapp-cta-container">
      
      {/* Grupo de la silueta y el texto */}
      <div className="electrician-cta">
        {/* Burbuja de texto "Consulta aquí" */}
        <div className="cta-bubble">
          <span>Consulta aquí</span>
        </div>
        
        {/* Silueta del electricista (SVG inline para mejor rendimiento) */}
        <svg className="electrician-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" xmlSpace="preserve">
          <g>
            <path fill="#fbc02d" d="M256,0C114.6,0,0,114.6,0,256s114.6,256,256,256s256-114.6,256-256S397.4,0,256,0z M256,464
              c-114.7,0-208-93.3-208-208S141.3,48,256,48s208,93.3,208,208S370.7,464,256,464z"/>
            <path fill="#111" d="M368.5,240.5c-4.1-5.5-10.8-9.3-17.5-10.8c-1.5-0.3-3-0.5-4.5-0.5c-1.5,0-3,0.2-4.5,0.5
              c-6.7,1.5-13.4,5.3-17.5,10.8c-4.1,5.5-6.2,12.3-6.2,19.5c0,7.2,2.1,14,6.2,19.5c4.1,5.5,10.8,9.3,17.5,10.8
              c1.5,0.3,3,0.5,4.5,0.5c1.5,0,3-0.2,4.5-0.5c6.7-1.5,13.4-5.3,17.5-10.8c4.1-5.5,6.2-12.3,6.2-19.5
              C374.7,252.8,372.6,246,368.5,240.5z M346.5,277.5c-4.1,0-7.5-3.4-7.5-7.5s3.4-7.5,7.5-7.5s7.5,3.4,7.5,7.5
              S350.6,277.5,346.5,277.5z"/>
            <path fill="#111" d="M256,144c-35.3,0-64,28.7-64,64c0,23.6,12.9,44.3,32,55.5v40.5h64v-40.5c19.1-11.2,32-31.9,32-55.5
              C320,172.7,291.3,144,256,144z M256,248c-22.1,0-40-17.9-40-40s17.9-40,40-40s40,17.9,40,40S278.1,248,256,248z"/>
            <path fill="#111" d="M176,336c-8.8,0-16,7.2-16,16v80c0,8.8,7.2,16,16,16h160c8.8,0,16-7.2,16-16v-80c0-8.8-7.2-16-16-16H176z"/>
          </g>
        </svg>
      </div>

      {/* El botón de WhatsApp existente */}
      <a 
        href="https://wa.me/51934574031" 
        className="whatsapp-float" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
      >
        <i className="fa-brands fa-whatsapp"></i>
      </a>
    </div>
  );
};

export default WhatsAppBtn;