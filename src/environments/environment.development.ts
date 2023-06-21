const baseUrl = 'http://localhost:3000/api/';

export const environment: any = {
  production: false,
  baseUrl,
  appData: baseUrl + 'appdata',
  posts: baseUrl + 'posts',
  login: baseUrl + 'login',
  signUp: baseUrl + 'signup',
};
