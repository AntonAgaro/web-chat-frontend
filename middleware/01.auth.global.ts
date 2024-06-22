export default defineNuxtRouteMiddleware(async (to) => {
  if (import.meta.server)  {
    const token = useCookie('token');

    if (!token.value && to.path !== '/')  {
      return navigateTo('/');
    }

    const authState = useAuthState();
    const authController = useAuthController();
    const data = await  authController.getUserDetails(token.value ?? '');

    if (data.user) {
      authState.value.user = data.user;
      if (to.path === '/') {
        return navigateTo('/chats');
      }
    } else if (to.path !== '/') {
      return navigateTo('/');
    }
  } else if (import.meta.client) {
    const authState = useAuthState();

    if (to.path !== '/' && !authState.value.user) {
      const messageBuilder = useToast();
      messageBuilder.add({ title: 'You have to sign in!', color: 'red' });
      return navigateTo('/');
    }
  }
});