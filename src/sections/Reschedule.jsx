import rescheduleDoctor from '../assets/images/reschedule-doctor.webp'
import ButtonLink from '../components/ui/ButtonLink.jsx'
import Container from '../components/ui/Container.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import { LINKS } from '../config/site.js'
import { META_EVENTS, trackEvent } from '../lib/analytics/metaPixel.js'

export default function Reschedule() {
  return (
    <section aria-labelledby="reschedule-title" className="py-16 lg:py-24">
      <Container>
        <Reveal className="relative overflow-hidden rounded-3xl border border-brand-200 bg-white">
          {/* Texto */}
          <div className="relative z-10 px-6 pt-10 text-center sm:px-10 md:w-[55%] md:py-16 md:text-left lg:py-24 lg:pl-16">
            <h2
              id="reschedule-title"
              className="text-4xl leading-[0.9] font-bold tracking-tight lg:text-5xl xl:text-6xl"
            >
              ¿Tuviste algún imprevisto?
            </h2>
            <p className="mx-auto mt-4 max-w-md md:mx-0 lg:mt-6">
              Sabemos que muchas veces pueden existir imprevistos, pero si agendaste con nosotros
              ese no será un problema, ¡Reprograma!.
            </p>
            <ButtonLink
              href={LINKS.whatsappReschedule}
              external
              className="mt-6 w-full sm:w-auto sm:min-w-72 lg:mt-8"
              onClick={() => trackEvent(META_EVENTS.CONTACT)}
            >
              Coordinar una reprogramación
            </ButtonLink>
          </div>

          {/* Foto */}
          <div className="relative mt-8 aspect-4/3 md:absolute md:inset-y-0 md:right-0 md:mt-0 md:aspect-auto md:w-[55%]">
            <img
              src={rescheduleDoctor}
              alt=""
              width="1320"
              height="366"
              loading="lazy"
              className="size-full object-cover object-[60%_center]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-1/3 bg-linear-to-b from-white to-transparent md:inset-y-0 md:right-auto md:h-full md:w-1/2 md:bg-linear-to-r"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
