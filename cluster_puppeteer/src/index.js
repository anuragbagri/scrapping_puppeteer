import { Cluster} from "puppeteer-cluster";

var urls = ["http://www.wikipedia.org/", "http://www.google.com/"];
(async () => {
  const cluster = await Cluster.launch({
    concurrency: Cluster.CONCURRENCY_PAGE,
    maxConcurrency: 2,
    puppeteerOptions : {
        headless : false,
        defaultViewport : false,
    }
  }); 

  try {
    await cluster.task(async ({ page, data: url }) => {
        await page.goto(url , {waitUntil : "domcontentloaded"});
      });
    }
    catch(err){
        console.log("Error is here ",err);
    }
  urls.forEach(url => {
    cluster.queue(url);
  });

  cluster.idle();
  cluster.close();

})();
