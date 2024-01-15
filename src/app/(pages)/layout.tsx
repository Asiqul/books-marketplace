'use client';

import { SessionProvider } from 'next-auth/react';
import { disableHeader } from '@/fragments/header';
import { usePathname } from 'next/navigation';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  return (
    <>
      <div className={`container mx-auto ${!disableHeader.includes(pathname) ? 'mt-32 md:mt-20' : 'mt-20'}`}>
        <SessionProvider>{children}</SessionProvider>
      </div>
    </>
  );
};

export default Layout;
