"use client"

import {useAppDispatch} from "@/store/hooks";
import {useRouter} from "next/navigation";
import {signOutRequest} from "@/store/auth/auth.actions";
import {ROUTES} from "@/constants/routes";

export const useLogout = () => {
	const dispatch = useAppDispatch();
	const router = useRouter();

	const handleLogout = async () => {
		await dispatch(signOutRequest());
		router.push(ROUTES.SIGN_IN);
	};

	return {
		handleLogout
	}
}
