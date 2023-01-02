import { getTOKEN } from './tokenHelper';

/**
 * https://junglast.com/blog/http-ajax-withcredential
 * defaultValue: false
 * - 쿠키를 첨부해서 보내는 요청
 * - 헤더에 Authoriztion항목이 있는 요청
 * true
 * @returns withCredentials
 */
export const pushDefaultConfig = () => {
  return { withCredentials: true };
};

/**
 * 토큰값이 필요할때
 * @returns withCredentials, Authorization
 */
export const pushDefaultWithToken = () => {
  const config = pushDefaultConfig();
  config.headers = { Authorization: getTOKEN() };
  return config;
};

// /**
//  * 추가로 axios config에 넣을값이 있을 때
//  * @param {*} key 추가할 key
//  * @param {*} value 추가할 value
//  * @param {*} isDefualt withCredentials설정
//  * @param {*} targetConfig 기존에 있는것에 추가할때
//  * @returns
//  */
// export const pushValueInConfig = (key, value, isDefualt, targetConfig) => {
//   const defaultConfig = pushDefaultConfig();

//   if (targetConfig) {
//     if (!targetConfig[key]) {
//       targetConfig[key] = value;
//       if (isDefualt && !targetConfig.withCredentials) {
//         return { ...targetConfig, defaultConfig };
//       }
//       return targetConfig;
//     }
//   }

//   targetConfig = { key: value };
//   if (isDefualt) {
//     targetConfig = { ...targetConfig, defaultConfig };
//   }
//   return targetConfig;
// };
