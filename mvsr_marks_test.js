const {Builder,By,until,Key}=require("selenium-webdriver");
const assert=require("assert");
async function test(){
let driver=await new Builder().forBrowser("chrome").build();
try{
await driver.get("http://results.mvsrec.edu.in/SBLogin.aspx");
let user=await driver.findElement(By.id("txtUserName"));
let pass=await driver.findElement(By.id("txtPassword"));
let btn=await driver.findElement(By.id("btnSubmit"));

await user.sendKeys("245121737133");
await driver.sleep(1000);
await pass.sendKeys("245121737133");
await driver.sleep(1000);
await btn.click();
await driver.sleep(1000);

let lbl=await driver.findElement(By.id("lblHTNo")).getText();
assert.strictEqual(lbl,"245121737133");
console.log("SUCCESS");

await driver.findElement(By.id("Stud_cpModules_imgbtnExams")).click();
await driver.sleep(1000);
await driver.findElement(By.id("cpBody_lnkSem")).click();
await driver.sleep(1000);


let ur=await driver.getCurrentUrl();
assert.strictEqual(ur,"http://results.mvsrec.edu.in/STUDENTLOGIN/Frm_SemwiseStudMarks.aspx");
console.log("SUCESS DISPLAY MARKS");


}
finally{
await driver.quit();
}
}
test();

