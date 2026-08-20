import https from 'https';

const host = 'ijtiaz.vercel.app';
const key = '9f38e2d4a17c45b88cb7e42d8f990142';
const keyLocation = `https://${host}/${key}.txt`;

const countryIds = [
  'sa', 'ae', 'eg', 'kw', 'qa', 'jo', 'om', 'bh', 'iq', 
  'dz', 'ma', 'tn', 'ye', 'sd', 'ly', 'sy', 'lb', 'ps', 
  'mr', 'so', 'dj', 'km', 'us', 'gb', 'ca', 'au'
];

const urlList = [`https://${host}/`];
countryIds.forEach((c) => {
  urlList.push(`https://${host}/${c}`);
  urlList.push(`https://${host}/${c}/test`);
  urlList.push(`https://${host}/${c}/signs`);
  urlList.push(`https://${host}/${c}/violations`);
});

const payload = JSON.stringify({
  host,
  key,
  keyLocation,
  urlList
});

const options = {
  hostname: 'api.indexnow.org',
  port: 443,
  path: '/IndexNow',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(payload)
  }
};

const req = https.request(options, (res) => {
  console.log(`IndexNow Submission Status: ${res.statusCode} ${res.statusMessage}`);
  res.on('data', (d) => {
    process.stdout.write(d);
  });
  if (res.statusCode === 200 || res.statusCode === 202) {
    console.log(`\nSuccessfully submitted ${urlList.length} URLs to Bing & IndexNow search engines!`);
  }
});

req.on('error', (e) => {
  console.error('IndexNow ping error:', e.message);
});

req.write(payload);
req.end();
