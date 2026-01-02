import puppeteer from "puppeteer";

async function fetch(url : string){
    const browser = await puppeteer.launch({headless : false , timeout : 40000});
    const page = await browser.newPage();
    try {
      await page.goto(url);
      const alldivelements = await page.$$("div");
      for(const handle of alldivelements) {
        const text = await handle.evaluate(element => element.textContent);
        console.log(text);
      }
    }
    catch(err) {
        console.log("error infetching the information", err);
    }
}

async function main(){
    try {
        await fetch("https://www.flipkart.com");
    }
    catch(err) {
        console.log("error whike calling the function ", err);
    }
}
main();