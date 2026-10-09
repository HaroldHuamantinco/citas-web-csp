import step01 from '../assets/images/step-01.webp'
import step02 from '../assets/images/step-02.webp'
import step03 from '../assets/images/step-03.webp'

export const HIGHLIGHT_ITEMS = [
  { icon: 'person_search', text: 'Elige a tu especialista de confianza.' },
  { icon: 'event_available', text: 'Visualiza turnos libres en tiempo real.' },
  { icon: 'credit_card', text: 'Realiza tu pago 100% seguro.' },
]

export const BENEFITS = [
  {
    icon: 'schedule',
    title: 'Agenda las 24/7',
    text: 'Agenda a medianoche o un domingo; no dependas de los horarios de oficina de la central telefónica.',
  },
  {
    icon: 'calendar_month',
    title: 'Horarios en tiempo real',
    text: 'Mira exactamente qué días y a qué horas atiende tu médico favorito antes de decidir.',
  },
  {
    icon: 'badge',
    title: 'Ingreso directo',
    text: 'Tu cita ya está pagada. Al llegar a la clínica, no pasas por caja; presentas tu DNI y entras a tu atención.',
  },
  {
    icon: 'support_agent',
    title: 'Soporte en todo momento',
    text: 'Si tienes alguna duda o consulta, nuestro equipo en WhatsApp te asiste con un clic.',
  },
]

export const STEPS = [
  {
    image: step01,
    height: 445,
    alt: 'Lista de especialidades médicas en Citas Web',
    title: 'Selecciona la especialidad y el médico',
    text: 'Explora fácilmente nuestro staff de profesionales con sus perfiles y disponibilidad real.',
  },
  {
    image: step02,
    height: 445,
    alt: 'Calendario con las fechas disponibles para la cita',
    title: 'Elige una fecha y hora para tu atención',
    text: 'Visualiza el calendario en tiempo real y separa según tu comodidad y conveniencia.',
  },
  {
    image: step03,
    height: 445,
    alt: 'Formulario para confirmar datos y pagar la cita',
    title: 'Confirma tus datos y paga',
    text: 'Ingresa los datos de tu Tarjeta para finalizar la compra. Recibirás un correo con los detalles de tu cita.',
  },
]

export const FAQS = [
  {
    question: '¿Qué medios de pago se aceptan?',
    answer:
      'Todas las tarjetas de débito/crédito, así como pagos QR con billeteras móviles como Yape o Plin.',
  },
  {
    question: '¿Puedo sacar cita para mis hijos o padres mayores?',
    answer:
      'Sí, en el formulario ingresas los datos del paciente y tus datos como titular de pago.',
  },
  {
    question: '¿Qué debo presentar al llegar a la clínica?',
    answer: 'Únicamente el DNI del paciente en el módulo de triaje del piso correspondiente.',
  },
  {
    question: '¿Qué ocurre si necesito reprogramar o tengo un imprevisto?',
    answer:
      'Tu inversión está 100% protegida con la Garantía San Pedro. Si te surge una urgencia, puedes reprogramar la fecha de tu consulta sin costo adicional a través de nuestro canal de atención de WhatsApp o desde el enlace incluido en tu correo de confirmación',
  },
  {
    question: '¿Me entregarán boleta o factura para mi cita?',
    answer:
      'Sí. Al momento de realizar el pago, seleccionas si requieres boleta o factura electrónica. El comprobante con valor legal ante SUNAT se enviará automáticamente a tu correo electrónico registrado para tus trámites particulares o de reembolso con aseguradoras.',
  },
]
