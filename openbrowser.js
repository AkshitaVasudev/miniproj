const {Builder,By,Key,until}=require("selenium-webdriver");
async function test(){
let driver=await new Builder().forBrowser("chrome").build();
await driver.get("https://www.google.com/");
console.log("Browser opened");
await driver.quit();
}
test();
