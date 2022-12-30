import axios from 'axios';
import { getToken, logout } from './tokenHelper';

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASEURL,
});

instance.interceptors.request.use(
  (config) => {
    const accessToken = getToken();
    if (!accessToken) {
      return config;
    } else {
      config.headers['Authorization'] = 'Bearer ' + accessToken;
    }
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  async (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    const { response: errorResponse } = error;

    const originalRequest = error.config;
    console.log(originalRequest);

    //인증 에러 발생시
    if (errorResponse.status === 401) {
      logout();
      //return await resetTokenAndReattemptRequest(error);
      return false;
    }

    alert(errorResponse.status);
    return Promise.reject(error);
  }
);

//TODO 서버단 Refresh Token 구현X
/* let isAlreadyFetchingAccessToken = false;
let subscribers = [];

async function resetTokenAndReattemptRequest(error) {
  try {
    const { response: errorResponse } = error;

    // subscribers에 access token을 받은 이후 재요청할 함수 추가 (401로 실패했던)
    // retryOriginalRequest는 pending 상태로 있다가
    // access token을 받은 이후 onAccessTokenFetched가 호출될 때
    // access token을 넘겨 다시 axios로 요청하고
    // 결과값을 처음 요청했던 promise의 resolve로 settle시킨다.
    const retryOriginalRequest = new Promise((resolve, reject) => {
      addSubscriber(async (accessToken) => {
        try {
          errorResponse.config.headers['Authorization'] =
            'Bearer ' + accessToken;
          resolve(instance(errorResponse.config));
        } catch (err) {
          reject(err);
        }
      });
    });

    // refresh token을 이용해서 access token 요청
    if (!isAlreadyFetchingAccessToken) {
      isAlreadyFetchingAccessToken = true; // 문닫기 (한 번만 요청)

      //const { data } = await postRefresh();
      setToken(data.access);
      //storeUserToken('refresh', data.refresh);

      isAlreadyFetchingAccessToken = false; // 문열기 (초기화)

      onAccessTokenFetched(data.access);
    }

    return retryOriginalRequest; // pending 됐다가 onAccessTokenFetched가 호출될 때 resolve
  } catch (error) {
    signOut();
    return Promise.reject(error);
  }
}

function addSubscriber(callback) {
  subscribers.push(callback);
}

function onAccessTokenFetched(accessToken) {
  subscribers.forEach((callback) => callback(accessToken));
  subscribers = [];
}
 */

export default instance;
