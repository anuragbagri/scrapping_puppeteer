import puppeteer from "puppeteer";

async function fetch(url : string){
  const browser = await puppeteer.launch({headless : false});
  const page = await browser.newPage();
  try {
    await page.goto(url , {waitUntil : "networkidle2"});
    const fullcontent = await page.content();
    console.log("full content of page:", fullcontent);
  } 
  catch(err) {
    console.log("error ==> ",err);
  }
}

fetch("https://www.flipkart.com");