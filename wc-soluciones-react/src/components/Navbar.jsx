import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-black-custom" role="navigation">
      <div className="container">
        <a className="navbar-brand" href="#inicio" title="WC Soluciones Eléctricas">
          <img src="/LOGO.png" alt="Logo WC Soluciones Eléctricas" height="55" width="auto" />
        </a>

        <button className="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Abrir menú">
          <i className="bi bi-list" style={{ fontSize: '2.5rem', color: '#fbc02d' }} aria-hidden="true"></i>
        </button>

        <div className="offcanvas offcanvas-end bg-black-custom" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menú</h5>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Cerrar"></button>
          </div>

          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-center flex-grow-1 pe-3 text-center">
              <li className="nav-item">
                <a className="nav-link active-link" href="#inicio">INICIO</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#servicios" role="button" data-bs-toggle="dropdown" aria-expanded="false">SERVICIOS</a>
                <ul className="dropdown-menu dropdown-menu-custom">
                  <li><a className="dropdown-item" href="#reparaciones-electricas"><i className="bi bi-tools"></i> Reparaciones Eléctricas</a></li>
                  <li><a className="dropdown-item" href="#pozos-a-tierra"><i className="bi bi-globe"></i> Pozos a Tierra</a></li>
                  <li><a className="dropdown-item" href="#luminarias"><i className="bi bi-lightbulb"></i> Instalación de Luminarias</a></li>
                  <li><a className="dropdown-item" href="#tableros-electricos"><i className="bi bi-lightning-charge"></i> Tableros Eléctricos</a></li>
                  <li><a className="dropdown-item" href="#alarmas-incendios"><i className="bi bi-shield-exclamation"></i> Alarmas Incendios</a></li>
                  <li><a className="dropdown-item" href="#camaras-seguridad"><i className="bi bi-camera-video"></i> Cámaras Seguridad</a></li>
                  <li><a className="dropdown-item" href="#red-datos"><i className="bi bi-diagram-3"></i> Red de Datos</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">NOSOTROS</a>
                <ul className="dropdown-menu dropdown-menu-custom">
                  <li><a className="dropdown-item" href="#sobre-nosotros"><i className="bi bi-info-circle"></i> Sobre Nosotros</a></li>
                  <li><a className="dropdown-item" href="#mision"><i className="bi bi-target"></i> Misión y Visión</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#blog">BLOG</a>
              </li>
            </ul>

            <div className="d-flex justify-content-center align-items-center mt-4 mt-lg-0">
              <a href="#contacto" className="btn-shine" role="button">CONTÁCTENOS</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;