import puppeteer from "puppeteer";

async function fetch(){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try {
    await page.goto("https://www.flipkart.com/" , {waitUntil : "networkidle2"});
    }
    catch(err) {
        console.log("error while fetching the page",err);
    }
    const screen = await browser.addScreen({
            left: 43,
            top: 43,
            width: 43,
            height: 43,
    });
    console.log(screen);
    }

    fetch();  