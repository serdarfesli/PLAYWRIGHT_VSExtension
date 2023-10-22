const { expect, test } = require('@playwright/test');
exports.PublicOFS_HomePage =
    class PublicOFS_HomePage {


        constructor(page) {
            this.page = page;
            this.productLink = this.page.getByRole('link', { name: 'PRODUCT', exact: true });
            this.getStartedLink = this.page.getByRole('link', { name: 'GET STARTED', exact: true });

             this.pricingLink = this.page.getByRole('link', { name: 'PRICING', exact: true })
        
            this.loginLink = this.page.getByRole('button', { name: 'Login' })
             this.bidoutLogo = this.page.getByRole('link', { name: 'BidOut', exact: true })
    
         
        }
    }











