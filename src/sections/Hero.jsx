import ButtonLink from '../components/ui/ButtonLink.jsx'
import Container from '../components/ui/Container.jsx'
import Icon from '../components/ui/Icon.jsx'
import { LINKS } from '../config/site.js'
import { META_EVENTS, trackEvent } from '../lib/analytics/metaPixel.js'
import HeroVideo from '../components/media/HeroVideo.jsx'

export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="pt-4 pb-12 md:pt-6 lg:pb-20">
      <Container>
        <h1 id="hero-title" className="sr-only">
          Citas Web de Clínica San Pedro: agenda y paga tu cita médica en línea
        </h1>

        {/* Recuadro temporal: aquí irá el video en el Paso 4.2 */}
        <HeroVideo />

        <div className="relative z-10 mt-4 flex flex-col gap-3 sm:flex-row sm:justify-center md:-mt-6">
          <ButtonLink
            href={LINKS.login}
            className="sm:min-w-72"
            onClick={() => trackEvent(META_EVENTS.SCHEDULE)}
          >
            Agendar mi cita
            <Icon name="arrow_outward" size={20} />
          </ButtonLink>
          <ButtonLink
            href={LINKS.register}
            variant="outline"
            className="sm:min-w-72"
            onClick={() => trackEvent(META_EVENTS.LEAD)}
          >
            Registrarme a Citas Web gratis
          </ButtonLink>
        </div>
      </Container>
    </section>
  )
}
