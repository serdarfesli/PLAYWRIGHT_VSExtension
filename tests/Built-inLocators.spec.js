// @ts-check
import { test, expect } from '@playwright/test'

test('built in locators', async ({ page }) => {
await page.goto('https://dev.ofs-directory.bidout.app/')
await page.getByRole('link', { name: 'OFS DIRECTORY', exact: true })

})

