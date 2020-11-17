var readSync = require("readline-sync")
var c = require("chalk")

var name=readSync.question("Enter your name : ");
console.log(c.bold("Hey " +name));
console.log("Welcome to THE F.R.I.E.N.D.S QUIZ!?\n");
var score = 0;

var questions = [
  {
    ques: `In which city is Friends set?
           a: 'Los Angeles'
           b: 'Miami'
           c: 'New York City'
           d: 'Seattle' 
           `,
    ans: "c",
  },

  {
    ques: `What's the name of the coffee shop used by the characters?
           a: 'St James Perk'
           b: 'Central Perk'
           c: 'Froth of Khan'
           d: 'Daily Grind' 
           `,
    ans: "b",
  },
  {
    ques: `What is the name of Phoebe's alter-ego? 
           a: 'Phoebe Neeby'
           b: 'Monica Bing'
           c: 'Regina Falange'
           d: 'Elaine Benes' 
           `,
    ans: "c",
  },
  
  {
    ques: `Where does Ross work as a professor in season ?
           a: 'Harvard University'
           b: 'Stanford University'
           c: 'Yale University'
           d: 'New York University' 
           `,
    ans: "d",
  },
  
  {
    ques: `What pet did Ross own?
           a: 'A dog named Keith'
           b: 'A rabbit called Lancelot'
           c: 'A monkey named Marcel'
           d: 'A lizard named Alistair' 
           `,
    ans: "c",
  },
  {
    ques: `What is Chandler's middle name?
           a: 'Muriel
           b: 'Jason'
           c: 'Kim'
           d: 'Zachary' 
           `,
    ans: "a",
  },
  {
    ques: `What kind of uniform does Joey wear to Monica and Chandler's wedding?
           a: 'Chef'
           b: 'Soldier'
           c: 'Fire fighter'
           d: 'A baseball player' 
           `,
    ans: "c",
  },
  {
    ques: `Who is Chandler and Joey's TV magazine addressed to?
           a: 'Miss Chanandler Bong'
           b: 'Mrs Chanel Beng'
           c: 'Ms Chandelier Bang'
           d: 'Rachel Greep' 
           `,
    ans: "a",
  },
]

var wrong=[];



function play(ques, ans) {
  var userans = readSync.question(c.italic.bold(ques));
  if (ans.toUpperCase() === userans.toUpperCase()) {
    console.log(c.green.bold("Wohhoooo! That's right\n"));
    score += 5;
  }
  else {
    console.log(c.red("Nevermind!\n"));
    wrong.push(i+1);
  }
  console.log(c.blue("Current score: " + score));
  console.log(c.yellowBright("------------------\n"));
  console.log(c.yellowBright("------------------\n"));
}


for (var i = 0; i < questions.length; i++)
  {
    console.log(c.bold.whiteBright(("Question ")+ (i+1) + " :"));
    var result = play(c.magentaBright(questions[i].ques), questions[i].ans);
  }

console.log(c.inverse("The highest achievable score is 40 \n"))
console.log(c.bgCyan("FINAL SCORE : " + score+" \n"));
//console.log("High Score : " + highScore);
if(score===40)
{
  console.log(c.inverse("YAYAYYA! you score the highest!!  \n"));
}
else
 console.log(c.inverse("uhuu!! \n"+" Better luck next time xD  \n"));


console.log(" correct answers : ");
for(var i =0; i<wrong.length; i++)
{
  console.log("Question No. "+ wrong[i] + " : " + questions[wrong[i]-1].ans + "\n");
}


console.log(c.bold.italic.inverse("  Thanks for playing!  "));