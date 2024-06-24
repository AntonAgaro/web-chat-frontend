import { test, expect, } from '@playwright/test';
import type { Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('./', { waitUntil: 'domcontentloaded' });
  //TODO How to wait for hydration ?
  await page.waitForTimeout(1000);
});


test.describe('Test Auth', () => {
  const  loginUser = async (page: Page, user: {userName: string, password: string}) => {
    const { userName, password } = user;
    await page.fill('[data-testid="login-input"]', userName);
    await page.fill('[data-testid="password-input"]', password);
    await page.click('[data-testid="auth-form-btn"]');
    await expect(page).toHaveURL(/chats/);
  };

  test('should render page', async ({ page }) => {
    await expect(page.getByTestId('auth-form')).toBeVisible();
    await expect(page.getByTestId('auth-form-title')).toBeVisible();
    await expect(page.getByTestId('login-input')).toBeVisible();
    await expect(page.getByTestId('password-input')).toBeVisible();
    await expect(page.getByTestId('auth-form-btn')).toBeVisible();
    await expect(page.getByTestId('auth-mode-btn')).toBeVisible();
  });

  test('should change auth mode', async ({ page }) => {
    const authModeBtn = page.getByTestId('auth-mode-btn');
    const title = page.getByTestId('auth-form-title');
    await expect(title).toHaveText('Sign in');
    await authModeBtn.click();
    await expect(title).toHaveText('Sign up');
  });

  test('should create new user', async ({ page }) => {
    await page.getByTestId('auth-mode-btn').click();
    await loginUser(page, { userName: Date.now().toString(), password: Date.now().toString() + 'password' });
  });

  test('should sign in', async ({ page }) => {
    await loginUser(page, { userName: 'ivan1', password: '12345678' });
  });
  // TODO доделать
  test('should logout', async ({ page }) => {
    await loginUser(page, { userName: 'ivan1', password: '12345678' });
    await page.click('[data-testid="user-button"]');
    await page.click('[data-testid="logout-btn"]');
  });
});
