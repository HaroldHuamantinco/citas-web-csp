import logo from '../../assets/images/logo-san-pedro.svg'
import { LINKS, SITE, SOCIAL_LINKS } from '../../config/site.js'
import Container from '../ui/Container.jsx'
import Icon from '../ui/Icon.jsx'
import WhatsAppIcon from '../ui/WhatsAppIcon.jsx'

const CURRENT_YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <Container className="pt-10 pb-6 lg:pt-12 lg:pb-6">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:items-start md:justify-between md:text-left">
          {/* Logo y contacto */}
          <div className="space-y-4">
            <img
              src={logo}
              alt="Clínica San Pedro"
              width="150"
              height="41"
              loading="lazy"
              className="mx-auto h-9 w-auto md:mx-0"
            />
            <ul className="space-y-2 text-sm">
              <li className="flex items-center justify-center gap-2 md:justify-start">
                <Icon name="location_on" size={20} className="text-brand-500" />
                {SITE.address}
              </li>
              <li>
                <a
                  href={LINKS.whatsappSupport}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-brand-500"
                >
                  <WhatsAppIcon size={18} className="text-brand-500" />
                  WhatsApp: {SITE.whatsappDisplay}
                </a>
              </li>
            </ul>
          </div>

          {/* Redes sociales */}
          <nav aria-label="Redes sociales">
            <p className="text-sm font-semibold">Síguenos</p>
            <ul className="mt-3 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm md:justify-start">
              {SOCIAL_LINKS.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-500 hover:text-brand-600 hover:underline"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Línea legal */}
        <div className="mt-8 flex flex-col items-center gap-3 border-t border-line pt-6 text-center text-xs text-muted md:flex-row md:justify-between md:text-left">
          <p>
            © {CURRENT_YEAR} {SITE.name} · {SITE.legalName}. Todos los derechos reservados.
          </p>
          <a href={LINKS.terms} className="hover:text-brand-500 hover:underline">
            Términos, condiciones y política de privacidad
          </a>
        </div>
      </Container>
    </footer>
  )
}
