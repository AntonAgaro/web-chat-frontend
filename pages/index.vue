<script setup lang="ts">
import { object, string, type InferType } from 'yup';
import type { FormSubmitEvent } from '#ui/types';

const schema = object({
  login: string().required('Required'),
  password: string()
    .min(8, 'Must be at least 8 characters')
    .required('Required')
});

type Schema = InferType<typeof schema>;

const state = reactive({
  login: undefined,
  password: undefined
});

async function onSubmit (event: FormSubmitEvent<Schema>) {
  // Do something with event.data
  console.log(event.data);
}
</script>

<template>
  <div class="h-full w-full flex align-middle justify-center">
    <UForm :schema="schema" :state="state" class="w-full max-w-lg flex flex-col align-middle justify-center space-y-6" @submit="onSubmit">
      <UFormGroup label="Login" name="login">
        <UInput v-model="state.login" color="blue" />
      </UFormGroup>

      <UFormGroup label="Password" name="password">
        <UInput v-model="state.password" color="blue" type="password" />
      </UFormGroup>

      <UButton class="max-w-max" color="blue" type="submit">
        Submit
      </UButton>
    </UForm>
  </div>

</template>

