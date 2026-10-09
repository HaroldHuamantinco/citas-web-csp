import { useEffect, useRef, useState } from 'react'
import Icon from '../ui/Icon.jsx'

export default function NavDropdown({ item }) {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef(null)
  const menuId = `nav-${item.label.toLowerCase()}`

  useEffect(() => {
    if (!isOpen) return

    const handlePointerDown = (event) => {
      if (!containerRef.current?.contains(event.target)) setIsOpen(false)
    }
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  // event.detail === 0 → el "clic" vino del teclado (Enter o Espacio)
  const handleClick = (event) => {
    if (event.detail === 0) setIsOpen((open) => !open)
    else setIsOpen(true)
  }

  return (
    <div
      ref={containerRef}
      className="relative flex h-20 items-center"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={menuId}
        onClick={handleClick}
        className="flex items-center gap-1 font-medium text-brand-500 hover:text-brand-600"
      >
        {item.label}
        <Icon
          name="expand_more"
          size={20}
          className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      <div
        id={menuId}
        hidden={!isOpen}
        className="absolute top-full left-1/2 w-56 -translate-x-1/2 pt-2"
      >
        <ul className="rounded-xl border border-line bg-white p-2 shadow-lg">
          {item.children.map((child) => (
            <li key={child.label}>
              <a
                href={child.href}
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-ink hover:bg-brand-50 hover:text-brand-500"
              >
                <Icon name={child.icon} size={20} className="text-brand-400" />
                {child.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
