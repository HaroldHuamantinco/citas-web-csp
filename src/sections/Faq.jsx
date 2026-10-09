import Container from '../components/ui/Container.jsx'
import Icon from '../components/ui/Icon.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import { FAQS } from '../content/landing.js'

// Datos estructurados para Google (FAQPage)
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
}

export default function Faq() {
  return (
    <section aria-labelledby="faq-title" className="bg-surface py-16 lg:py-24">
      <Container>
        <Reveal className="mx-auto max-w-4xl md:px-8 lg:px-0">
          <h2
            id="faq-title"
            className="text-center text-4xl leading-[0.9] font-bold tracking-tight md:text-left lg:text-5xl"
          >
            Preguntas frecuentes
          </h2>

          <div className="mt-8 border-t border-line lg:mt-12">
            {FAQS.map((faq) => (
              <details key={faq.question} name="faq" className="group border-b border-line">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-sm py-5 font-semibold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-500 lg:text-lg [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <Icon
                    name="expand_more"
                    size={24}
                    className="transition-transform group-open:rotate-180 group-open:text-brand-500"
                  />
                </summary>
                <p className="max-w-2xl pb-5 text-sm text-muted lg:text-base">{faq.answer}</p>
              </details>
            ))}
          </div>
        </Reveal>

        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Container>
    </section>
  )
}
