import Link from 'next/link';

// Definindo uma interface para as props
interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string; // Permitindo classes personalizadas
  ariaLabel?: string; // Adicionando suporte para aria-label
}

export default function NavLink({ href, children, className = '', ariaLabel }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`text-sm font-bold tracking-normal hover:text-gray-600 transition-colors ${className}`}
      aria-label={ariaLabel} // Adicionando aria-label para acessibilidade
    >
      {children}
    </Link>
  );
}