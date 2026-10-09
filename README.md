# Citas Web — Landing page · Clínica San Pedro

Landing page informativa del servicio **Citas Web**, cuyo objetivo es educar a los pacientes sobre las ventajas de agendar y pagar sus citas en línea en [Mi Portal San Pedro](https://citasweb.clinicasanpedro.com).

**Tecnologías:** React 19 · Vite 8 · Tailwind CSS 4 · Google Material Symbols

## Requisitos

- **Node.js 24** (mínimo 20.19). La versión exacta está en `.nvmrc`.
- **npm** 10 o superior.

## Instalación

```bash
npm ci
```

> Usar `npm ci` (no `npm install`): instala exactamente las versiones registradas en `package-lock.json`, garantizando el mismo resultado en cualquier máquina.

Luego crear el archivo de variables de entorno a partir de la plantilla:

```bash
cp .env.example .env
```

y completar sus valores (ver siguiente sección).

## Variables de entorno (`.env`)

| Variable | Descripción | Ejemplo |
|---|---|---|
| `VITE_SITE_URL` | Dominio público de la landing, **sin `/` al final**. Se usa en las etiquetas SEO y de redes sociales. | `https://citasweb.clinicasanpedro.com` |
| `VITE_META_PIXEL_ID` | ID del Píxel de Meta. **Vacío = píxel desactivado.** | `123456789012345` |

> ⚠️ Estas variables se **incrustan al compilar**. Si se cambian, hay que volver a ejecutar `npm run build`.

## Comandos

| Comando | Uso |
|---|---|
| `npm run dev` | Servidor de desarrollo en `http://localhost:5173` |
| `npm run build` | Compila la versión de producción en `dist/` |
| `npm run preview` | Sirve `dist/` localmente en `http://localhost:4173` para revisarla |
| `npm run lint` | Revisa el código (Oxlint) |
| `npm run format` | Formatea el código (Prettier) |

## Despliegue

1. Completar el `.env` con los valores de producción.
2. Ejecutar `npm ci` y `npm run build`.
3. Publicar **el contenido de la carpeta `dist/`** en la **raíz** del dominio o subdominio. Es un sitio 100% estático: funciona en cualquier servidor web (Nginx, Apache, IIS) o hosting estático. No requiere Node.js en el servidor.

> ⚠️ El proyecto está preparado para publicarse en la **raíz** de un dominio/subdominio (ej. `https://citasweb.clinicasanpedro.com/`). Publicarlo dentro de una subcarpeta (ej. `/citas-web/`) requiere ajustes adicionales.

### Configuración recomendada del servidor

- **Compresión** gzip o brotli activada.
- **Caché:**
  - `/assets/*` → 1 año, `immutable` (los nombres incluyen un hash que cambia en cada versión).
  - `/videos/*` y `/fonts/*` → 30 días.
  - `index.html` → sin caché (`no-cache`), para que siempre se sirva la última versión.
- **Tipos MIME** necesarios: `.webm` → `video/webm`, `.woff2` → `font/woff2`, `.webp` → `image/webp`.

## Estructura del proyecto

```
public/                 Archivos servidos tal cual (favicon, imagen OG, fuentes, videos)
src/
├─ assets/images/       Imágenes optimizadas (WebP / SVG)
├─ components/
│  ├─ layout/           TopBar, Header, menú móvil, submenú, Footer
│  ├─ media/            Video del Hero
│  └─ ui/               Componentes reutilizables (Button, Icon, Container, Reveal…)
├─ config/site.js       Links, WhatsApp, dirección, menú y redes sociales
├─ content/landing.js   Textos de la landing (beneficios, pasos, preguntas frecuentes)
├─ hooks/               Hooks reutilizables
├─ lib/analytics/       Píxel de Meta
├─ sections/            Secciones de la página
└─ styles/index.css     Colores de marca, tipografía y estilos base
```

## Mantenimiento frecuente

- **Cambiar textos:** `src/content/landing.js`.
- **Cambiar links, WhatsApp o redes:** `src/config/site.js`.
- **Cambiar colores o fuente:** `src/styles/index.css` (bloque `@theme`).
- **Agregar un ícono:** usar el nombre de [Google Material Symbols](https://fonts.google.com/icons) y **añadirlo a `icon_names` en `index.html`**, en orden alfabético.

## Medición (Píxel de Meta)

Eventos que se envían automáticamente cuando `VITE_META_PIXEL_ID` tiene un valor:

| Evento | Cuándo |
|---|---|
| `PageView` | Al cargar la página |
| `Schedule` | Clic en cualquier botón "Agendar" |
| `Lead` | Clic en "Registrarme" |
| `Contact` | Clic en WhatsApp (consulta o reprogramación) |

## Licencias

- **Causten** es una fuente comercial: verificar que la licencia de la clínica incluya uso web.
- Íconos: Google Material Symbols (licencia Apache 2.0).