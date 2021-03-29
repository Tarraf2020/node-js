
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

var qwerty = [1,2,3,4,5];
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
    quit();
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
  else if(text.trim().split(" ", 1) == 'add'){
    if(text.trim() == "add"){
      console.log('error')
    }else{
      y = text.trim().split(" ").pop();
      add(y);
    }
  }
  else if(text.trim().split(" ", 1) == 'remove'){
    p = text.trim().split(" ").pop();
    if(p > qwerty.length ){
        console.log('The givven number is not available');
    }else {
    if(text.trim() == "remove"){
      qwerty.pop();
      console.log(qwerty);
    }else{
     
      remove(p);
    }}
  }
  else if(text.trim().split(" ", 1) == 'edit'){
      edit(qwerty, text);
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
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}

/**
 * Says help to list
 *
 * @returns {void}
 */
function help(){
  console.log('Type \"hello\" to say hello! or \"hello + x\" to say hello + x. \nType \"exit\" to quit the app.\nType \"add\" to add, \"remove\" to remove and \"List\" to list the array. ')
}


function list(){
  for(var i=0;i<qwerty.length;i++){
    console.log(`${i+1} ${qwerty[i]}`);
  }
}

function add(y){
  var arr = [];
  arr.push(y);
  console.log(arr);
}

function remove(p){
  if(p == 1){
    qwerty.shift();
    console.log(qwerty);
  }else{
    qwerty.splice(p - 1, 1);
    console.log(qwerty);
  }
}

function edit(qwerty, text){
 var t =text.trim().split(' ');
  if(t.length == 2){
   qwerty[qwerty.length - 1] = t[1];
 } else if(t.length > 2){
   qwerty[t[1]-1] = t[2];
 }else {
  console.log('ERROR');
 }
}

// The following line starts the application
startApp("Ali")

