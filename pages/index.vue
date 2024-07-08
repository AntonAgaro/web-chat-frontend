<script setup lang="ts">
import { object, string } from 'yup';
import  { useAuthController } from '~/composables/authController';
import { useAuthState } from '~/composables/authState';
const { t } = useI18n();
const authController = useAuthController();
const schema = object({
  login: string().required(t('Required (Input)')),
  password: string()
    .min(8, t('MinSymbolsCount', { count: 8 }))
    .required(t('Required (Input)'))
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
      <h1
        class="text-4xl text-center"
        data-testid="auth-form-title"
      >
        {{ state.mode === AuthMode.SignIn ? $t('Sign in') : $t('Sign up') }}
      </h1>
      <UFormGroup :label="$t('Login')" name="login">
        <UInput
          v-model="state.login"
          color="blue"
          data-testid="login-input"
        />
      </UFormGroup>

      <UFormGroup :label="$t('Password')" name="password">
        <UInput
          v-model="state.password"
          color="blue"
          type="password"
          data-testid="password-input"
      />
      </UFormGroup>

      <UButton class="max-w-max" color="blue" type="submit" data-testid="auth-form-btn">
        {{ state.mode === AuthMode.SignIn ? $t('Sign in') : $t('Sign up') }}
      </UButton>
      <div>
        {{ $t("Don't have an account?") }}
        <span
          data-testid="auth-mode-btn"
          class="text-blue-600 cursor-pointer"
          @click="state.mode = state.mode === AuthMode.SignIn ? AuthMode.SignUp : AuthMode.SignIn"
        >
          {{ $t('Create') }}
        </span>
      </div>
    </UForm>
  </div>

</template>

