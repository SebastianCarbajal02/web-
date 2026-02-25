import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  // Creamos una referencia a la sección para que la animación sepa cuándo ejecutarse
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        const section = sectionRef.current;
        if (!section) return;

        // La misma lógica de tiempos que tenías en tu script original
        setTimeout(() => section.querySelector('#pill')?.classList.add('visible'), 0);
        setTimeout(() => section.querySelector('#t1')?.classList.add('visible'), 200);
        setTimeout(() => section.querySelector('#t2')?.classList.add('visible'), 400);
        setTimeout(() => section.querySelector('#t3')?.classList.add('visible'), 350);
        setTimeout(() => section.querySelector('#sub')?.classList.add('visible'), 650);

        section.querySelectorAll('.wcs-tarjeta').forEach((c, i) => {
          setTimeout(() => c.classList.add('visible'), 850 + i * 100);
        });

        observer.unobserve(entry.target);
      });
    }, { threshold: 0.1 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect(); // Limpiamos el observador al salir
  }, []);

  return (
    <section className="wcs-seccion" ref={sectionRef} id="servicios">
      <div className="wcs-contenedor">

        {/* ENCABEZADO */}
        <div className="wcs-header">
          <div className="wcs-pill" id="pill">
            <div className="wcs-pill-icono"><i className="fas fa-bolt"></i></div>
            <span className="wcs-pill-texto">Nuestros Servicios</span>
          </div>

          <div className="wcs-titulo-bloque">
            <div className="wcs-titulo-grande" id="t1">SOLUCIONES</div>
            <div className="wcs-titulo-medio" id="t2">
              <div className="wcs-linea-deco"></div>
              <span className="wcs-titulo-acento">ELÉCTRICAS</span>
              <div className="wcs-linea-deco derecha"></div>
            </div>
            <div className="wcs-titulo-bajo" id="t3">PROFESIONALES</div>
          </div>

          <p className="wcs-subtitulo" id="sub">
            Expertos en instalaciones y mantenimiento eléctrico con tecnología de punta.
          </p>
        </div>

        {/* CARDS */}
        <div className="wcs-grilla">
          <div className="wcs-tarjeta">
            <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80" alt="Reparaciones Eléctricas" />
            <div className="wcs-contenido">
              <div className="wcs-icono"><i className="fas fa-bolt"></i></div>
              <div className="wcs-nombre">Reparaciones Eléctricas</div>
              <p className="wcs-descripcion">Diagnóstico y reparación de fallas eléctricas en instalaciones residenciales, comerciales e industriales con garantía.</p>
              <Link to="/servicio/reparaciones-electricas" className="wcs-enlace">Leer más <i className="fas fa-chevron-right"></i></Link>            </div>
          </div>

          <div className="wcs-tarjeta">
            <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80" alt="Pozos a Tierra" />
            <div className="wcs-contenido">
              <div className="wcs-icono"><i className="fas fa-circle-nodes"></i></div>
              <div className="wcs-nombre">Pozos a Tierra</div>
              <p className="wcs-descripcion">Instalación profesional de sistemas de puesta a tierra para protección de equipos y seguridad de personas.</p>
              <Link to="/servicio/pozos-a-tierra" className="wcs-enlace">Leer más <i className="fas fa-chevron-right"></i></Link>
            </div>
          </div>

          <div className="wcs-tarjeta">
            <img src="https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=600&q=80" alt="Instalación de Luminarias" />
            <div className="wcs-contenido">
              <div className="wcs-icono"><i className="fas fa-lightbulb"></i></div>
              <div className="wcs-nombre">Instalación de Luminarias</div>
              <p className="wcs-descripcion">Diseño e instalación de sistemas de iluminación LED, decorativa y funcional para espacios interiores y exteriores.</p>
              <Link to="/servicio/instalacion-luminarias" className="wcs-enlace">Leer más <i className="fas fa-chevron-right"></i></Link>
            </div>
          </div>

          <div className="wcs-tarjeta">
            <img src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=600&q=80" alt="Tableros Eléctricos" />
            <div className="wcs-contenido">
              <div className="wcs-icono"><i className="fas fa-table-cells"></i></div>
              <div className="wcs-nombre">Tableros Eléctricos</div>
              <p className="wcs-descripcion">Diseño, armado e instalación de tableros eléctricos de distribución y control con componentes certificados.</p>
              <Link to="/servicio/tableros-electricos" className="wcs-enlace">Leer más <i className="fas fa-chevron-right"></i></Link>
            </div>
          </div>

          <div className="wcs-tarjeta">
            <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80" alt="Alarmas Incendios" />
            <div className="wcs-contenido">
              <div className="wcs-icono"><i className="fas fa-fire-extinguisher"></i></div>
              <div className="wcs-nombre">Alarmas Incendios</div>
              <p className="wcs-descripcion">Instalación de sistemas de detección y alarma contra incendios cumpliendo normativas de seguridad vigentes.</p>
              <Link to="/servicio/alarmas-incendios" className="wcs-enlace">Leer más <i className="fas fa-chevron-right"></i></Link>
            </div>
          </div>

          <div className="wcs-tarjeta">
            <img src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&q=80" alt="Cámaras Seguridad" />
            <div className="wcs-contenido">
              <div className="wcs-icono"><i className="fas fa-video"></i></div>
              <div className="wcs-nombre">Cámaras Seguridad</div>
              <p className="wcs-descripcion">Instalación de sistemas de videovigilancia HD con monitoreo remoto para máxima seguridad en tu propiedad.</p>
              <Link to="/servicio/camaras-seguridad" className="wcs-enlace">Leer más <i className="fas fa-chevron-right"></i></Link>
            </div>
          </div>
          <div className="wcs-tarjeta">
            <img src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&q=80" alt="Cámaras Seguridad" />
            <div className="wcs-contenido">
              <div className="wcs-icono"><i className="fa-solid fa-ethernet"></i></div>
              <div className="wcs-nombre">Red de Datos</div>
              <p className="wcs-descripcion">Proyectos de cableado estructurado, instalación de racks y puntos de red para conexiones de alta velocidad en oficinas y empresas.</p>
              <Link to="/servicio/red-de-datos" className="wcs-enlace">Leer más <i className="fas fa-chevron-right"></i></Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;