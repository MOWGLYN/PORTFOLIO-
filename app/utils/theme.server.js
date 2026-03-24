import { createCookieSessionStorage } from '@remix-run/node';

export const themeStorage = createCookieSessionStorage({
  cookie: {
    name: 'theme',
    path: '/',
    httpOnly: true,
    sameSite: 'lax',
    secrets: ['s3cret1'], // Replace with a real secret in production
  },
});
