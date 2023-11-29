import { $ } from '@wdio/globals'
import Page from './pageUrl.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get productsPage () {
        return $('//span[@class="title"][contains(text(),"Products")]');
    }
}

export default new SecurePage();
