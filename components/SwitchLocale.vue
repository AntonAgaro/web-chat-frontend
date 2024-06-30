<script setup>
const { locale, setLocale } = useI18n();
</script>

<template>
<UButton
    data-testid="switch-locale-button"
    @click=" setLocale(locale === 'en' ? 'ru' : 'en');">{{locale === 'en' ? 'ru' : 'en'}}
</UButton>
</template>