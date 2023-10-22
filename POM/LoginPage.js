import { expect, test } from "@playwright/test";

exports.LoginPage =
    class LoginPage {

       // button;
     //   loginButton;
      //  userName;
      //  password;

        constructor(page) {

            this.page = page;
            this.button = this.page.locator("[onclick='logIn()']");
            this.loginButton = this.page.locator('#login2');
            this.userName = this.page.locator('#loginusername');
            this.password = this.page.locator('#loginpassword');

        }

        async gotoLoginPage() {
            await this.page.goto('https://www.demoblaze.com/')
        }

        async login(username, password) {
            await this.loginButton.click();
            await this.userName.fill(username);
            await this.password.fill(password);
            await this.button.click();
        }
    }