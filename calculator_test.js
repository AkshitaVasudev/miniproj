const {Builder,By,until,Key}=require("selenium-webdriver");
const assert=require("assert");
async function test(){
let driver=await new Builder().forBrowser("chrome").build();
try{
await driver.get("file:///home/akshita/srikrishna/calculator.html");
let a=await driver.findElement(By.id("2")).click();
await driver.sleep(1000);

await driver.findElement(By.id("add")).click();
await driver.sleep(1000);
await driver.findElement(By.id("2")).click();
await driver.sleep(1000);
await driver.findElement(By.id("eq")).click();
await driver.sleep(1000);


let val=await driver.findElement(By.id("t1")).getAttribute("value");
await driver.sleep(1000);
console.log(val);
await driver.sleep(1000);
assert.strictEqual(val,"4");
console.log("SUCCESS");

await driver.sleep(1000);


}
finally{
await driver.quit();
}
}
test();

