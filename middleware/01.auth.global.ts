export default defineNuxtRouteMiddleware(async (to) => {
  if (import.meta.client) return;

  const token = useCookie('token');
  const messageBuilder = useToast();

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
    messageBuilder.add({ title: 'User is not authorized!', color: 'red' });
    return navigateTo('/');
  }

});

//TODO middleware for client, maybe watcher for authstate user