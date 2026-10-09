const PORTAL_URL = 'https://citasweb.clinicasanpedro.com'
const WHATSAPP_NUMBER = '51968204971'

// Arma un link de WhatsApp con un mensaje ya escrito
const whatsappLink = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

export const SITE = {
  name: 'Clínica San Pedro',
  legalName: 'Inversiones Médicas Galeno S.A.C.',
  address: 'Av. Echenique 641 - Huacho',
  whatsappDisplay: '(51) 968 204 971',
  mainSiteUrl: 'https://clinicasanpedro.com',
}

export const LINKS = {
  login: `${PORTAL_URL}/auth/login`,
  register: `${PORTAL_URL}/auth/register`,
  whatsappReschedule: whatsappLink(
    'Hola, vengo de la página de Citas Web y quisiera reprogramar mi cita.',
  ),
  whatsappSupport: whatsappLink(
    'Hola, vengo de la página de Citas Web y tengo una consulta sobre cómo agendar mi cita.',
  ),
  terms: 'https://clinicasanpedro.com/terminos.php',
}

export const NAV_LINKS = [
  { label: 'Nosotros', icon: 'groups', href: 'https://clinicasanpedro.com/nosotros.php' },
  {
    label: 'Staff Médico',
    icon: 'stethoscope',
    href: 'https://grupo.clinicasanpedro.com/csp/medicos',
  },
  {
    label: 'Servicios',
    icon: 'medical_services',
    children: [
      {
        label: 'Laboratorio',
        icon: 'biotech',
        href: 'https://clinicasanpedro.com/laboratorio.php',
      },
      { label: 'Farmacia', icon: 'medication', href: 'https://clinicasanpedro.com/farmacia.php' },
      {
        label: 'Fisioterapia',
        icon: 'physical_therapy',
        href: 'https://clinicasanpedro.com/fisioterapia.php',
      },
      { label: 'Ofertas', icon: 'sell', href: 'https://clinicasanpedro.com/catalogo.php' },
    ],
  },
  { label: 'Contáctenos', icon: 'call', href: 'https://clinicasanpedro.com/contactenos.php' },
  { label: 'Blog', icon: 'article', href: 'https://clinicasanpedro.com/blog.php' },
  { label: 'Intranet', icon: 'lock', href: 'https://grupo.clinicasanpedro.com/iniciarsesion' },
]

export const SOCIAL_LINKS = [
  { label: 'Facebook', href: 'https://www.facebook.com/clinicasanpedrohuacho' },
  { label: 'Instagram', href: 'https://www.instagram.com/clinicasanpedrohuacho' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@clinicasanpedrohuacho' },
  { label: 'YouTube', href: 'https://www.youtube.com/@clinicasanpedrohuacho' },
]
