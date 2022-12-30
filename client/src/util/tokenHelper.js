/**
 * 토큰 key
 */
const ACCESS_TOKEN = 'accessToken';

/**
 * 토큰불러오기
 * @returns token
 */
export const getToken = () => localStorage.getItem(ACCESS_TOKEN);

/**
 * 토큰저장
 * @param {*} accessToken
 * @returns
 */
export const setToken = (accessToken) =>
  localStorage.setItem(ACCESS_TOKEN, accessToken);

/**
 * 토큰날리기
 */
export const logout = () => localStorage.removeItem(ACCESS_TOKEN);

/**
 * 토큰유효여부
 * @returns boolean
 */
export const IS_ALIVE = () => !!getToken();
