exports.config = {

    specs: [
        'src/testcase/G001_LoginFlow.js'
    ],

    runner: 'local',
    host: 'localhost',
    port: 9515,
    path: '/',
    capabilities: [
        {
            browserName: 'Chrome'
        }
    ],
    reporters: [
       
        ['junit', {
            outputDir: './my_report',
            packageName: process.env.USER_ROLE // chrome.41 - administrator
        }]
    ],
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 600000
    }
}