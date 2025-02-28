import { test, expect } from '@playwright/test';


//Test should pass
test('should load the homepage and display the correct content', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle("Qurio");
    const header = await page.locator('h1');
    await expect(header).toHaveText('Test');
})

//Test should fail
// test('should load the homepage with text', async ({ page }) => {
//     await page.goto('/');
//     await expect(page).toHaveTitle("Qurio Test");
//     const header = await page.locator('h1');
//     await expect(header).toHaveText('Test Test');
// })