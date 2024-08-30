import SignUpForm from '@/app/sign-up/SignUpForm'

const SignUpPage = () => {
	return (
		<div className="w-96 bg-[#1C1D22] p-6 rounded-lg mx-auto mt-44">
			<h1 className="text-3xl text-center font-medium mb-5">Создать аккаунт</h1>
			<SignUpForm />
		</div>
	)
}

export default SignUpPage
