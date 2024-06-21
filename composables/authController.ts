import { clientFetch, serverFetch } from '~/utils/functions';

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

  const getUserDetails = async (token: string) => {
    return await serverFetch(authUrl + '/user-details', {
      method: 'POST',
      body: JSON.stringify({ token: token })
    });

  };

  return { signin, signup, getUserDetails };
};
