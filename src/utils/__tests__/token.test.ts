import { sign } from 'jsonwebtoken';

import { isTokenExpired, isProtectedRoute } from '@/utils/token';

describe('isTokenExpired', () => {
  it('should return true if the token is expired', () => {
    const expiredToken = sign({ exp: Math.floor(Date.now() / 1000) - 10 }, 'test-secret');
    expect(isTokenExpired(expiredToken)).toBe(true);
  });

  it('should return false if the token is not expired', () => {
    const validToken = sign({ exp: Math.floor(Date.now() / 1000) + 10 }, 'test-secret');
    expect(isTokenExpired(validToken)).toBe(false);
  });

  it('should return true if the token has no expiration', () => {
    const tokenWithoutExp = sign({}, 'test-secret');
    expect(isTokenExpired(tokenWithoutExp)).toBe(true);
  });
});

describe('isProtectedRoute', () => {
  it('should return true if the URL is a protected route', () => {
    const protectedRoute = '/posts';
    expect(isProtectedRoute(protectedRoute)).toBe(true);
  });

  it('should return false if the URL is not a protected route', () => {
    const unprotectedRoute = '/login';
    expect(isProtectedRoute(unprotectedRoute)).toBe(false);
  });
});
