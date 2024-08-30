'use client';

import React, { useState } from 'react';
import {useAppDispatch, useAppSelector} from '@/store/hooks';
import {signUpRequest} from "@/store/auth/auth.actions";
import { z } from "zod"
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import Button from "@/components/ui/button/button";
import Link from "next/link";
import {ROUTES} from "@/constants/routes";

const formSchema = z.object({
	email: z.string().email(),
	name: z.string().min(1),
	password: z.string().min(5),
})

const SignUpForm: React.FC = () => {
  const dispatch = useAppDispatch();
	const { loading } = useAppSelector((state) => state.auth);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			name: "",
			password: ""
		},
	})

	function onSubmit(values: z.infer<typeof formSchema>) {
		dispatch(signUpRequest({ email: values.email, password: values.password, name: values.name }));
	}

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
			  type="text"
			  placeholder="Имя"
			  {...form.register('name')}
		  />
		  {form.formState.errors.email && <p>{form.formState.errors.email.message}</p>}
		  <input
			  className="input"
			  type="password"
			  placeholder="Пароль"
			  {...form.register('password')}
		  />
		  {form.formState.errors.email && <p>{form.formState.errors.email.message}</p>}
		  <Button type="submit" disabled={loading}>
			  Зарегистрироваться
		  </Button>
		  <Link href={ROUTES.SIGN_IN} className="flex items-center justify-center gap-1 text-sm text-neutral-400">
			  Уже есть аккаунт?
				<p className="text-white font-medium">Войти</p>
			</Link>
	  </form>
  );
};

export default SignUpForm;
