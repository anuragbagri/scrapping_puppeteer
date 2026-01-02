import puppeteer from "puppeteer";

async function fetch(url : string){
    const browser = await puppeteer.launch({headless : false});
    const page = await browser.newPage();

    // await page.setRequestInterception(true);
    // page.on('request' , interceptedRequest => {
    //     if(interceptedRequest.url().endsWith(".png") || interceptedRequest.url().endsWith("jpg")) {
    //         interceptedRequest.abort();
    //     }
    //     else {
    //         interceptedRequest.continue();
    //         console.log(interceptedRequest.url());
    //     }
    // });
    try {
        await page.goto(url , {waitUntil : "networkidle2" });
        
    }
    catch(err) {
      console.log("error while fetching the page", err);
    }
    finally {
        browser.close();
    }
}

async function main(){
    try {
        await fetch("https://www.flipkart.com/");
    }
    catch(err) {
      console.log("error while calling the fetch function", err);
    }
};

main();