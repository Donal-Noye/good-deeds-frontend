"use client"

import {Heading} from "@/components/ui/heading";
import {protectedPage} from "@/app/protected-page";
import UsersForm from "@/app/users/UsersForm";
import {useAppDispatch, useAppSelector} from "@/store/hooks";
import {UserCard} from "@/components/user-card";
import {useEffect, useState} from "react";
import {fetchAllFriends} from "@/store/friends/friends.actions";

const UsersPage = () => {
	const dispatch = useAppDispatch();
	const { user, loading, error } = useAppSelector((state) => state.users);
	const friends = useAppSelector((state) => state.friends.friends);

	const [inputValue, setInputValue] = useState('');

	useEffect(() => {
		dispatch(fetchAllFriends());
	}, [dispatch])

	const handleInputChange = (value: string) => {
		setInputValue(value);
	};

	return (
		<div>
			<Heading title="Поиск по тэгу" />
			<UsersForm onInputChange={handleInputChange} />

			{loading && <p>Loading...</p>}
			{error && <p className="text-red-500">{error}</p>}

			{inputValue.trim() && user && (
				<div className="mt-4 w-96">
					<UserCard {...user} friends={friends} isFriend />
				</div>
			)}
		</div>
	);
};

export default protectedPage(UsersPage);
