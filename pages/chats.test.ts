import { it, describe, expect } from 'vitest';
import  chats  from './chats.vue';
import { mountSuspended } from '@nuxt/test-utils/runtime';
describe('Chats page', () => {
  it('should render chats page', async () => {
    const component = await mountSuspended(chats);
    expect(component.html()).toContain('data-testid="chats-page"');
  });
});