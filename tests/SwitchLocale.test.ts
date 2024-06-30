import { it, describe, expect } from 'vitest';
import SwitchLocale from '../components/SwitchLocale.vue';
import { mockNuxtImport, mountSuspended } from '@nuxt/test-utils/runtime';

mockNuxtImport('useI18n', () => {
  return () => {
    return { locale: 'ru', setLocale: () => null };
  };
});
describe('SwitchLocale', () => {
  it('should render switch locale button', async () => {
    const component = await mountSuspended(SwitchLocale);
    expect(component.html()).toContain('data-testid="switch-locale-button"');
  });
});