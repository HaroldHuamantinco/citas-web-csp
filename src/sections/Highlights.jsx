import mockupPortal from '../assets/images/mockup-portal.webp'
import ButtonLink from '../components/ui/ButtonLink.jsx'
import Container from '../components/ui/Container.jsx'
import Icon from '../components/ui/Icon.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import { LINKS } from '../config/site.js'
import { HIGHLIGHT_ITEMS } from '../content/landing.js'
import { META_EVENTS, trackEvent } from '../lib/analytics/metaPixel.js'

export default function Highlights() {
  return (
    <section aria-labelledby="highlights-title" className="pb-12 lg:pb-20">
      <Container>
        <div className="grid items-center gap-6 rounded-3xl bg-brand-50 px-6 pt-10 pb-6 sm:px-8 sm:pt-12 sm:pb-8 md:grid-cols-[1fr_auto] md:items-start md:gap-6 lg:grid-cols-[1.4fr_1fr_0.9fr] lg:items-center lg:gap-10 lg:p-12">
          {/* Columna 1: mensaje principal */}
          <Reveal>
            <h2
              id="highlights-title"
              className="text-4xl leading-[0.8] font-bold tracking-tight md:text-[2.5rem] lg:text-5xl"
            >
              <span className="text-brand-500">Tu consulta</span>{' '}
              <span className="font-medium">médica asegurada</span>{' '}
              <span className="text-accent-600">
                en menos <span className="whitespace-nowrap">de 1 min</span>
              </span>
            </h2>
            <ul className="mt-6 space-y-1.5 text-sm lg:text-base">
              {HIGHLIGHT_ITEMS.map((item) => (
                <li key={item.text} className="flex items-center gap-3">
                  <Icon name={item.icon} size={22} className="text-brand-400" />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Columna 2: celular con Mi Portal */}
          <Reveal
            delay={150}
            className="relative mx-auto w-full max-w-52 pb-6 sm:max-w-60 md:w-48 lg:w-full lg:max-w-64"
          >
            <img
              src={mockupPortal}
              alt="Celular mostrando Mi Portal San Pedro, la plataforma de Citas Web"
              width="640"
              height="1472"
              loading="lazy"
              className="h-auto w-full"
            />
            <p className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-xl bg-white px-5 py-3 text-xl whitespace-nowrap shadow-md md:px-3 md:py-2 md:text-sm lg:px-5 lg:py-3 lg:text-xl">
              <span className="font-semibold text-brand-500">Mi Portal</span>
              <span className="text-muted"> | San Pedro</span>
            </p>
          </Reveal>

          {/* Columna 3: tarjeta "Cero colas" */}
          <Reveal
            delay={300}
            className="flex flex-col gap-4 rounded-2xl bg-brand-200 p-6 md:col-span-2 lg:col-span-1 lg:gap-6 lg:self-stretch lg:p-8"
          >
            <div className="space-y-3 lg:space-y-6">
              <p className="text-3xl leading-[0.8] font-bold tracking-tight lg:text-4xl">
                <span className="lg:block">
                  <span className="text-brand-500">Cero</span> colas
                </span>{' '}
                <span className="lg:block">
                  cero <span className="text-brand-500">texto,</span>
                </span>{' '}
                <span className="lg:block">tú tienes</span>{' '}
                <span className="lg:block">el control</span>
              </p>
              <p className="text-sm">
                En la web tú tienes el control total para elegir fecha y hora al instante.
              </p>
            </div>
            <ButtonLink
              href={LINKS.login}
              variant="white"
              className="w-full md:w-auto md:min-w-60 md:self-start lg:mt-auto lg:w-full lg:self-stretch"
              onClick={() => trackEvent(META_EVENTS.SCHEDULE)}
            >
              Agendar mi cita
            </ButtonLink>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
