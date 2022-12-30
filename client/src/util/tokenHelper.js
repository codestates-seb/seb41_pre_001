import { useNavigate } from 'react-router';

const ACCESS_TOKEN = 'accessToken';

export const getToken = () => localStorage.getItem(ACCESS_TOKEN);

export const setToken = (accessToken) =>
  localStorage.setItem(ACCESS_TOKEN, accessToken);

export const logout = () => {
  localStorage.removeItem(ACCESS_TOKEN);
  const navigate = useNavigate();
  navigate('/home');
};

export const IS_ALIVE = () => {
  return !!getToken();
};
