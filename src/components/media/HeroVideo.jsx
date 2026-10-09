import { useRef } from 'react'
import { useMediaQuery } from '../../hooks/useMediaQuery.js'
import Icon from '../ui/Icon.jsx'

const VIDEOS = {
  mobile: {
    poster: '/videos/hero-poster-mobile.webp',
    teaserWebm: '/videos/hero-teaser-mobile.webm',
    teaserMp4: '/videos/hero-teaser-mobile.mp4',
    full: '/videos/hero-full-mobile.mp4',
  },
  desktop: {
    poster: '/videos/hero-poster-desktop.webp',
    teaserWebm: '/videos/hero-teaser-desktop.webm',
    teaserMp4: '/videos/hero-teaser-desktop.mp4',
    full: '/videos/hero-full-desktop.mp4',
  },
}

export default function HeroVideo() {
  const isDesktop = useMediaQuery('(min-width: 48rem)')
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')
  const saveData = navigator.connection?.saveData === true
  const canAutoplay = !prefersReducedMotion && !saveData

  const dialogRef = useRef(null)
  const fullVideoRef = useRef(null)
  const media = isDesktop ? VIDEOS.desktop : VIDEOS.mobile

  const openVideo = () => {
    dialogRef.current?.showModal()
    fullVideoRef.current?.play()
  }
  const closeVideo = () => dialogRef.current?.close()
  const handleDialogClick = (event) => {
    if (event.target === event.currentTarget) closeVideo()
  }

  return (
    <div className="relative aspect-4/5 overflow-hidden rounded-3xl bg-brand-50 md:aspect-12/5">
      {canAutoplay ? (
        <video
          key={media.teaserMp4}
          poster={media.poster}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
          className="size-full object-cover"
        >
          <source src={media.teaserWebm} type="video/webm" />
          <source src={media.teaserMp4} type="video/mp4" />
        </video>
      ) : (
        <img src={media.poster} alt="" className="size-full object-cover" />
      )}

      <button
        type="button"
        onClick={openVideo}
        aria-label="Reproducir video: cómo agendar tu cita en Citas Web"
        className="group absolute inset-0 grid place-items-center"
      >
        <span className="grid size-16 place-items-center rounded-full border-2 border-white bg-ink/30 text-white backdrop-blur-sm transition-transform group-hover:scale-110 md:size-20">
          <Icon name="play_arrow" size={40} filled />
        </span>
      </button>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-linear-to-t from-white to-transparent"
      />

      <dialog
        ref={dialogRef}
        onClose={() => fullVideoRef.current?.pause()}
        onClick={handleDialogClick}
        aria-label="Video de Citas Web"
        className="m-auto max-h-dvh w-full max-w-sm bg-transparent p-4 backdrop:bg-ink/80 md:max-w-5xl"
      >
        <div className="mb-3 flex justify-end">
          <button
            type="button"
            onClick={closeVideo}
            aria-label="Cerrar video"
            className="grid size-11 place-items-center rounded-full bg-white text-ink hover:bg-brand-50"
          >
            <Icon name="close" size={24} />
          </button>
        </div>
        <video
          ref={fullVideoRef}
          src={media.full}
          controls
          playsInline
          preload="none"
          className="w-full rounded-2xl bg-black"
        />
      </dialog>
    </div>
  )
}
