import React from 'react';

const WhatsAppBtn = () => {
  return (
    // Contenedor principal que agrupa la silueta y el botón
    <div className="whatsapp-cta-container">

      {/* Grupo de la silueta y el texto */}
      <div className="electrician-cta">
        {/* Burbuja de texto "Consulta aquí" */}

        {/* Silueta del electricista (SVG inline para mejor rendimiento) */}

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