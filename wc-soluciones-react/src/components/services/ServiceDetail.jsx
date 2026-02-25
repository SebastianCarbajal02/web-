import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ServiceDetail.css';

const infoServicios = {
    'reparaciones-electricas': {
        titulo: 'Reparaciones Eléctricas',
        numero: '01',
        icono: 'fa-bolt',
        tag: 'Diagnóstico y Reparación',
        descripcion: 'Solucionamos todo tipo de fallas eléctricas en residencias y empresas de manera rápida y segura. Nuestro equipo con más de 10 años de experiencia realiza un diagnóstico preciso para identificar cortocircuitos, fugas de energía o sobrecargas, garantizando la operatividad de sus instalaciones.',
        beneficios: [
            { icono: 'fa-clock', titulo: 'Atención Rápida', desc: 'Respuesta en menos de 2 horas para emergencias.' },
            { icono: 'fa-magnifying-glass', titulo: 'Diagnóstico Preciso', desc: 'Detección con equipos de medición de alta tecnología.' },
            { icono: 'fa-shield-halved', titulo: 'Garantía por Escrito', desc: 'Todos nuestros trabajos tienen garantía documentada.' },
        ],
        stats: [{ valor: '+500', label: 'Servicios' }, { valor: '10+', label: 'Años de exp.' }, { valor: '98%', label: 'Satisfacción' }],
        proceso: [
            { num: '01', texto: 'Inspección y diagnóstico de la instalación' },
            { num: '02', texto: 'Presupuesto sin compromiso' },
            { num: '03', texto: 'Ejecución del trabajo con materiales certificados' },
            { num: '04', texto: 'Pruebas de funcionamiento y entrega de garantía' },
        ],
        imagenes: [
            'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=900&q=85',
            'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=900&q=85',
            'https://images.unsplash.com/photo-1544724569-5f546fd6f2b6?w=900&q=85',
        ],
    },
    'pozos-a-tierra': {
        titulo: 'Pozos a Tierra',
        numero: '02',
        icono: 'fa-share-nodes',
        tag: 'Seguridad y Certificación',
        descripcion: 'Instalación y mantenimiento de sistemas de puesta a tierra. Son esenciales para proteger la vida de los usuarios y garantizar el correcto funcionamiento de equipos electrónicos y maquinarias industriales, cumpliendo con las normas INDECI y el Código Nacional de Electricidad.',
        beneficios: [
            { icono: 'fa-file-signature', titulo: 'Certificación de Ingeniero', desc: 'Firmado por ingeniero colegiado habilitado.' },
            { icono: 'fa-gauge-high', titulo: 'Medición Calibrada', desc: 'Usamos telurómetro calibrado para garantizar resistencia óptima.' },
            { icono: 'fa-wrench', titulo: 'Mantenimiento Incluido', desc: 'Revisión preventiva anual sin costo adicional.' },
        ],
        stats: [{ valor: '+200', label: 'Instalaciones' }, { valor: '<2Ω', label: 'Resistencia' }, { valor: '100%', label: 'Certificados' }],
        proceso: [
            { num: '01', texto: 'Estudio del terreno y medición de resistividad' },
            { num: '02', texto: 'Diseño del sistema de puesta a tierra' },
            { num: '03', texto: 'Excavación, instalación de electrodo y relleno' },
            { num: '04', texto: 'Medición final, certificación y entrega de informe' },
        ],
        imagenes: [
            'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=900&q=85',
            'https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?w=900&q=85',
            'https://images.unsplash.com/photo-1622322896683-1678853f66ce?w=900&q=85',
        ],
    },
    'instalacion-luminarias': {
        titulo: 'Instalación de Luminarias',
        numero: '03',
        icono: 'fa-lightbulb',
        tag: 'Eficiencia Energética',
        descripcion: 'Diseñamos e instalamos sistemas de iluminación eficientes para oficinas, almacenes y residencias. Optimizamos el consumo energético mediante tecnología LED y sistemas de control automatizados, consiguiendo ahorros de hasta el 70% en tu factura de luz.',
        beneficios: [
            { icono: 'fa-leaf', titulo: 'Ahorro Energético', desc: 'Hasta 70% de reducción en el consumo eléctrico.' },
            { icono: 'fa-ruler-combined', titulo: 'Estudio Luminotécnico', desc: 'Cálculo fotométrico previo para la solución óptima.' },
            { icono: 'fa-star', titulo: 'Diseño Moderno', desc: 'Instalaciones estéticas con tecnología LED de última generación.' },
        ],
        stats: [{ valor: '70%', label: 'Ahorro' }, { valor: '+300', label: 'Proyectos' }, { valor: '5 años', label: 'Garantía LED' }],
        proceso: [
            { num: '01', texto: 'Levantamiento de planos y análisis lumínico' },
            { num: '02', texto: 'Selección de luminarias y diseño del sistema' },
            { num: '03', texto: 'Instalación eléctrica y montaje de artefactos' },
            { num: '04', texto: 'Medición de luxes y ajuste según normativa' },
        ],
        imagenes: [
            'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=900&q=85',
            'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=900&q=85',
            'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=900&q=85',
        ],
    },
    'tableros-electricos': {
        titulo: 'Tableros Eléctricos',
        numero: '04',
        icono: 'fa-table-cells',
        tag: 'Distribución y Control',
        descripcion: 'Diseño, armado e instalación de tableros eléctricos de distribución y control con componentes certificados de las marcas líderes del mercado. Realizamos mantenimiento preventivo y correctivo para evitar sobrecalentamientos y costosas paradas de planta.',
        beneficios: [
            { icono: 'fa-certificate', titulo: 'Componentes Certificados', desc: 'Trabajamos con Schneider Electric, ABB y Siemens.' },
            { icono: 'fa-person-digging', titulo: 'Taller Propio', desc: 'Armado y acabado profesional en nuestras propias instalaciones.' },
            { icono: 'fa-book', titulo: 'Cumplimiento Normativo', desc: 'Diseño según CNE, NTP y estándares IEC/NEMA.' },
        ],
        stats: [{ valor: '+150', label: 'Tableros' }, { valor: '3 marcas', label: 'Top tier' }, { valor: '2 años', label: 'Garantía' }],
        proceso: [
            { num: '01', texto: 'Cálculo de cargas y dimensionamiento' },
            { num: '02', texto: 'Diseño del diagrama unifilar y selección de componentes' },
            { num: '03', texto: 'Armado, cableado y etiquetado en taller' },
            { num: '04', texto: 'Instalación en campo, pruebas y puesta en marcha' },
        ],
        imagenes: [
            'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=900&q=85',
            'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=900&q=85',
            'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=900&q=85',
        ],
    },
    'alarmas-incendios': {
        titulo: 'Alarmas Contra Incendios',
        numero: '05',
        icono: 'fa-fire-extinguisher',
        tag: 'NTP y NFPA 72',
        descripcion: 'Instalación de sistemas de detección y alarma contra incendios cumpliendo las normativas NTP 833.034 y NFPA 72. Proteja su inversión y a su personal con tecnología de detección temprana y respuesta automática inmediata, conectada a una central de monitoreo 24/7.',
        beneficios: [
            { icono: 'fa-fire', titulo: 'Detección Temprana', desc: 'Sensores de humo, temperatura y gas de alta sensibilidad.' },
            { icono: 'fa-layer-group', titulo: 'Central Inteligente', desc: 'Paneles direccionables que identifican la zona exacta del siniestro.' },
            { icono: 'fa-file-circle-check', titulo: 'Certificado INDECI', desc: 'Documentación completa para cumplimiento con INDECI/SUCAMEC.' },
        ],
        stats: [{ valor: '+80', label: 'Proyectos' }, { valor: '24/7', label: 'Monitoreo' }, { valor: 'NTP/NFPA', label: 'Normativa' }],
        proceso: [
            { num: '01', texto: 'Inspección del área y diseño del sistema zonificado' },
            { num: '02', texto: 'Instalación de detectores, sirenas y panel central' },
            { num: '03', texto: 'Cableado de seguridad y conexión a red principal' },
            { num: '04', texto: 'Pruebas, capacitación al personal y certificación' },
        ],
        imagenes: [
            'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=85',
            'https://images.unsplash.com/photo-1610491462722-166258ed27f6?w=900&q=85',
            'https://images.unsplash.com/photo-1507693991206-f1311029de9f?w=900&q=85',
        ],
    },
    'camaras-seguridad': {
        titulo: 'Cámaras de Seguridad',
        numero: '06',
        icono: 'fa-video',
        tag: 'Videovigilancia HD / 4K',
        descripcion: 'Instalación profesional de sistemas de videovigilancia Full HD y 4K con acceso remoto en tiempo real desde tu smartphone o computadora. Incluye configuración de almacenamiento en la nube y disco duro local, visión nocturna infrarroja y análisis de video inteligente.',
        beneficios: [
            { icono: 'fa-mobile-screen', titulo: 'Acceso Remoto', desc: 'Visualización en tiempo real desde cualquier dispositivo.' },
            { icono: 'fa-tv', titulo: 'Alta Resolución', desc: 'Cámaras Full HD 1080p y 4K para máximo detalle de imagen.' },
            { icono: 'fa-moon', titulo: 'Visión Nocturna', desc: 'Tecnología infrarroja (IR) para grabación en completa oscuridad.' },
        ],
        stats: [{ valor: '+1000', label: 'Cámaras inst.' }, { valor: '4K', label: 'Ultra HD' }, { valor: '365', label: 'Días grabación' }],
        proceso: [
            { num: '01', texto: 'Análisis de puntos ciegos y diseño del sistema' },
            { num: '02', texto: 'Instalación de cámaras PTZ, domo y bullet' },
            { num: '03', texto: 'Configuración de DVR/NVR y almacenamiento' },
            { num: '04', texto: 'Acceso remoto, capacitación y garantía' },
        ],
        imagenes: [
            'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=900&q=85',
            'https://images.unsplash.com/photo-1589935447067-5531094415d1?w=900&q=85',
            'https://images.unsplash.com/photo-1601628828688-632f38a5a7d0?w=900&q=85',
        ],
    },
    'red-de-datos': {
        titulo: 'Red de Datos',
        numero: '07',
        icono: 'fa-ethernet',
        tag: 'Cableado Estructurado',
        descripcion: 'Ejecutamos proyectos integrales de cableado estructurado categoría 6 y 6A para redes de alta velocidad de voz y datos. Diseñamos infraestructuras de telecomunicaciones confiables incluyendo el ordenamiento de cables, instalación de racks y certificación de puntos de red con buscador de cables Fluke.',
        beneficios: [
            { icono: 'fa-network-wired', titulo: 'Cat 6 / 6A', desc: 'Hasta 10 Gbps de velocidad de transmisión de datos.' },
            { icono: 'fa-server', titulo: 'Armado de Racks', desc: 'Instalación y organización profesional de gabinetes y patch panels.' },
            { icono: 'fa-check-double', titulo: 'Certificación Fluke', desc: 'Cada punto de red certificado con equipo Fluke Networks.' },
        ],
        stats: [{ valor: '+2000', label: 'Puntos certificados' }, { valor: '10 Gbps', label: 'Velocidad' }, { valor: 'Cat 6A', label: 'Estándar' }],
        proceso: [
            { num: '01', texto: 'Levantamiento de puntos de red y diseño de canalización' },
            { num: '02', texto: 'Tendido de cable por bandejas, ductos y canaletas' },
            { num: '03', texto: 'Terminación en jacks, rosetas y patch panels' },
            { num: '04', texto: 'Certificación de todos los puntos y entrega de informe' },
        ],
        imagenes: [
            'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&q=85',
            'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=900&q=85',
            'https://images.unsplash.com/photo-1515569505809-dd279090b4de?w=900&q=85',
        ],
    },
};

const ServiceDetail = () => {
    const { id } = useParams();
    const [lightbox, setLightbox] = useState(null);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, [id]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('sd-visible'); }),
            { threshold: 0.1 }
        );
        document.querySelectorAll('.sd-reveal').forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, [id]);

    useEffect(() => {
        const onKey = (e) => { if (e.key === 'Escape') setLightbox(null); };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, []);

    const servicio = infoServicios[id];

    if (!servicio) {
        return (
            <div className="sd-notfound">
                <i className="fa-solid fa-triangle-exclamation" />
                <h2>Servicio no encontrado</h2>
                <Link to="/" className="sd-cta-btn">← Volver al inicio</Link>
            </div>
        );
    }

    return (
        <div className="sd-page">

            {/* ── HERO ── */}
            <div className="sd-hero">
                <div className="sd-hero__bg-icon">
                    <i className={`fa-solid ${servicio.icono}`} />
                </div>

                <div className="sd-hero__content">
                    <Link to="/" className="sd-breadcrumb">
                        <i className="fa-solid fa-chevron-left" /> Servicios
                    </Link>

                    <div className="sd-hero__tag">{servicio.tag}</div>
                    <h1 className="sd-hero__title">{servicio.titulo}</h1>
                    <p className="sd-hero__desc">{servicio.descripcion}</p>

                    {/* ── STATS ── */}
                    <div className="sd-stats">
                        {servicio.stats.map((s, i) => (
                            <div className="sd-stat" key={i}>
                                <span className="sd-stat__valor">{s.valor}</span>
                                <span className="sd-stat__label">{s.label}</span>
                            </div>
                        ))}
                    </div>

                    <a href="https://wa.me/51934574031" target="_blank" rel="noreferrer" className="sd-cta-btn">
                        <i className="fab fa-whatsapp" /> Solicitar cotización gratis
                    </a>
                </div>

                {/* IMAGENES COL DERECHA */}
                <div className="sd-hero__gallery">
                    <div className="sd-hero__img-main sd-reveal">
                        <img src={servicio.imagenes[0]} alt={servicio.titulo} onClick={() => setLightbox(servicio.imagenes[0])} />
                        <span className="sd-img-badge">01 / 03</span>
                    </div>
                    <div className="sd-hero__img-row">
                        <div className="sd-hero__img-sm sd-reveal">
                            <img src={servicio.imagenes[1]} alt={servicio.titulo} onClick={() => setLightbox(servicio.imagenes[1])} />
                            <span className="sd-img-badge">02 / 03</span>
                        </div>
                        <div className="sd-hero__img-sm sd-reveal">
                            <img src={servicio.imagenes[2]} alt={servicio.titulo} onClick={() => setLightbox(servicio.imagenes[2])} />
                            <span className="sd-img-badge">03 / 03</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── BENEFICIOS ── */}
            <div className="sd-section sd-section--dark">
                <div className="sd-container">
                    <div className="sd-section-head sd-reveal">
                        <span className="sd-section-tag">¿Por qué elegirnos?</span>
                        <h2>Lo que incluye el servicio</h2>
                    </div>
                    <div className="sd-benefits-grid">
                        {servicio.beneficios.map((b, i) => (
                            <div className="sd-benefit-card sd-reveal" key={i}>
                                <div className="sd-benefit-card__icon">
                                    <i className={`fa-solid ${b.icono}`} />
                                </div>
                                <h3>{b.titulo}</h3>
                                <p>{b.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── PROCESO ── */}
            <div className="sd-section">
                <div className="sd-container">
                    <div className="sd-section-head sd-reveal">
                        <span className="sd-section-tag">Metodología</span>
                        <h2>Nuestro proceso de trabajo</h2>
                    </div>
                    <div className="sd-proceso-grid">
                        {servicio.proceso.map((p, i) => (
                            <div className="sd-proceso-step sd-reveal" key={i}>
                                <div className="sd-proceso-step__num">{p.num}</div>
                                <p>{p.texto}</p>
                                {i < servicio.proceso.length - 1 && <div className="sd-proceso-step__arrow"><i className="fa-solid fa-arrow-right" /></div>}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── CTA FINAL ── */}
            <div className="sd-cta-banner sd-reveal">
                <div className="sd-container sd-cta-banner__inner">
                    <div>
                        <h2>¿Listo para solicitar este servicio?</h2>
                        <p>Contáctanos ahora y recibe un presupuesto sin compromiso en menos de 24 horas.</p>
                    </div>
                    <a href="https://wa.me/51934574031" target="_blank" rel="noreferrer" className="sd-cta-btn sd-cta-btn--dark">
                        <i className="fab fa-whatsapp" /> Escribir por WhatsApp
                    </a>
                </div>
            </div>

            {/* ── LIGHTBOX ── */}
            {lightbox && (
                <div className="sd-lightbox" onClick={() => setLightbox(null)}>
                    <button className="sd-lb-close" onClick={() => setLightbox(null)}>✕</button>
                    <img src={lightbox} alt="Vista ampliada" onClick={(e) => e.stopPropagation()} />
                </div>
            )}
        </div>
    );
};

export default ServiceDetail;