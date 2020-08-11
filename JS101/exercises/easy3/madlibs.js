let readline = require('readline-sync');

let noun = readline.question('Enter a noun: ');
let verb = readline.question('Enter a verb: ');
let adverb = readline.question('Enter an adverb: ');
let adjective = readline.question('Enter an adjective: ');

let story = `There once live a group of creatures in the woods. They were very ${adjective}. I saw one by itself down on the riverback. He had a big box. "What's in the box?" I asked. It told me it was a ${noun}. Then he said he had to go because he needed to go and ${verb} his house. He then ${adverb} scurried off.`;

console.log(story);
