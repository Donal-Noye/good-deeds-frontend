'use client';

import styles from './sidebar.module.scss';
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';
import { Nav } from '@/components/sidebar/nav';
import { useLogout } from '@/hooks/useLogout';
import { LogOut } from 'lucide-react';
import {usePathname} from "next/navigation";

export const Sidebar = () => {
	const pathname = usePathname()
  const { handleLogout } = useLogout();

	if (pathname === ROUTES.SIGN_UP || pathname === ROUTES.SIGN_IN) return null;

	return (
    <aside className={styles.sidebar}>
      <Link className={styles.logo} href={ROUTES.HOME}>
        GD
      </Link>
      <Nav />
      <button className={styles.logout} onClick={handleLogout}>
        <LogOut />
      </button>
    </aside>
  );
};
