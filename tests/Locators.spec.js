// @ts-check
import { test, expect } from '@playwright/test'

test('Locators', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/')

    await page.click('id=login2')
    await page.fill("//input[@id='loginusername']", 'pavanol')
    await page.fill('#loginpassword', 'test@123')
    await page.click("//button[normalize-space()='Log in']")

    const logout = page.locator("#logout2")
    await expect(logout).toBeVisible()

        
    
    await page.close()

})
