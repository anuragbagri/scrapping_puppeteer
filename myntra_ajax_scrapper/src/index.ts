import puppeteer from "puppeteer";


async function fetch(url : string){
    const browser = await puppeteer.launch({headless : false});
    const page = await browser.newPage();
    await page.goto(url);


    page.on('request' , request => {
        console.log(request.url());
    });

    page.on('response' , response => {
        console.log(response.url());
    });
};

async function call_url(){
    try {
    await fetch("https://www.myntra.com/")
    }
    catch(err) {
        console.log("error : ", err);
    }
}

call_url();