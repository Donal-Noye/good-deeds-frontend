"use client"

import { useAppDispatch } from '@/store/hooks';
import { updateUser } from '@/store/users/users.actions';
import { useState } from 'react';
import Button from "@/components/ui/button/button";
import {IUserBody} from "@/services/users/users.types";
import { z } from "zod"
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";

const formSchema = z.object({
	name: z.string().min(1, {
		message: "Name must be at least 1 characters.",
	}).max(50),
	email: z.string().email(),
})

const UpdateUserForm = ({ name, email, tag, id }: IUserBody) => {
	const dispatch = useAppDispatch();

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: name,
			email: email,
		},
	})

	function onSubmit(values: z.infer<typeof formSchema>) {
		if (id) {
			dispatch(updateUser({ id, body: { name: values.name, email: values.email, tag: tag || '' } }));
		}
	}

	return (
		<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 mt-12">
			<h3 className="text-xl font-medium">Обновить профиль</h3>
			<label className="block">
				<p className="mb-1 text-sm text-neutral-400">Имя</p>
				<input
					type="text"
					className="bg-shark px-4 py-2 rounded-lg"
					{...form.register('name')}
				/>
			</label>
			<label className="block">
				<p className="mb-1 text-sm text-neutral-400">Почта</p>
				<input
					type="email"
					className="bg-shark px-4 py-2 rounded-lg"
					{...form.register('email')}
				/>
			</label>
			<Button type="submit">
				Update
			</Button>
		</form>
	);
};

export default UpdateUserForm;
