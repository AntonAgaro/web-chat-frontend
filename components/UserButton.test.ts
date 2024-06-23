import { describe, it, expect } from 'vitest';
import { mountSuspended } from '@nuxt/test-utils/runtime';
import { UserButton } from '#components';

describe('UserButton', () => {
  it('can mount the component', async () => {
    const component = await mountSuspended(UserButton);
    expect(component.html()).toContain('data-testid="user-button"');
  });
});