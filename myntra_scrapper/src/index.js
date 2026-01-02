import puppeteer from "puppeteer";

async function connectBrowser(url) {
  const browser = await puppeteer.launch( { headless : false });
  const page = await browser.newPage();
  await page.goto(url , {
    waitUntil : 'networkidle2'
});

  await page.waitForSelector('.product-base');
  const data = await page.evaluate(() => {
    const products = Array.from(document.querySelectorAll('.product-base'));
    return products.map((product) => {
        return {
            name : product.querySelector('.product-brand').innerHTML,
            type : product.querySelector('.product-product').innerHTML,
            price : product.querySelector('.product-price').innerHTML
        }
    });
  });
 await browser.close();
  return data;
}


async function main(){
    const url = "https://www.myntra.com/nike-shoes?rawQuery=nike%20shoes";
    try {
        const data = await connectBrowser(url);
        console.log(data);
    } catch(e) {
        console.log('-------', e);
    }
}

main();
