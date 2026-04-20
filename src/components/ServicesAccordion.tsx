'use client'

import Image from 'next/image'
import { useServicesAccordion } from '@/hooks/useServicesAccordion'

const services = [
  {
    num: '01',
    title: 'Same-Day Elite',
    desc: 'Entrega garantizada en menos de 4 horas dentro del anillo urbano principal. Ideal para urgencias críticas de alto valor.',
    features: ['Monitoreo GPS dedicado', 'Seguro de carga premium'],
    // image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1400&q=80',
    image: '/images/services/moto2.jpg',
  },
  {
    num: '02',
    title: 'Business Core',
    desc: 'Logística recurrente para PyMEs y E-commerce. Gestión masiva de guías y recolecciones programadas.',
    features: ['API de integración directa', 'Facturación consolidada'],
    // image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1400&q=80',
    image: '/images/services/truck1.jpg',
  },
  {
    num: '03',
    title: 'Urban Coverage',
    desc: 'La mayor red de micro-hubs urbanos para entregas capilares de alta precisión en toda el área metropolitana.',
    features: ['100% cobertura metropolitana', 'Flota ecológica disponible'],
    // image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1400&q=80',
    image: '/images/services/panel3.jpg',
  },
]

export function ServicesAccordion() {
  const { activeIndex, activate, deactivate, toggle } = useServicesAccordion()

  return (
    <div
      className="svc-accordion"
      onMouseLeave={deactivate}
      role="list"
      aria-label="Verticales de servicio"
    >
      {/* Header overlay — top of accordion */}
      <div className="svc-header" aria-hidden="false">
        <div className="svc-header__inner">
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
      </div>
      {services.map((svc, i) => {
        const isActive = activeIndex === i
        return (
          <article
            key={svc.num}
            className={`svc-panel${isActive ? ' is-active' : ''}`}
            onMouseEnter={() => activate(i)}
            onClick={() => toggle(i)}
            onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && toggle(i)}
            tabIndex={0}
            role="listitem"
            aria-expanded={isActive}
            aria-label={svc.title}
          >
            {/* Background image */}
            <div className="svc-panel__bg" aria-hidden="true">
              <Image
                src={svc.image}
                alt=""
                fill
                sizes="(max-width: 767px) 100vw, 33vw"
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                priority={i === 0}
              />
            </div>

            {/* Dark gradient overlay */}
            <div className="svc-panel__overlay" aria-hidden="true" />
            {/* Brand tint — fades in on active (opacity is GPU-composited, unlike background) */}
            <div className="svc-panel__overlay-brand" aria-hidden="true" />

            {/* Vertical label — visible when collapsed */}
            <div className="svc-panel__label" aria-hidden="true">
              <span className="svc-panel__label-num">{svc.num}</span>
              <span className="svc-panel__label-title">{svc.title}</span>
            </div>

            {/* Expanded content overlay */}
            <div className="svc-panel__content">
              <p className="svc-panel__num" aria-hidden="true">{svc.num}</p>
              <hr className="svc-panel__rule" />
              <h3 className="svc-panel__title">{svc.title}</h3>
              <p className="svc-panel__desc">{svc.desc}</p>
              <ul className="svc-panel__features" aria-label="Características">
                {svc.features.map(f => (
                  <li key={f}>
                    <span className="material-symbols-outlined" aria-hidden="true">check_circle</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#" className="btn btn--outline">
                Saber más
                <span className="material-symbols-outlined" aria-hidden="true">north_east</span>
              </a>
            </div>
          </article>
        )
      })}
    </div>
  )
}
