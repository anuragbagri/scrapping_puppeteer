import  puppeteer from "puppeteer";

async function getData(url){
    const browser = await puppeteer.launch({headless : false , defaultViewport : false});
    const page = await browser.newPage();
    await page.goto(url);
    await page.waitForSelector("div.s-result-item[data-asin]");
    let items = [];
    const handleItems = await page.$$("div.s-result-item[data-asin]");
 // $eval function gets the element dom and acess it using the (selector , function ) definition
     for(const handleItem of handleItems) {
        let title = null;
        let price = null;
        let image = null;
        // so that sponsers may be handled as well ... if some does not have any of these.
        try {
          title = await page.$eval("h2.a-size-medium.a-spacing-none.a-color-base.a-text-normal > span" , el => el.textContent.trim());
        }
        catch(err) {
             console.log("error in title ",err);
            }
        try {
             price = await page.$eval("span.a-price > span.a-offscreen" , el => el.textContent)
            }
        catch(err) { 
            console.log("error in price ", err)
        }
        try { 
            image  = await page.$eval("img.s-image" ,el => el.src);
        }
        catch(err) {
            console.log("error in image", image);
        }
        if(title){
            items.push({price, title,image})
        }
    }
console.log(items);
}

getData("https://www.amazon.in/s?k=shoes&crid=1QHP0UYJHLJIJ&sprefix=shoes%2Caps%2C360&ref=nb_sb_noss_2");