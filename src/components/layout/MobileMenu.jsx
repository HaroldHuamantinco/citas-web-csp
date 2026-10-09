import { useEffect, useRef, useState } from 'react'
import logo from '../../assets/images/logo-san-pedro.svg'
import { LINKS, NAV_LINKS } from '../../config/site.js'
import { META_EVENTS, trackEvent } from '../../lib/analytics/metaPixel.js'
import ButtonLink from '../ui/ButtonLink.jsx'
import Icon from '../ui/Icon.jsx'

const ITEM_CLASSES =
  'flex w-full items-center gap-3 rounded-lg px-3 py-3 font-medium text-ink hover:bg-brand-50 hover:text-brand-500'

export default function MobileMenu({ isOpen, onClose }) {
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const closeButtonRef = useRef(null)

  useEffect(() => {
    if (!isOpen) return

    closeButtonRef.current?.focus()

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }
    const desktopQuery = window.matchMedia('(min-width: 64rem)')
    const handleDesktop = (event) => {
      if (event.matches) onClose()
    }

    document.addEventListener('keydown', handleKeyDown)
    desktopQuery.addEventListener('change', handleDesktop)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      desktopQuery.removeEventListener('change', handleDesktop)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  return (
    <div id="mobile-menu" inert={!isOpen} className="lg:hidden">
      {/* Fondo oscuro */}
      <div
        aria-hidden="true"
        onClick={onClose}
        className={`fixed inset-0 z-50 bg-ink/50 transition-opacity duration-300 motion-reduce:transition-none ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />

      {/* Panel lateral */}
      <aside
        aria-label="Menú"
        className={`fixed inset-y-0 left-0 z-50 flex w-[85%] max-w-sm flex-col bg-white shadow-xl transition-transform duration-300 motion-reduce:transition-none ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex h-16 shrink-0 items-center justify-between border-b border-line px-4">
          <img src={logo} alt="Clínica San Pedro" width="150" height="41" className="h-7 w-auto" />
          <button
            ref={closeButtonRef}
            type="button"
            aria-label="Cerrar menú"
            onClick={onClose}
            className="grid size-11 place-items-center rounded-lg text-brand-500 hover:bg-brand-50"
          >
            <Icon name="close" size={28} />
          </button>
        </div>

        <nav aria-label="Menú móvil" className="flex-1 overflow-y-auto px-3 py-6">
          <p className="mb-3 px-3 text-xs font-semibold tracking-wider text-muted uppercase">
            Menú principal
          </p>
          <ul className="space-y-1">
            {NAV_LINKS.map((item) => (
              <li key={item.label}>
                {item.href ? (
                  <a href={item.href} onClick={onClose} className={ITEM_CLASSES}>
                    <Icon name={item.icon} size={22} className="text-brand-500" />
                    {item.label}
                  </a>
                ) : (
                  <>
                    <button
                      type="button"
                      aria-expanded={isServicesOpen}
                      aria-controls="mobile-services"
                      onClick={() => setIsServicesOpen((open) => !open)}
                      className={ITEM_CLASSES}
                    >
                      <Icon name={item.icon} size={22} className="text-brand-500" />
                      {item.label}
                      <Icon
                        name="expand_more"
                        size={22}
                        className={`ml-auto transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                    <ul
                      id="mobile-services"
                      hidden={!isServicesOpen}
                      className="mt-1 space-y-1 pl-9"
                    >
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <a
                            href={child.href}
                            onClick={onClose}
                            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-ink hover:bg-brand-50 hover:text-brand-500"
                          >
                            <Icon name={child.icon} size={20} className="text-brand-400" />
                            {child.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="shrink-0 space-y-3 border-t border-line p-4">
          <ButtonLink
            href={LINKS.login}
            className="w-full"
            onClick={() => trackEvent(META_EVENTS.SCHEDULE)}
          >
            Agendar mi cita
          </ButtonLink>
          <ButtonLink
            href={LINKS.register}
            variant="outline"
            className="w-full"
            onClick={() => trackEvent(META_EVENTS.LEAD)}
          >
            Registrarme a Citas Web gratis
          </ButtonLink>
        </div>
      </aside>
    </div>
  )
}
