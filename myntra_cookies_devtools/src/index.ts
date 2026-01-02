import puppeteer from "puppeteer";


async function fetch(url : string){ 
    const browser = await puppeteer.launch({headless : false});
    const page = await browser.newPage();
    await page.goto(url);
    
    const cookies = await browser.cookies();
    console.log(cookies);
    
}

async function implemention(){
    await fetch("https://www.myntra.com/");
}

implemention();

