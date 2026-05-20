const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const re = /<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g;
const matches = [...html.matchAll(re)];
let ok = 0, fail = 0;
matches.forEach((m, i) => {
  try {
    JSON.parse(m[1]);
    console.log('block', i, 'OK');
    ok++;
  } catch (e) {
    console.log('block', i, 'FAIL', e.message);
    fail++;
  }
});
console.log(`Total: ${matches.length} blocks, ${ok} OK, ${fail} FAIL`);
process.exit(fail ? 1 : 0);
