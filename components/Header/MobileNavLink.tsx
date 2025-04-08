import Link from 'next/link';

export default function MobileNavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <Link
      href={href}
      className="text-sm font-bold py-2 px-4 w-full text-center hover:bg-gray-200 transition-colors"
      onClick={onClick}
    >
      {children}
    </Link>
  );
}