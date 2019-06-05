//const  {loginID} = require('src/interface/LoginInterface.js');
let url ='http://demo.guru99.com/v4/';
describe('Login flow', () => {
    before(() => {
        browser.url(url);
        browser.pause(2000);
    });
    it('Login ok', () => {
    //    console.log(loginID.usernameXpath);
        
        $("//input[@name='uid']").setValue("trung");
        
    });



    after(() => {
        browser.pause(2000);
        browser.closeWindow;
    });
})