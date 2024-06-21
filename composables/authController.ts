import { clientFetch } from '~/utils/functions';

export const useAuthController = () => {
  const authUrl = useRuntimeConfig().public.baseApiUrl + '/auth';
  const signin = async (user: {username: string, password: string}) => {
    return await clientFetch(authUrl + '/signin', {
      method: 'POST',
      body: JSON.stringify({ user: user })
    });
  };
  const signup = async (user: {username: string, password: string}) => {
    return await clientFetch(authUrl + '/signup', {
      method: 'POST',
      body: JSON.stringify({ user: user })
    });
  };

  return { signin, signup };
};
