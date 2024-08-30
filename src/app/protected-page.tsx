'use client';

import { PropsWithChildren, ReactElement, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { profileRequest } from '@/store/auth/auth.actions';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/constants/routes';

export function protectedPage<P>(Component: (props: P) => ReactElement) {
	return function ProtectedPage(props: PropsWithChildren<P>) {
		const dispatch = useAppDispatch();
		const { loading, error } = useAppSelector((state) => state.profile);
		const router = useRouter();

		useEffect(() => {
			dispatch(profileRequest());
		}, [dispatch]);

		if (loading) {
			return <div>Loading...</div>;
		}

		if (error) {
			router.push(ROUTES.SIGN_IN);
		}

		return <Component {...props} />;
	};
}
