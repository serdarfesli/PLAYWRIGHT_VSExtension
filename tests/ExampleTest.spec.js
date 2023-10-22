import { expect, test } from "@playwright/test";
import { LoginPage } from '../POM/LoginPage';


test('POM test', async ({ page }) => {

    const login = new LoginPage(page);

    await login.gotoLoginPage()

    await login.loginButton.click();
    await login.userName.fill('pavanol');
    await login.password.fill("test@123");
    await login.button.click();
    page.close()
})





