import {test, expect} from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('localhost:3000')

    await expect(page).toHaveTitle('Movie Database');
});
test('button', async ({page}) => {
    await page.getByRole('button')
})
test('form', async ({page}) => {
    await page.getByRole('form');
    await page.getByRole('input');
});
