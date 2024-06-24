import { it, describe, expect } from 'vitest';
// import { useAuthState } from './auth';
import { mountSuspended } from '@nuxt/test-utils/runtime';
import { AppHeader } from '#components';

describe('AppHeader', () => {
  it('can mount the component', async () => {
    const component = await mountSuspended(AppHeader);
    expect(component.html()).toContain('data-testid="app-header"');
  });

  it('displays user button when authenticated', async () => {
    const authState = useAuthState();
    authState.value.user = { username: 'some-user', id: 1, roles: [] };
    const component = await mountSuspended(AppHeader);

    expect(component.html()).toContain('data-testid="user-button"');
  });

  it('does not display user button when not authenticated', async () => {
    const authState = useAuthState();
    authState.value.user = null;

    const component = await mountSuspended(AppHeader);

    expect(component.html()).not.toContain('data-testid="user-button"');
  });
});