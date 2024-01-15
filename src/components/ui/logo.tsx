import Link from 'next/link';

const Logo = ({ className, size }: { className?: string; size: string }) => {
  return (
    <div className={className}>
      <Link href="/" className={`${size}`}>
        <h1 className="font-logo font-bold text-primary">
          Buku<span className="text-primary">Kita</span>
        </h1>
      </Link>
    </div>
  );
};

export default Logo;
