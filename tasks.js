
var fs= require("fs");
var data1 = fs.readFileSync("database.json", "utf-8");
try {
  if(data1 == "")
  throw "empty"
} catch  {
  data1 = '[{"name" : "ali", "done" : false}]'
}
var qwerty = JSON.parse(data1);



const process = require("process");
var jkl = process.argv;

/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  if (text.trim() === 'quit' || text.trim() === 'exit') {
    quit(jkl);
  }

  else if(text.trim().split(" ", 1) == 'hello'){
    var x = text.trim().split(" ").pop();
    hello(x);
  }

  else if(text.trim() === 'help'){
    help();
  }

  else if(text.trim() === 'list'){
    list();
  }

  else if (text.trim().split(" ", 1) == 'add') {
    add(qwerty, text);
  }
  
  else if (text.trim().split(" ", 1) == 'remove') {
    remove(qwerty, text);
  }

  else if (text.trim().split(" ", 1) == 'edit') {
    edit(qwerty, text);}

  else if(text.trim().split(" ", 1) == 'check'){
    check(qwerty,text);
  }
  
  else if(text.trim().split(" ", 1) == 'uncheck'){
    unCheck(qwerty,text);
  }

  else{
    unknownCommand(text);
  }
}


/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(x){
  if (x === "hello") {
    console.log('hello!');
  } 
  else {
    console.log('hello ' + x + '!')
  }
}


/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(jkl){
  var fs= require("fs");
  var data1= JSON.stringify(qwerty);
  fs.writeFileSync("database.json",data1);
  if(jkl.length > 2){
    fs.writeFile("./"+jkl[2], data1, (err)=>{if(!err){console.log('aya shi')}});
    fs.writeFileSync(jkl[2], data1);
  }
  console.log('Quitting now, goodbye!')
  process.exit();
}

/**
 * Says help to list
 *
 * @returns {void}
 */
function help(){
  console.log('Type \"hello\" to say hello! or \"hello + x\" to say hello + x. \nType \"exit\" to quit the app.\nType \"add\" to add, \"remove\" to remove and \"List\" to list the array.\n Type \"edit\" to edit in the list.\n Tpe \"check\" or \"unchek\" to check or unchek the elements in the list ')
}


function list(){
  for(var i=0;i<qwerty.length;i++){
    if(qwerty[i].done)
   { console.log(`[✓] ${qwerty[i].name}`);}
   else {console.log(`[ ] ${qwerty[i].name}`);}
  }
}

function add(qwerty, text) {
  var task = text.trim().split(" ").pop();
  if (text.trim().split(" ").length == 1) {
    console.log("error")
  } else {
    qwerty = qwerty.push({ name: task, done: false });
    console.log(task + ' has been added to list successfully.')
  }
}

function remove(qwerty, text) {
  var task = text.trim().split(" ").pop();
  if (text.trim().split(" ").length == 1) {
    qwerty.pop();
    console.log('task ' + qwerty.length + ' has been removed from list successfully.')
  } else if (task > qwerty.length) {
    console.log('this task number is not exist! ')
  } else {
    qwerty.splice(task - 1, 1);
    console.log('task ' + task + ' has been removed from list successfully.')
  }
}

function edit(qwerty, text) {
  var tasks = text.trim().split(" ");
  if (tasks.length == 1) {
    console.log("error")
  } else if (tasks.length == 2) {
    qwerty[qwerty.length - 1].name = tasks[1];
    console.log('the task ' + qwerty.length + ' change to ' + tasks[1])
  } else {
    qwerty[tasks[1] - 1].name = tasks[2];
    console.log('the task ' + tasks[1] + ' change to ' + tasks[2])
  }
}

function check(qwerty,text){
  var b =text.trim().split(' ');
  if(b.length == 1){
    console.log('ERROR');
  }else if (b.length == 2){
    qwerty[b[1]-1].done = true;
  }
}


function unCheck(qwerty,text){
  var b =text.trim().split(' ');
  if(b.length == 1){
    console.log('ERROR');
  }else if (b.length == 2){
    qwerty[b[1]-1].done = false;
  }
}

// The following line starts the application
startApp("Ali")

