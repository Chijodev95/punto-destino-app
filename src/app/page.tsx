'use client'

import { useEffect, useState } from 'react'

export default function Home() {
  const [activeSection, setActiveSection] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    // Scroll reveal
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            revealObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el))

    // Active section observer
    const sections = document.querySelectorAll('section[id]')
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { threshold: 0.4 }
    )
    sections.forEach((s) => sectionObserver.observe(s))

    return () => {
      revealObserver.disconnect()
      sectionObserver.disconnect()
    }
  }, [])

  const navLinks = [
    { href: '#why', label: 'Por qué nosotros' },
    { href: '#how', label: 'Cómo funciona' },
    { href: '#services', label: 'Servicios' },
    { href: '#enterprise', label: 'Empresas' },
  ]

  return (
    <>
      <a className="skip-link" href="#main">Ir al contenido principal</a>

      {/* ── NAVBAR ── */}
      <nav className="navbar" aria-label="Navegación principal">
        <div className="container navbar__inner">
          <a href="/" className="navbar__logo" aria-label="Punto Destino — Inicio">
            PUNTO <span className="logo-accent">DESTINO</span>
          </a>

          <div className="navbar__nav">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className={`navbar__link${activeSection === href.slice(1) ? ' navbar__link--active' : ''}`}
              >
                {label}
              </a>
            ))}
          </div>

          <div className="navbar__actions">
            <a href="https://wa.me" className="navbar__whatsapp" target="_blank" rel="noopener">
              WhatsApp
            </a>
            <a href="#" className="btn btn--primary navbar__btn">Enviar Ahora</a>
          </div>

          <button
            className="navbar__hamburger"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú de navegación'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`navbar__mobile-menu${menuOpen ? ' open' : ''}`}>
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="navbar__link"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          <a href="#" className="btn btn--primary" style={{ marginTop: '0.5rem' }}>
            Enviar Ahora
          </a>
        </div>
      </nav>

      <main id="main">

        {/* ── HERO ── */}
        <section className="hero" id="hero" aria-label="Presentación principal">
          <div className="hero__bg" aria-hidden="true">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMJMkNFa1n_frChB2heL-DPnP8wGmv7-E92J2UFJQfX5ugoX0y55p1xRQNW5QBVWznIRtuYN5mO9phALTYb9G4TLcAWrM6Rb5HJiiV5okLv6l_O4Utp3Y1dJjmo1Qi496W81QfIpIYG0nQu2qSl7NY1FTYFkLckhEOBR4EqkQohvqykwMG3sKvtckhAkLv0ASWI5Ick7j98H9n7tQNhgdfj7wZS9Vb5ASoBoPUbXShe2dm9kC6C1Kas3yDYlckcHdFdL5Jg8HLKKC9"
              alt=""
              width={1920}
              height={1080}
              loading="eager"
            />
          </div>
          <div className="hero__glow" aria-hidden="true" />

          <div className="hero__content container">
            <div className="hero__inner">
              <span className="badge reveal">Infraestructura Logística Premium</span>

              <h1 className="hero__title reveal reveal--d1">
                CONECTAMOS<br />
                TU <span className="gradient-text">DESTINO.</span>
              </h1>

              <p className="hero__subtitle reveal reveal--d2">
                No somos una mensajería más. Somos el motor de control y escalabilidad
                para la logística urbana inteligente. Precisión absoluta en cada kilómetro.
              </p>

              <div className="hero__actions reveal reveal--d3">
                <a href="#" className="btn btn--primary">
                  SOLICITAR ENVÍO
                  <span className="material-symbols-outlined" aria-hidden="true">arrow_forward</span>
                </a>
                <a href="https://wa.me" className="btn btn--outline" target="_blank" rel="noopener">
                  Hablar por WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="hero__ornament" aria-hidden="true" />
        </section>

        {/* ── POR QUÉ NOSOTROS ── */}
        <section className="section" id="why" aria-labelledby="why-title">
          <div className="container">
            <div className="section__header reveal">
              <span className="badge">Diferencial Punto Destino</span>
              <h2 className="section__title" id="why-title">
                Liderazgo Operativo<br />de Siguiente Nivel
              </h2>
            </div>

            <div className="bento">
              <div className="bento__card bento__card--large reveal">
                <span className="material-symbols-outlined bento__icon" aria-hidden="true">verified_user</span>
                <h3 className="bento__card-title">Confianza Institucional</h3>
                <p className="bento__card-text">
                  Sistemas de respaldo redundantes y protocolos de seguridad de grado bancario
                  para cada activo en tránsito.
                </p>
                <div className="bento__card-bg-icon" aria-hidden="true">
                  <span className="material-symbols-outlined">shield</span>
                </div>
              </div>

              <div className="bento__card bento__card--small bento__card--accent reveal reveal--d1">
                <span className="material-symbols-outlined bento__icon" aria-hidden="true">analytics</span>
                <h3 className="bento__card-title">Control Total</h3>
                <p className="bento__card-text">
                  Dashboard en tiempo real con telemetría avanzada para flotas corporativas.
                </p>
              </div>

              <div className="bento__card bento__card--small reveal reveal--d2">
                <span className="material-symbols-outlined bento__icon" aria-hidden="true">bolt</span>
                <h3 className="bento__card-title">Eficiencia Radical</h3>
                <p className="bento__card-text">
                  Optimización de rutas mediante IA para reducir tiempos de entrega en un 40%.
                </p>
              </div>

              <div className="bento__card bento__card--large reveal reveal--d3">
                <h3 className="bento__card-title">Escalabilidad Dinámica</h3>
                <p className="bento__card-text">
                  Nuestra infraestructura se adapta a su volumen estacional sin comprometer
                  la latencia de entrega.
                </p>
                <div className="bento__progress-line" aria-hidden="true">
                  <span className="pl-active" />
                  <span className="pl-mid" />
                  <span className="pl-short" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CÓMO FUNCIONA ── */}
        <section className="section section--alt" id="how" aria-labelledby="how-title">
          <div className="container">
            <div className="section__header reveal" style={{ textAlign: 'center' }}>
              <span className="badge">El Método</span>
              <h2 className="section__title" id="how-title">Ingeniería de Entrega</h2>
              <p className="section__subtitle" style={{ margin: '1rem auto 0', textAlign: 'center' }}>
                Un flujo optimizado desde la recolección hasta la confirmación biométrica.
              </p>
            </div>

            <div className="process">
              <div className="process__connector" aria-hidden="true" />
              <div className="process__grid">

                {[
                  { icon: 'inventory_2', num: '01', title: 'Recolección', desc: 'Protocolo de recepción inmediata en punto de origen.' },
                  { icon: 'account_tree', num: '02', title: 'Clasificación', desc: 'Sorting automatizado por zonas de alta densidad.' },
                  { icon: 'local_shipping', num: '03', title: 'Despliegue', desc: 'Última milla mediante transporte especializado.' },
                  { icon: 'task_alt', num: '04', title: 'Verificación', desc: 'Confirmación digital y reporte de entrega final.' },
                ].map((step, i) => (
                  <div key={step.num} className={`process__step reveal${i > 0 ? ` reveal--d${i}` : ''}`}>
                    <div className="process__icon-wrap" aria-hidden="true">
                      <span className="material-symbols-outlined">{step.icon}</span>
                    </div>
                    <p className="process__number">{step.num}</p>
                    <h3 className="process__step-title">{step.title}</h3>
                    <p className="process__step-desc">{step.desc}</p>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </section>

        {/* ── SERVICIOS ── */}
        <section className="section" id="services" aria-labelledby="services-title">
          <div className="container">
            <div
              className="section__header reveal"
              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem' }}
            >
              <div>
                <span className="badge">Verticales de Servicio</span>
                <h2 className="section__title" id="services-title">Soluciones de Élite</h2>
                <p className="section__subtitle">
                  Modulares, escalables y diseñadas para la complejidad de la logística moderna.
                </p>
              </div>
              <a href="#" className="btn btn--outline" style={{ flexShrink: 0, alignSelf: 'flex-end' }}>
                Ver tarifas
                <span className="material-symbols-outlined" aria-hidden="true">north_east</span>
              </a>
            </div>

            <div className="services-grid">

              {[
                {
                  num: '01', title: 'Same-Day Elite',
                  desc: 'Entrega garantizada en menos de 4 horas dentro del anillo urbano principal. Ideal para urgencias críticas de alto valor.',
                  features: ['Monitoreo GPS dedicado', 'Seguro de carga premium'],
                },
                {
                  num: '02', title: 'Business Core',
                  desc: 'Logística recurrente para PyMEs y E-commerce. Gestión masiva de guías y recolecciones programadas.',
                  features: ['API de integración directa', 'Facturación consolidada'],
                },
                {
                  num: '03', title: 'Urban Coverage',
                  desc: 'La mayor red de micro-hubs urbanos para entregas capilares de alta precisión en toda el área metropolitana.',
                  features: ['100% cobertura metropolitana', 'Flota ecológica disponible'],
                },
              ].map((card, i) => (
                <article key={card.num} className={`service-card reveal${i > 0 ? ` reveal--d${i}` : ''}`}>
                  <div className="service-card__number" aria-hidden="true">{card.num}</div>
                  <h3 className="service-card__title">{card.title}</h3>
                  <p className="service-card__desc">{card.desc}</p>
                  <ul className="service-card__list" aria-label="Características del servicio">
                    {card.features.map((f) => (
                      <li key={f}>
                        <span className="material-symbols-outlined" aria-hidden="true">check_circle</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a href="#" className="btn btn--outline">Saber más</a>
                </article>
              ))}

            </div>
          </div>
        </section>

        {/* ── EMPRESAS ── */}
        <section className="section section--alt" id="enterprise" aria-labelledby="enterprise-title">
          <div className="container">
            <div className="enterprise__grid">

              <div className="reveal">
                <span className="badge">Soluciones Corporativas</span>
                <h2 className="enterprise__title" id="enterprise-title">
                  Para Grandes<br />Corporaciones
                </h2>
                <p className="enterprise__text">
                  Entendemos que para su empresa la logística es una ventaja competitiva,
                  no solo transporte. Soporte dedicado y arquitectura de datos para optimizar
                  sus operaciones a gran escala.
                </p>
                <div className="enterprise__stats">
                  <div className="enterprise__stat">
                    <p className="enterprise__stat-value">24/7</p>
                    <p className="enterprise__stat-label">Soporte Ejecutivo</p>
                  </div>
                  <div className="enterprise__stat">
                    <p className="enterprise__stat-value">+1M</p>
                    <p className="enterprise__stat-label">Envíos Mensuales</p>
                  </div>
                </div>
                <a href="#" className="btn btn--primary">SOLICITAR CONSULTORÍA B2B</a>
              </div>

              <div className="enterprise__image-wrap reveal reveal--d1">
                <div className="enterprise__image">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEwNA6_W5cofxPfvy3ksCP7chl55l79dr8l7c5iyJiU50ppYn1BbWDrxsNjhHkJTlRboarTIpDyC0ZYGj27F83WDAQGsoa0HHv54l1v9g248x3uQOhDnN51IyyiuoQWNSotWWhq4oQ-Jc3UJZZ2yrmhas1jTulu08gXLoSF01ITmHv0_H1L8unV9JJfB5r8I_Q4vZBhu7plK7QRDwAqAOasJbxgC8uYa0QwckYYlrPT4Ri9w7kZV7PYpg_dbg6otab47oSNB2PTWed"
                    alt="Equipo corporativo planificando rutas logísticas en un centro de control"
                    width={600}
                    height={600}
                    loading="lazy"
                  />
                </div>
                <div className="enterprise__floating-stat">
                  <p className="enterprise__floating-value">99.8%</p>
                  <p className="enterprise__floating-label">SLA de Cumplimiento</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── CTA FINAL ── */}
        <section className="final-cta" id="cta" aria-labelledby="cta-title">
          <div className="final-cta__bg-text" aria-hidden="true">DESTINO</div>
          <div className="container final-cta__content">
            <h2 className="final-cta__title reveal" id="cta-title">
              ¿Listo para transformar<br />su cadena de suministro?
            </h2>
            <p className="final-cta__subtitle reveal reveal--d1">
              Inicie hoy con Punto Destino y experimente el estándar de oro
              en logística profesional.
            </p>
            <div className="final-cta__actions reveal reveal--d2">
              <a href="#" className="btn btn--primary">COMENZAR AHORA</a>
              <a href="#" className="btn btn--outline">CONTACTAR VENTAS</a>
            </div>
          </div>
        </section>

      </main>

      {/* ── FOOTER ── */}
      <footer className="footer" role="contentinfo">
        <div className="container">
          <div className="footer__grid">

            <div>
              <div className="footer__logo">
                PUNTO <span className="logo-accent">DESTINO</span>
              </div>
              <p className="footer__desc">
                Arquitectura logística para empresas que no aceptan demoras.
                Infraestructura y datos al servicio de su crecimiento.
              </p>
              <nav className="footer__social" aria-label="Redes sociales">
                <a href="#" className="footer__social-link" aria-label="Sitio web">
                  <span className="material-symbols-outlined" aria-hidden="true">public</span>
                </a>
                <a href="https://wa.me" className="footer__social-link" aria-label="WhatsApp" target="_blank" rel="noopener">
                  <span className="material-symbols-outlined" aria-hidden="true">chat_bubble</span>
                </a>
                <a href="#" className="footer__social-link" aria-label="LinkedIn">
                  <span className="material-symbols-outlined" aria-hidden="true">work</span>
                </a>
              </nav>
            </div>

            <nav aria-label="Explorar sitio">
              <p className="footer__col-title">Explorar</p>
              <ul className="footer__links">
                <li><a href="#why" className="footer__link">Por qué nosotros</a></li>
                <li><a href="#services" className="footer__link">Servicios</a></li>
                <li><a href="#" className="footer__link">Cobertura Nacional</a></li>
                <li><a href="#" className="footer__link">Calculadora de Envíos</a></li>
              </ul>
            </nav>

            <nav aria-label="Legal">
              <p className="footer__col-title">Legal</p>
              <ul className="footer__links">
                <li><a href="#" className="footer__link">Términos Legales</a></li>
                <li><a href="#" className="footer__link">Privacidad</a></li>
                <li><a href="#" className="footer__link">Cookies</a></li>
                <li><a href="#" className="footer__link">Centro de Ayuda</a></li>
              </ul>
            </nav>

            <div>
              <p className="footer__col-title">Suscribirse</p>
              <form className="footer__newsletter" aria-label="Suscripción al boletín" noValidate>
                <label htmlFor="footer-email" className="sr-only">Email corporativo</label>
                <input
                  id="footer-email"
                  className="footer__input"
                  type="email"
                  name="email"
                  placeholder="Email corporativo"
                  autoComplete="email"
                  required
                />
                <button type="submit" className="footer__submit">ENVIAR</button>
              </form>
            </div>

          </div>

          <div className="footer__bottom">
            <p className="footer__copyright">
              © 2025 Punto Destino Logistics. Todos los derechos reservados.
            </p>
            <div className="footer__meta">
              <span>STATUS: OPTIMAL</span>
              <span>V. 1.0.0</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
