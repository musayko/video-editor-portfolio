import Image from 'next/image';

interface ClientLogoProps {
  name: string;
  logo: string;
}

export default function ClientLogo({ name, logo }: ClientLogoProps) {
  const isSvg = logo.endsWith('.svg');
  const isClient4 = logo.includes('client4');

  return (
    <div className="flex items-center justify-center p-4">
      <div className="relative w-full h-24 flex items-center justify-center">
        <Image
          src={logo}
          alt={`${name} logo`}
          fill
          className={`object-contain ${
            isSvg ? 'scale-75' : 'scale-100'
          } ${
            isClient4 ? 'scale-75' : ''
          } transition-transform duration-300 hover:scale-[1.1]`}
        />
      </div>
    </div>
  );
}


