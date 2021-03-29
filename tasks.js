
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
  if (text === 'quit' || text === 'exit') {
    quit();
  }
  else if(text.trim().split(" ", 1) == 'hello'){
    var x = text.trim().split(" ").pop();
    hello(x);
  }
  else if(text === 'help'){
    help();
  }
  else if(text === 'list'){
    list();
  }
  else if(text.trim().split(" ", 1) == 'add'){
    if(text == "add"){
      console.log('error')
    }else{
      y = text.trim().split(" ").pop();
      add(y);
    }
  }
  else if(text.trim().split(" ", 1) == 'remove'){
    if(text == "remove"){
      qwerty.pop();
    }else{
      p = text.trim().split(" ").pop();
      remove(p);
    }
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
  console.log('Type \"hello\" to say hello! or \"hello + x\" to say hello + x.\nType \"exit\" to quit the app.')
}


function list(){
  for(var i=1;i<3;i++){
    console.log(i);
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
  }else{
    qwerty.slice(p-1, 1);
  }
}

// The following line starts the application
startApp("Ali")
onDataReceived("add a")
