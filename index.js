const {spy} = require("chai")

function receivesAFunction(callme){
    return callme();
}
function returnsANamedFunction(){
  return  function nameFunction(){
      return "i am function";
  }
}
function returnsAnAnonymousFunction(){
    return () => console.log("Hello world");
}