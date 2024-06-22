import type { User } from '~/types/User';

export const useAuthState = () => useState('authState', (): { user: User | null} => ({
  user: null
}));

