import Link from 'next/link';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
}

export default function NavLink({ href, children, className = '', ariaLabel }: NavLinkProps) {
  const isExternal = href.startsWith('http');

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`text-sm font-bold tracking-normal hover:text-gray-600 transition-colors ${className}`}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={`text-sm font-bold tracking-normal hover:text-gray-600 transition-colors ${className}`}
      aria-label={ariaLabel}
    >
      {children}
    </Link>
  );
}
