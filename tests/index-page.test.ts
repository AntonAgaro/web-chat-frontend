import { it, describe, expect } from 'vitest';
import indexPage from '../pages/index.vue';
import { mountSuspended } from '@nuxt/test-utils/runtime';

describe('Index page', () => {
  it('should render index page', async () => {
    const component = await mountSuspended(indexPage);
    expect(component.html()).toContain('data-testid="index-page"');
    expect(component.html()).toContain('data-testid="auth-form"');
    expect(component.html()).toContain('Sign in');
  });
});