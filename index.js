function call (x){
  return `here is ${x}`
}

function callback() {
  call();
}

function receivesAFunction(callback) {
  return callback ();
}

function returnsANamedFunction() {
  return function namefunction() {

  }
}
  
function returnsAnAnonymousFunction() {
  return function () {
    
  }
}