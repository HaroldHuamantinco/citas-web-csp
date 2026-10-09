import { useCallback, useRef, useState } from 'react'
import logo from '../../assets/images/logo-san-pedro.svg'
import { LINKS, NAV_LINKS, SITE } from '../../config/site.js'
import { META_EVENTS, trackEvent } from '../../lib/analytics/metaPixel.js'
import ButtonLink from '../ui/ButtonLink.jsx'
import Container from '../ui/Container.jsx'
import Icon from '../ui/Icon.jsx'
import MobileMenu from './MobileMenu.jsx'
import NavDropdown from './NavDropdown.jsx'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuButtonRef = useRef(null)

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false)
    menuButtonRef.current?.focus()
  }, [])

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
        <Container className="flex h-16 items-center gap-3 lg:h-20">
          <a href={SITE.mainSiteUrl} className="shrink-0">
            <img
              src={logo}
              alt="Clínica San Pedro"
              width="150"
              height="41"
              className="h-7 w-auto sm:h-8 lg:h-10"
            />
          </a>

          <button
            ref={menuButtonRef}
            type="button"
            aria-label="Abrir menú"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMenuOpen(true)}
            className="mx-auto grid size-11 shrink-0 place-items-center rounded-lg text-brand-500 hover:bg-brand-50 md:ml-6 lg:hidden"
          >
            <Icon name="menu" size={28} />
          </button>

          <nav aria-label="Principal" className="mx-auto hidden lg:block">
            <ul className="flex items-center gap-6 xl:gap-10">
              {NAV_LINKS.map((item) => (
                <li key={item.label}>
                  {item.href ? (
                    <a href={item.href} className="font-medium text-brand-500 hover:text-brand-600">
                      {item.label}
                    </a>
                  ) : (
                    <NavDropdown item={item} />
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <ButtonLink
            href={LINKS.login}
            size="md"
            className="shrink-0 whitespace-nowrap"
            onClick={() => trackEvent(META_EVENTS.SCHEDULE)}
          >
            <span className="max-[359px]:hidden">Agendar una Cita</span>
          </ButtonLink>
        </Container>
      </header>
      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  )
}
