import { test, expect } from '@playwright/test'

test('locate multiple elements', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/')


    const allTheLinks = await page.$$('//a')  //locating multiple elements
    for (const eachLink of allTheLinks) {

        console.log(await eachLink.textContent());
    }

})