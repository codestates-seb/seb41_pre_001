const ACCESS_TOKEN = 'accessToken';

export const getToken = () => localStorage.getItem(ACCESS_TOKEN);

export const setToken = (accessToken) =>
  localStorage.setItem(ACCESS_TOKEN, accessToken);

export const logout = () => {
  localStorage.removeItem(ACCESS_TOKEN);
};

export const IS_ALIVE = () => {
  return !!getToken();
};
