'use client';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import React, { useEffect } from 'react';
import { signInRequest } from '@/store/auth/auth.actions';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import {ROUTES} from "@/constants/routes";
import Button from "@/components/ui/button/button";
import Link from "next/link";

const formSchema = z.object({
	email: z.string().email({ message: 'Введите корректный email' }).min(1, {
		message: 'Введите email',
	}),
	password: z.string().min(1, {
		message: 'Введите пароль',
	}),
});

export const SignInForm = () => {
	const dispatch = useAppDispatch();
	const router = useRouter();
	const { error, loading, isAuthenticated } = useAppSelector((state) => state.auth);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	});

	useEffect(() => {
		if (isAuthenticated) {
			router.push(ROUTES.HOME);
		}
	}, [isAuthenticated, router]);

	const onSubmit = (values: z.infer<typeof formSchema>) => {
		dispatch(signInRequest(values));
	};

	return (
		<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 flex flex-col">
			<input
				className="input"
				type="email"
				placeholder="Почта"
				{...form.register('email')}
			/>
			{form.formState.errors.email && <p>{form.formState.errors.email.message}</p>}

			<input
				className="input"
				type="password"
				placeholder="Пароль"
				{...form.register('password')}
			/>
			{form.formState.errors.password && <p>{form.formState.errors.password.message}</p>}

			{error && <p>{error}</p>}

			<Button disabled={loading} type="submit">
				Войти
			</Button>
			<Link href={ROUTES.SIGN_UP} className="flex items-center justify-center gap-1 text-sm text-neutral-400">
				Нет аккаунта?
				<p className="text-white font-medium">Создать</p>
			</Link>
		</form>
	);
};
