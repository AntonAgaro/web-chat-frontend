import { it, describe, expect } from 'vitest';
import ChatCard from '../components/ChatCard.vue';
import { mountSuspended } from '@nuxt/test-utils/runtime';

describe('Chat card', () => {
  it('should render chat card', async () => {
    const component = await mountSuspended(ChatCard);
    expect(component.html()).toContain('data-testid="chat-card"');
  });
});