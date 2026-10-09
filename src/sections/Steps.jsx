import { useRef, useState } from 'react'
import ButtonLink from '../components/ui/ButtonLink.jsx'
import Container from '../components/ui/Container.jsx'
import Icon from '../components/ui/Icon.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import { LINKS } from '../config/site.js'
import { STEPS } from '../content/landing.js'
import { META_EVENTS, trackEvent } from '../lib/analytics/metaPixel.js'

function StepCard({ step, number }) {
  return (
    <article className="h-full rounded-3xl bg-white p-3 shadow-sm">
      <div className="flex h-full flex-col rounded-2xl bg-linear-to-b from-white to-surface p-5 text-center">
        <p aria-hidden="true" className="text-left text-5xl font-bold text-brand-500">
          {String(number).padStart(2, '0')}
        </p>
        <img
          src={step.image}
          alt={step.alt}
          width="560"
          height={step.height}
          loading="lazy"
          className="mx-auto mt-2 h-auto w-full max-w-60"
        />
        <h3 className="mt-4 text-xl leading-none font-semibold">
          <span className="sr-only">Paso {number}: </span>
          {step.title}
        </h3>
        <p className="mt-2 text-sm leading-none text-muted">{step.text}</p>
      </div>
    </article>
  )
}

export default function Steps() {
  const listRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const handleScroll = () => {
    const list = listRef.current
    const maxScroll = list.scrollWidth - list.clientWidth
    if (maxScroll <= 0) return
    setActiveIndex(Math.round((list.scrollLeft / maxScroll) * (STEPS.length - 1)))
  }

  const goToStep = (index) => {
    listRef.current.children[index].scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    })
  }

  return (
    <section aria-labelledby="steps-title" className="bg-surface py-16 lg:py-24">
      <Container>
        <Reveal
          as="h2"
          id="steps-title"
          className="text-center text-4xl leading-[0.9] font-bold tracking-tight lg:text-5xl"
        >
          Tu cita médica <span className="block">en 3 pasos</span>
        </Reveal>

        <ol
          ref={listRef}
          onScroll={handleScroll}
          className="-mx-4 mt-10 flex snap-x snap-mandatory scrollbar-none gap-4 overflow-x-auto px-4 pb-2 md:mx-0 md:grid md:grid-cols-3 md:gap-12 md:overflow-visible md:px-0 lg:mt-14 [&::-webkit-scrollbar]:hidden"
        >
          {STEPS.map((step, index) => (
            <Reveal
              as="li"
              key={step.title}
              className="relative w-[85%] shrink-0 snap-center md:w-auto"
            >
              <StepCard step={step} number={index + 1} />
              {index < STEPS.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute top-1/2 left-full ml-6 hidden -translate-x-1/2 -translate-y-1/2 text-brand-500 md:block"
                >
                  <Icon name="keyboard_double_arrow_right" size={32} />
                </span>
              )}
            </Reveal>
          ))}
        </ol>

        {/* Puntitos del carrusel (solo celular) */}
        <div className="mt-4 flex justify-center gap-2 md:hidden">
          {STEPS.map((step, index) => (
            <button
              key={step.title}
              type="button"
              aria-label={`Ir al paso ${index + 1}`}
              aria-current={activeIndex === index ? 'step' : undefined}
              onClick={() => goToStep(index)}
              className={`size-2.5 rounded-full transition-colors ${
                activeIndex === index ? 'bg-brand-500' : 'bg-line'
              }`}
            />
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center lg:mt-14">
          <ButtonLink
            href={LINKS.register}
            variant="outline"
            className="sm:min-w-72"
            onClick={() => trackEvent(META_EVENTS.LEAD)}
          >
            Regístrate gratis
          </ButtonLink>
          <ButtonLink
            href={LINKS.login}
            className="sm:min-w-72"
            onClick={() => trackEvent(META_EVENTS.SCHEDULE)}
          >
            Agendar una cita
          </ButtonLink>
        </div>
      </Container>
    </section>
  )
}
