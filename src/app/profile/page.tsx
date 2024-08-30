"use client"

import React from 'react';
import {useAppDispatch, useAppSelector} from "@/store/hooks";
import UpdateUserForm from "@/app/profile/UpdateUserForm";
import {protectedPage} from "@/app/protected-page";
import {deleteUser} from "@/store/users/users.actions";
import Button from "@/components/ui/button/button";
import {useRouter} from "next/navigation";
import {ROUTES} from "@/constants/routes";

const ProfilePage = () => {
	const dispatch = useAppDispatch();
	const {profile, loading, error} = useAppSelector((state) => state.profile);
	const router = useRouter();

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error: {error}</div>;

	if (!profile) return <p>No session information available</p>

	const handleDeleteUser = () => {
		dispatch(deleteUser(profile.id));
		router.push(ROUTES.SIGN_UP)
	};

	return (
		<div className="space-y-12">
			<div className="space-y-1.5 text-lg">
				<p>ID: {profile.id}</p>
				<p>Email: {profile.email}</p>
				<p>Name: {profile.name}</p>
				<p>Tag: {profile.tag}</p>
			</div>
			<UpdateUserForm {...profile} />
			<Button onClick={handleDeleteUser} className="!bg-rose-500">Удалить аккаунт</Button>
		</div>
	);
};

export default protectedPage(ProfilePage);
