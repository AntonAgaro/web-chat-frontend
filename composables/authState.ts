export const useAuthState = () => useState('authState', () => ({
  user: null
}));