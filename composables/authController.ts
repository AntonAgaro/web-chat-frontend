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

  const logout = async () => {
    return await clientFetch(authUrl + '/logout', {
      method: 'POST'
    });
  };

  return { signin, signup, getUserDetails, logout };
};
