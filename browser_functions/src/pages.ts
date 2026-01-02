import puppeteer from "puppeteer";

async function fetch(url  :string) {
    const browser = await puppeteer.launch({headless : false});
    const page = await browser.newPage();
    try {
        await page.goto(url ,{waitUntil : "networkidle2"});
        const pages = await browser.pages(true);
        console.log(pages)
    }
    catch(err) {
        console.log("Error while fetching the data ", err);
    }
}


async function main(){
    try {
        await fetch("https://www.flipkart.com/");
    }
    catch(err) {
        console.log("error while calling the function");
    }
}

main();