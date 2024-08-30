export interface ISignUpBody {
	email: string;
	password: string;
	name: string;
}

export interface ISignUpResponse {
	accessToken: string;
	user: {
		id: string;
		email: string;
		name: string;
	};
}

export interface ISignInBody {
	email: string;
	password: string;
}

export interface ISignInResponse {
	user: {
		id: string;
		email: string;
		name: string;
		tag?: string;
	};
	accessToken: string;
}

export interface IProfileBody {
	id: string
	email: string
	name: string;
	tag: string;
}