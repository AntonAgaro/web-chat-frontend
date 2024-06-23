<script setup lang="ts">
import { object, string } from 'yup';
import  { useAuthController } from '~/composables/authController';
import { useAuthState } from '~/composables/authState';

const authController = useAuthController();
const schema = object({
  login: string().required('Required'),
  password: string()
    .min(8, 'Must be at least 8 characters')
    .required('Required')
});

enum AuthMode {
  SignUp = 'signup',
  SignIn = 'signin'
}

const state = ref({
  mode: AuthMode.SignIn,
  login: '',
  password: ''
});

const authState = useAuthState();
const router = useRouter();

//TODO добавить тесты и hacky
async function onSubmit () {
  const user = {
    username: state.value.login,
    password: state.value.password
  };

  const res = await authController[state.value.mode === AuthMode.SignIn ? 'signin' : 'signup'](user);
  if (res.user ) {
    authState.value.user = res.user;
    await router.push('/chats');
  }

  console.log('from page: ', res);
}
</script>

<template>
  <div class="h-full w-full flex align-middle justify-center" data-testid="index-page">
    <UForm
        :schema="schema"
        :state="state"
        class="w-full max-w-lg flex flex-col align-middle justify-center space-y-6"
        data-testid="auth-form"
        @submit="onSubmit"
    >
      <h1 class="text-4xl text-center">{{ state.mode === AuthMode.SignIn ? 'Sign in' : 'Sign up' }}</h1>
      <UFormGroup label="Login" name="login">
        <UInput v-model="state.login" color="blue" />
      </UFormGroup>

      <UFormGroup label="Password" name="password">
        <UInput v-model="state.password" color="blue" type="password" />
      </UFormGroup>

      <UButton class="max-w-max" color="blue" type="submit">
        Submit
      </UButton>
      <div>
        Don't have an account?
        <span
          data-testid="auth-mode-btn"
          class="text-blue-600 cursor-pointer"
          @click="() => {state.mode = state.mode === AuthMode.SignIn ? AuthMode.SignUp : AuthMode.SignIn;console.log('12313123')}"
        >
          Create
        </span>
      </div>
    </UForm>
  </div>

</template>

