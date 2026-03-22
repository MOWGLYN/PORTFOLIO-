import { json, redirect } from '@remix-run/node';
import { themeStorage } from '~/utils/theme.server';

export const action = async ({ request }) => {
    const formData = await request.formData();
    const theme = formData.get('theme');

    const session = await themeStorage.getSession(request.headers.get('Cookie'));
    session.set('theme', theme);

    return json(
        { success: true },
        {
            headers: {
                'Set-Cookie': await themeStorage.commitSession(session),
            },
        }
    );
};

export const loader = () => redirect('/', { status: 404 });
