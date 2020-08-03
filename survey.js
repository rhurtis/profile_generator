const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let outputParagraph = '';

rl.question(`What's your name? Nicknames are also acceptable :)`, (name) => {
  console.log(`Hello there ${name}!`);
  
  rl.question(`What's an activity you like doing?`, (activity) => {
    console.log(`${activity} sounds like fun!`);
    
    rl.question(`What do you listen to while doing that?`, (music) => {
      console.log(`${music} is cool!`);
    
      rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.))`, (meal) => {
        console.log(`${meal} is great!`);
        
        rl.question(`What's your favourite thing to eat for that meal?`, (food) => {
          console.log(`${food} sounds delicious`);
         
          rl.question(`Which sport is your absolute favourite?`, (sport) => {
            console.log(` ${sport} is a great sport`);
            
            rl.question(`What is your superpower? In a few words, tell us what you are amazing at!`, (power) => {
              console.log(`${power} is impressive.`);
              
              outputParagraph = `${name} likes to listen to ${music} while ${activity}. ${name} loves to eat ${food} at ${meal} time. ${name} loves ${sport} out of all sports. ${name} is most proud of being able to ${power}.`;
              console.log(outputParagraph);
              rl.close();
            });
          
          });
        
        });
      
      });
      

    
    });
  
  });



 

});
