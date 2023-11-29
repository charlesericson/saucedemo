import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/loginPage.js'
import homePage from '../pageobjects/homePage.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('standard_user', 'secret_sauce')
        await expect(homePage.productsPage).toBeExisting()
        await expect(homePage.productsPage).toHaveTextContaining(
            'Products')
    })
})