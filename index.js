var readlineSync = require('readline-sync');
var chalk = require('chalk');

var score = 0;

var userName = readlineSync.question('Hey! please type your UserName here: ');
console.log('-------------------------------------------------------');

console.log('Hi '+userName + " welcome, I'm glad that you're here! :)");
console.log('-------------------------------------------------------');

console.log("Do you know Apple Inc. very well? lets test your knowledge then.. ")
console.log('-------------------------------------------------------');
console.log('Warm welcom again!' +userName+"!"+chalk(' share it your friends and tell them to create one and share.. continue the cycle..'));

console.log('-------------------------------------------------------');

console.log(chalk.red('All you need to do is select only one option from the given options'));

console.log(chalk.blue('All the very best!'));
console.log('------------------------------------------------------');



var questions = [
  {
    question : 'Who found Apple Inc?',
    options : ['Colt Steele', 'Tim Cook','Steve Jobs','Robert D Jr'],
    answer :'Steve Jobs'
  },
  {
    question : 'Which was the latest MacBook processor unveiled?',
    options : ['Intel i9','Intel i5','Apple M1','None of the above'],
    answer : 'Apple M1'
  },

  {
    question : 'Who is the current CEO of Apple Inc.?',
    options : ['Steve Jobs','Tim Cook','Steve Woznaik','Satya Nadella'],
    answer : 'Tim Cook'
  },

  {
    question : 'Which is the only Apple music product mainly designed for listening music?',
    options : ['iPad','iPod','iPhone','ear pods'],
    answer : 'iPod'
  },
  {
    question : 'Which Opearing System runs on Apple devices mainly for laptops or desktops?',
    options : ['Linux', 'Chrome OS', 'Windows', 'Mac OS'],
    answer : 'Mac OS'
  },
  {
    question : 'Which is the current updgrade of Mac OS? ',
    options : ['Big Sur','Mojave','Sierra','High Sierra'],
    answer : 'Big Sur'
  }
]


function displayQuestion(questionObj){
  console.log(chalk.red(questionObj.question)+'\n')
  for(var i =1;i<=4;i++){
    console.log('['+i+'] '+questionObj.options[i-1]);
  }
  var index = readlineSync.keyIn('\n\You have selected  your answer as : ', {limit: '$<1-4>'});

  var userAnswer = questionObj.options[index - 1];
  if(userAnswer === questionObj.answer){
    console.log(chalk.blue('\nCorrect answer! Amazing!\n'));
    score = score +10;
  }
  else{
    console.log(chalk.red('\nPlease try again..sorry!Wrong Answer\n'));
  1
  }
}

for(var i =0;i< questions.length ;i++){
  displayQuestion(questions[i]);
}
console.log("Your total score is " + score + " out of 60!. Thanks a lot for playing!\n")
console.log("Requesting you to please share me your results or a screenshot, I will update the leaderboard!\n");
console.log('\n');
console.log('thanks a lot for your time and considering playing this game. Hope you know me now! Have a nice day ahead!');
console.log('---------------------------------');
console.log('Jai neogcamp! :)')
