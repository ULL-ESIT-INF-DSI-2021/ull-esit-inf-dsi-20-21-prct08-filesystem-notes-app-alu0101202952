/*import {writeFile} from 'fs';

writeFile('helloworld.txt', 'Hello World!', () => {
  console.log('File helloworld.txt has just been created');
});


import {readFile} from 'fs';

readFile('helloworld.txt', (_, data) => {
  console.log(data.toString());
});


readFile('what.txt', (_, data) => {
  console.log(data.toString());
});*/

import {watchFile} from 'fs';

watchFile('helloworld.txt', (curr, prev) => {
  console.log(`File size was ${prev.size} bytes before it was modified`);
  console.log(`Now file size is ${curr.size} bytes`);
});