import Cookies from 'js-cookie';

export const accessToken = 'access-token';

export const getAccessToken = () => {
	return Cookies.get(accessToken) || null;
};

export const saveTokenStorage = (accessToken: string) => {
  Cookies.set(accessToken, accessToken, {
    domain: 'localhost',
    sameSite: 'strict',
    expires: 1,
  });
};

export const removeFromStorage = () => {
  Cookies.remove(accessToken);
};
