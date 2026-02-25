
// src/components/Footer.jsx

import React from 'react';


export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">

                {/* Logo / branding */}
                <div className="footer-logo-column">
                    <div className="footer-logo">
                        <img src="/LOGO.png" alt="WC Soluciones Eléctricas" height="55" />
                    </div>
                </div>

                {/* 3 columnas de información */}
                <div className="footer-column">
                    <h3>Nosotros</h3>
                    <p>
                        Somos especialistas en instalaciones eléctricas, cámaras de
                        seguridad, pozos a tierra y más. Brindamos soluciones rápidas,
                        seguras y garantizadas para hogares, negocios e industrias en Lima
                        y Callao.
                    </p>
                </div>

                <div className="footer-column">
                    <h3>Horario</h3>
                    <ul className="footer-list">
                        <li>Lima y Callao</li>
                        <li>Atención 24 h</li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h3>Contacto</h3>
                    <ul className="footer-list">
                        <li>
                            <i className="fas fa-phone" /> <span>tel: +51‑987‑854‑321</span>
                        </li>
                        <li>
                            <i className="fab fa-whatsapp" /> <span>Whatsapp: 987‑854‑321</span>
                        </li>
                        <li>
                            <i className="fas fa-envelope" /> <span>info@wcelectricas.com</span>
                        </li>
                    </ul>
                </div>

                {/* Enlaces rápidos */}
                <div className="footer-column">
                    <h3>Empresa</h3>
                    <ul className="footer-list">
                        <li><a href="#blog">Blog</a></li>
                        <li><a href="#servicios">Servicios</a></li>
                        <li><a href="#nosotros">Nosotros</a></li>
                        <li><a href="#contacto">Contáctenos</a></li>
                    </ul>
                </div>
            </div>

            {/* Línea divisoria y copyright */}
            <div className="footer-divider" />
            <div className="footer-bottom">
                <p className="copyright">
                    © {new Date().getFullYear()} WC Soluciones Eléctricas E.I.R.L. Todos los
                    derechos reservados.
                </p>

                {/* Redes sociales (puedes añadir o quitar) */}
                <div className="social-links">
                    <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f" /></a>
                    <a href="#" aria-label="Google"><i className="fab fa-google" /></a>
                    <a href="#" aria-label="WhatsApp"><i className="fab fa-whatsapp" /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
