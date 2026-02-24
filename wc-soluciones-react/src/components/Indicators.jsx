import React, { useEffect, useRef } from 'react';

const Indicators = () => {
  const sectionRef = useRef(null);

  const stats = [
    { id: 1, icon: 'fa-regular fa-face-smile', num: '1353', text: 'CLIENTES SATISFECHOS' },
    { id: 2, icon: 'fa-solid fa-briefcase', num: '+15', text: 'AÑOS DE EXPERIENCIA' },
    { id: 3, icon: 'fa-regular fa-circle-check', num: '850', text: 'PROYECTOS ENTREGADOS' },
    { id: 4, icon: 'fa-solid fa-bolt', num: '24/7', text: 'ATENCIÓN DE EMERGENCIAS' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const section = sectionRef.current;
        if (!section) return;

        // Efecto cascada de aparición (incluyendo el título)
        section.querySelectorAll('.anim-card').forEach((el, i) => {
          setTimeout(() => el.classList.add('visible'), i * 150);
        });
        
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.15 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-5" id="indicadores" ref={sectionRef} style={{ backgroundColor: 'transparent' }}>
      <div className="container">
        
        {/* NUEVO TÍTULO SUPERIOR */}
        <div className="text-center mb-5 anim-card">
          <h2 className="text-white m-0" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '4rem', letterSpacing: '2px' }}>
            NUESTRA <span style={{ color: '#fbc02d' }}>TRAYECTORIA</span>
          </h2>
          <p style={{ color: '#aaa', fontSize: '1rem', marginTop: '5px' }}>
            Respaldo y confianza en cada proyecto eléctrico.
          </p>
        </div>

        {/* Tarjetas de Indicadores */}
        <div className="row g-4 justify-content-center">
          {stats.map((stat) => (
            <div key={stat.id} className="col-lg-3 col-md-6 col-sm-6 anim-card">
              <div className="stat-card p-4 text-center h-100">
                <div className="icon-wrapper">
                  <i className={stat.icon} style={{ fontSize: '2rem', color: '#fbc02d' }}></i>
                </div>
                <h3 className="m-0 text-white" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '3.8rem', letterSpacing: '2px' }}>
                  {stat.num}
                </h3>
                <p className="m-0 fw-bold" style={{ color: '#888', fontSize: '0.8rem', letterSpacing: '1px' }}>
                  {stat.text}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Indicators;