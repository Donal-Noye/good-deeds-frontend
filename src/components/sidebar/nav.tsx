'use client';

import {Handshake, Home, Users} from 'lucide-react';
import { ROUTES } from '@/constants/routes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utlis';

const items = [
  {
    icon: <Home />,
    href: ROUTES.HOME,
  },
  {
    icon: <Users />,
    href: ROUTES.USERS,
  },
  {
    icon: <Handshake />,
    href: ROUTES.FRIENDS,
  },
];

export const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-y-2">
      {items.map((item) => (
        <Link
          className={cn(
            "h-16 w-16 flex items-center justify-center rounded-full text-neutral-400 transition-colors hover:bg-white/10 hover:text-white",
            pathname === item.href && 'bg-white/10 text-white',
          )}
          href={item.href}
          key={item.href}
        >
          {item.icon}
        </Link>
      ))}
    </nav>
  );
};
