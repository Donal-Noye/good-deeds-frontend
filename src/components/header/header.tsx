'use client';

import styles from './header.module.scss';
import { useAppSelector } from '@/store/hooks';
import { Spinner } from '@/components/ui/spinner';
import Button from '@/components/ui/button/button';
import { UserRound } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { ROUTES } from '@/constants/routes';

export const Header = () => {
  const pathname = usePathname();
  const { profile } = useAppSelector((state) => state.profile);
  const router = useRouter();

  if (pathname === ROUTES.SIGN_IN || pathname === ROUTES.SIGN_UP) return null;

  return (
    <header className={styles.header}>
      <h3 className={styles.title}>Добро пожаловать, {profile?.name} 👋</h3>
      <Button onClick={() => router.push(ROUTES.PROFILE)}>
        <UserRound size={20} />
        Профиль
      </Button>
    </header>
  );
};
