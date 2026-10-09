import ButtonLink from '../components/ui/ButtonLink.jsx'
import Container from '../components/ui/Container.jsx'
import WhatsAppIcon from '../components/ui/WhatsAppIcon.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import { LINKS } from '../config/site.js'
import { META_EVENTS, trackEvent } from '../lib/analytics/metaPixel.js'

export default function ContactCta() {
  return (
    <section
      aria-labelledby="contact-title"
      className="bg-brand-500 py-16 text-center text-white lg:py-24"
    >
      <Container>
        <Reveal>
          <h2
            id="contact-title"
            className="mx-auto max-w-5xl text-3xl leading-[0.95] font-bold tracking-tight sm:text-4xl lg:text-5xl"
          >
            ¿Tienes alguna duda con tu proceso,{' '}
            <span className="lg:block">o prefieres agendar con ayuda asistida?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm lg:mt-6 lg:text-base">
            Nuestro equipo de atención al paciente está conectado para ayudarte.
          </p>
          <ButtonLink
            href={LINKS.whatsappSupport}
            variant="accent"
            external
            className="mt-8 w-full sm:w-auto"
            onClick={() => trackEvent(META_EVENTS.CONTACT)}
          >
            <WhatsAppIcon size={22} />
            Chatear con una asesora<span className="hidden sm:inline"> por WhatsApp</span>
          </ButtonLink>
        </Reveal>
      </Container>
    </section>
  )
}
