const { test, expect } = require('@playwright/test');


test('Home Page', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/')

    const expectedPageTitle = "STOREasdasdasd"
    const expectedPageURL = "https://www.demoblaze.com/"

    await expect(page).toHaveTitle(expectedPageTitle)
    await expect(page).toHaveURL(expectedPageURL)

    page.close()

})