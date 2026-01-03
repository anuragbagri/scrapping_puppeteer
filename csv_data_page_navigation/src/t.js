import puppeteer from "puppeteer";

async function fetch(url){
    const browser = await puppeteer.launch({ headless : false , defaultViewport : false});
    const page = await browser.newPage();
    await page.goto(url , {waitUntil : "networkidle2"});

    const isElementPresent = await page.$('.s-pagination-item.s-pagination-disabled') !==null;
    console.log(isElementPresent);

}

fetch("https://www.amazon.in/s?k=computer&page=20&crid=2XU9Z002J2OKS&qid=1767435983&sprefix=compute%2Caps%2C377&xpid=IgKj4-phA7SrE&ref=sr_pg_20");
