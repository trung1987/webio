const loginID = require(process.cwd()+'/src/interface/LoginInterface.js');
const homeID = require(process.cwd()+'/src/interface/HomeInterface.js');
const dataTest = require(process.cwd()+'/src/commons/dataTest.js');
const assert = require('assert');
const util = require('util');

let url ='http://demo.guru99.com/v4/';
describe('Login flow', () => {
    before(() => {
        browser.url(url);
        browser.pause(2000);
    });
    it('Login ok', () => {  
        await $(loginID.usernameXpath).setValue(dataTest.UserID);
        await $(loginID.passXpath).setValue(dataTest.Pass);
        await browser.$(loginID.btnLoginXpath).click();
        let temp = util.format(homeID.welcomeMessXpath,dataTest.UserID);
        let elem =  browser.$(temp);
        let isDisplayed = elem.isDisplayed();
        
        await console.log(isDisplayed);
        await assert(isDisplayed === true) // true
    });



    after(() => {
        browser.pause(2000);
        browser.closeWindow;
    });
})