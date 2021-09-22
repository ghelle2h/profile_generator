const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (answer) => {
  
  rl.question('What is an activity you like doing? ', (answer2) => {
    
    rl.question('What do you listen to while you\'re out? ', (answer3) => {
      
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer4) => {
        
        rl.question('What\'s your favourite thing to eat for that meal? ', (answer5) => {
          process.stdout.write(`My name is ${answer} and I like to ${answer2}. When I am out I listen to ${answer3}. My Favourite meal is ${answer4}. I usually eat ${answer5}`);
          rl.close();
        })
      })
    })
  });
  
});