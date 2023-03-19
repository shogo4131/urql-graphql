import jwtDecode, { type JwtPayload } from 'jwt-decode';

export const isTokenExpired = (token: string) => {
  const { exp } = jwtDecode<JwtPayload>(token);
  if (!exp) return true;

  const currentTime = Math.floor(Date.now() / 1000);

  return exp < currentTime;
};

export const isProtectedRoute = (url: string) => {
  const protectedRoutes = ['/posts'];
  return protectedRoutes.some((route) => url.startsWith(route));
};
