import ButtonLink from '../components/ui/ButtonLink.jsx'
import Container from '../components/ui/Container.jsx'
import Icon from '../components/ui/Icon.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import { LINKS } from '../config/site.js'
import { BENEFITS } from '../content/landing.js'
import { META_EVENTS, trackEvent } from '../lib/analytics/metaPixel.js'

export default function Benefits() {
  return (
    <section aria-labelledby="benefits-title" className="pb-16 lg:pb-24">
      <Container className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:grid-rows-[auto_1fr] lg:gap-x-16 lg:gap-y-8">
        {/* Encabezado */}
        <Reveal className="mx-auto max-w-2xl text-center lg:mx-0 lg:max-w-none lg:text-left">
          <h2
            id="benefits-title"
            className="text-4xl leading-[0.9] font-bold tracking-tight lg:text-5xl"
          >
            4 razones por las que debes agendar online
          </h2>
          <p className="mt-4 lg:mt-6">
            Olvídate de las llamadas y las filas en ventanilla. Toma el control de tus citas con un
            proceso 100% digital, rápido y pensado en tu comodidad.
          </p>
        </Reveal>

        {/* Tarjetas */}
        <ul className="grid gap-4 sm:grid-cols-2 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:grid-cols-2 lg:gap-6">
          {BENEFITS.map((benefit) => (
            <Reveal as="li" key={benefit.title} className="flex gap-4 rounded-3xl bg-surface p-6">
              <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-brand-200 text-brand-500">
                <Icon name={benefit.icon} size={26} />
              </span>
              <div>
                <h3 className="text-lg leading-tight font-semibold lg:text-xl">{benefit.title}</h3>
                <p className="mt-2 text-sm">{benefit.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>

        {/* Botón */}
        <ButtonLink
          href={LINKS.login}
          className="w-full justify-self-center sm:w-auto sm:min-w-72 lg:col-start-1 lg:row-start-2 lg:w-full lg:max-w-md lg:self-start lg:justify-self-start"
          onClick={() => trackEvent(META_EVENTS.SCHEDULE)}
        >
          Agendar una cita
        </ButtonLink>
      </Container>
    </section>
  )
}
