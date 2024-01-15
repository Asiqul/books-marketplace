'use client';

import { Button } from '@/components/ui/button';
import { useSession } from 'next-auth/react';

export default function Home() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div>
      <div>Hello Dashboard</div>
      <Button variant="default">Click me</Button>
    </div>
  );
}
