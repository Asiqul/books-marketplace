'use client';

import { SessionProvider } from 'next-auth/react';

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}

export default DashboardLayout;
