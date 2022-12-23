const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
const puppeteer = require('puppeteer');
let fourscore = '';
let burythevictims = '';
let isalations = '';
let bIeedingfangs = '';
(async()=>{
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.roblox.com/users/1093355674/profile')
    //await page.waitForSelector('#container-main > div.content > div > div > div.message-container > h3')
    if(await page.$('#container-main > div.content > div > div > div.message-container > h3') !== null) fourscore = 'banned';
    else fourscore = 'active'
    await page.goto('https://www.roblox.com/users/4135124129/profile')
    if(await page.$('#container-main > div.content > div > div > div.message-container > h3') !== null) burythevictims = 'banned';
    else burythevictims = 'active'
    await page.goto('https://www.roblox.com/users/572576417/profile')
    if(await page.$('#container-main > div.content > div > div > div.message-container > h3') !== null) isalations = 'banned';
    else isalations = 'active'
    await page.goto('https://www.roblox.com/users/306641452/profile')
    if(await page.$('#container-main > div.content > div > div > div.message-container > h3') !== null) bIeedingfangs = 'banned';
    else bIeedingfangs = 'active'
    await browser.close()
})();
const server = http.createServer(function(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`fourscore: ${fourscore}\nburythevictims: ${burythevictims}\nisalations: ${isalations}\nbIeedingfangs: ${bIeedingfangs}`);
});

server.listen(port, hostname, function() {
  console.log('Server running at http://'+ hostname + ':' + port + '/');
});