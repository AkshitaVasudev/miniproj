const {Builder,By,until,Key}=require("selenium-webdriver");
async function test(){
let driver=await new Builder().forBrowser("chrome").build();
try{
await driver.get("file:///home/akshita/srikrishna/login1.html");
let user=await driver.findElement(By.id("u"));
let pass=await driver.findElement(By.id("p"));
let btn=await driver.findElement(By.id("btn"));

await user.sendKeys("MVSR");
await driver.sleep(1000);
await pass.sendKeys("123");
await driver.sleep(1000);
await btn.click();
await driver.sleep(1000);

let ur=await driver.getCurrentUrl();
if (ur.endsWith("success.html")){
console.log("SUCESS");
}
else{
console.log("FAIL");
}
}
finally{
await driver.quit();
}
}
test();

