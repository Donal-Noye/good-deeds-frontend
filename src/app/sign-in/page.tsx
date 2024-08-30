import {SignInForm} from "@/app/sign-in/SignInForm";

const SignInPage = () => {
	return (
		<div className="w-96 bg-[#1C1D22] p-6 rounded-lg mx-auto mt-44">
			<h1 className="text-3xl text-center font-medium mb-5">Вход в аккаунт</h1>
			<SignInForm />
		</div>
	)
};

export default SignInPage;
