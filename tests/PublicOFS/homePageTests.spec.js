// @ts-check
import {  expect, test } from "@playwright/test";
import { PublicOFS_HomePage } from '../../POM/PublicOFS_HomePage';

test.describe('verify link are redirecting correct pages', () => {
   
    test('product link', async ({ page }) => {
        const publicOfs= new PublicOFS_HomePage(page);
        await page.goto('https://dev.ofs-directory.bidout.app/')
        await publicOfs.productLink.click()
        await expect(page).toHaveTitle('RFx Procurement Platform - BidOut')
        })

        test('get started link',  async ({page})=> {
            const publicOfs= new PublicOFS_HomePage(page);
            await page.goto('https://dev.ofs-directory.bidout.app/')
        await publicOfs.getStartedLink.click()
        await expect(page).toHaveTitle('Get Started - BidOut')
        await expect(page).toHaveURL('https://dashboard.bidout.app/get-started')
        
        })
        test('pricing',  async ({page})=> {
            const publicOfs= new PublicOFS_HomePage(page);
            await page.goto('https://dev.ofs-directory.bidout.app/')
        await publicOfs.pricingLink.click()
        await expect(page).toHaveTitle('Pricing - BidOu')
        await expect(page).toHaveURL('https://bidout.app/pricing/')
        
        })

      

});




