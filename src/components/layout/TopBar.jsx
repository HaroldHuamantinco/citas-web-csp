import { LINKS, SITE } from '../../config/site.js'
import Container from '../ui/Container.jsx'
import Icon from '../ui/Icon.jsx'
import WhatsAppIcon from '../ui/WhatsAppIcon.jsx'

export default function TopBar() {
  return (
    <div className="hidden bg-brand-500 text-sm text-white md:block">
      <Container className="flex items-center justify-center gap-10 py-2">
        <p className="flex items-center gap-2">
          <Icon name="location_on" size={18} />
          {SITE.address}
        </p>
        <a
          href={LINKS.whatsappSupport}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:underline"
        >
          <WhatsAppIcon size={16} />
          WhatsApp: {SITE.whatsappDisplay}
        </a>
      </Container>
    </div>
  )
}
