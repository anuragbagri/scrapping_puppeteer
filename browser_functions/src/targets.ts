import puppeteer from "puppeteer";

async function fetch(url : string){
   const browser = await puppeteer.launch({headless : false});
   const page = await browser.newPage();
   try {
   await page.goto(url , {waitUntil : "networkidle2"});
    console.log(browser.targets());
   }
   catch(err) {
    console.log("error in goto function", err);
   }
}

async function main(){
   try {
    await fetch("https://www.flipkart.com");
   }
   catch(err) {
    console.log("error in function calling ", err);
   }
}

main();