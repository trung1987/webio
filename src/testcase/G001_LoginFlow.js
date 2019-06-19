const loginID = require(process.cwd()+'/src/interface/LoginInterface.js');
const homeID = require(process.cwd()+'/src/interface/HomeInterface.js');
const dataTest = require(process.cwd()+'/src/commons/dataTest.js');
const assert = require('assert');
const util = require('util');
const addContext = require('mochawesome/addContext');

let url ='http://demo.guru99.com/v4/';
describe('Login flow', () => {
    before(() => {
        browser.url(url);
        browser.pause(2000);
    });
    beforeEach(() => {
        addContext('aaaa');
    });
    it('Login ok', () => {  
         $(loginID.usernameXpath).setValue(dataTest.UserID);
         $(loginID.passXpath).setValue(dataTest.Pass);
         browser.$(loginID.btnLoginXpath).click();
        let temp = util.format(homeID.welcomeMessXpath,dataTest.UserID);
        let elem =  browser.$(temp);
        let isDisplayed = elem.isDisplayed();
        
         console.log(isDisplayed);
         assert(isDisplayed === true) // true
    });



    after(() => {
        browser.pause(2000);
        browser.closeWindow;
    });
})