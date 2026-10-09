const VARIANTS = {
  primary: 'bg-brand-500 text-white hover:bg-accent-600 focus-visible:outline-brand-500',
  outline:
    'border border-brand-500 bg-white text-brand-500 hover:bg-brand-50 focus-visible:outline-brand-500',
  white: 'bg-white text-brand-500 hover:bg-brand-50 focus-visible:outline-brand-500',
  accent: 'bg-accent-600 text-white hover:bg-accent-600 focus-visible:outline-white',
}

const SIZES = {
  md: 'px-4 py-2.5 text-sm sm:px-5',
  lg: 'px-8 py-3.5 text-base',
}

export default function ButtonLink({
  href,
  variant = 'primary',
  size = 'lg',
  external = false,
  className = '',
  children,
  ...props
}) {
  const externalProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {}

  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 ${VARIANTS[variant]} ${SIZES[size]} ${className}`}
      {...externalProps}
      {...props}
    >
      {children}
    </a>
  )
}
