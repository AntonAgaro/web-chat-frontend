import { describe, it, expect } from 'vitest';
import { mountSuspended } from '@nuxt/test-utils/runtime';
import { SwitchTheme } from '#components';
describe('UserButton', () => {
  it('can mount the component', async () => {
    const component = await mountSuspended(SwitchTheme);
    expect(component.html()).toContain('data-testid="switch-theme"');
  });

});