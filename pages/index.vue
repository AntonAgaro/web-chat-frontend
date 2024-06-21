<script setup lang="ts">
import { object, string } from 'yup';
import  { useAuthController } from '~/composables/authController';

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

//TODO сделать глобальный слушатель на ответы сервера и выводить сообщения
//TODO вынимать здесь из ответов user и помещать в стейт
//TODO сделать защиту роутов и редирект если есть юзер
//TODO добавить тесты и hacky
async function onSubmit () {
  const user = {
    username: state.value.login,
    password: state.value.password
  };

  const res = await authController[state.value.mode === AuthMode.SignIn ? 'signin' : 'signup'](user);
  console.log('from page: ', res);
}
</script>

<template>
  <div class="h-full w-full flex align-middle justify-center">
    <UForm
        :schema="schema"
        :state="state"
        class="w-full max-w-lg flex flex-col align-middle justify-center space-y-6"
        @submit="onSubmit"
    >
      <h1 class="text-4xl text-center">{{ state.mode === AuthMode.SignIn ? 'Sign in' : 'Sign up' }}</h1>
      <UFormGroup label="Login" name="login">
        {{state.login}}
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
          class="text-blue-600 cursor-pointer"
          @click="state.mode = state.mode === AuthMode.SignIn ? AuthMode.SignUp : AuthMode.SignIn"
        >
          Create
        </span>
      </div>
    </UForm>
  </div>

</template>

