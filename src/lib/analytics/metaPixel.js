const PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID

// Eventos estándar de Meta que usaremos en la landing
export const META_EVENTS = {
  SCHEDULE: 'Schedule', // clic en "Agendar"
  LEAD: 'Lead', // clic en "Registrarme"
  CONTACT: 'Contact', // clic en WhatsApp
}

// Snippet oficial de Meta, adaptado a módulo
function loadPixelScript() {
  const fbq = function () {
    if (fbq.callMethod) {
      fbq.callMethod.apply(fbq, arguments)
    } else {
      fbq.queue.push(arguments)
    }
  }
  fbq.push = fbq
  fbq.loaded = true
  fbq.version = '2.0'
  fbq.queue = []
  window.fbq = fbq
  window._fbq = fbq

  const script = document.createElement('script')
  script.async = true
  script.src = 'https://connect.facebook.net/en_US/fbevents.js'
  document.head.appendChild(script)
}

export function initMetaPixel() {
  if (!PIXEL_ID || window.fbq) return

  loadPixelScript()
  window.fbq('init', PIXEL_ID)
  window.fbq('track', 'PageView')
}

export function trackEvent(eventName, params) {
  if (!window.fbq) return
  window.fbq('track', eventName, params)
}
