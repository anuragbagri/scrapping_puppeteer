import puppeteer from "puppeteer";


async function fetch(url : any){
   const browser = await puppeteer.launch({headless : false}, );
   const page = await browser.newPage();
   
   await page.setRequestInterception(true);
   page.on('request' , interceptedRequest => {
      if(interceptedRequest.isInterceptResolutionHandled()) return ;
      if(interceptedRequest.url().endsWith(".jpg") || interceptedRequest.url().endsWith(".png")) {
         interceptedRequest.abort();
      }

      else {
         interceptedRequest.continue(); 
         console.log(interceptedRequest.url());
      }
   });   
   await page.goto(url , {waitUntil : "networkidle2"});
   await browser.close();
}

// async function fetch(url : any) {
//    const browser = await puppeteer.launch({headless : false});
//    const page = await browser.newPage();
//    await page.setRequestInterception(true);
//    page.on('request' ,interceptedRequest => {
//       if(interceptedRequest.isInterceptResolutionHandled()) return;
//       if(interceptedRequest.url().endsWith(".js")) {
//          console.log(interceptedRequest.url());
//       }
//       else {
//          interceptedRequest.abort();
//       }
//    })
   
//    await page.goto(url , {waitUntil : "networkidle2"});

// }
async function main(){
    await fetch("https://www.myntra.com/");
}
main();