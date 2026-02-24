import React from 'react';

const Hero = () => {
  return (
    <section className="hero-section" id="inicio">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <div className="hero-content">
              
              <div className="hero-brand-container">
                <span className="company-name">WC SOLUCIONES ELÉCTRICAS E.I.R.L.</span>
              </div>
              
              <h1 className="hero-title" id="hero-title">
                Contratistas en <span className="highlight">Instalaciones</span> y Mantenimiento Eléctrico
              </h1>
              
              <p className="hero-emergency">
                <i className="bi bi-gear-fill text-warning" aria-hidden="true"></i> Ejecución de <span className="highlight" style={{ fontWeight: 800 }}>Servicios por Contrato</span> y Proyectos
              </p>
              
              <p className="hero-emergency">
                Mantenimiento Preventivo y Correctivo | Tableros e Instalaciones Industriales
              </p>
              
              <div className="hero-phone">
                <span>ATENCIÓN EMPRESARIAL:</span>
                <a href="tel:+51934574031">934 574 031</a>
              </div>
              
              <div className="d-flex flex-wrap gap-3">
                <a href="#contacto" className="btn btn-shine" role="button">
                  <i className="bi bi-file-text" aria-hidden="true"></i> SOLICITAR PRESUPUESTO
                </a>
                <a href="#servicios" className="btn btn-outline-light d-flex align-items-center px-4" style={{ borderWidth: '2px', fontWeight: 700 }}>
                  VER CAPACIDAD OPERATIVA
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;