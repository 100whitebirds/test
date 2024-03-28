const puppeteer = require('puppeteer-core');

async function startScraping(url) {
  puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    executablePath: '/usr/bin/google-chrome',
    headless: true,
    targetFilter: (target) => target.type() !== 'other',
  }).then(async (browser) => {
    console.log('success');
  }).catch((err) => {
    console.error('err', err);
  });
}

startScraping('https://www.google.com/search?q=puppeteer+ubuntu&oq=puppeteer+ubuntu&aqs=chrome.0.0i512l4j0i22i30l6.4077j0j7&sourceid=chrome&ie=UTF-8');
