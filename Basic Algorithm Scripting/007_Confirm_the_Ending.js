//Check if a string (first argument, str) ends with the given target string (second argument, target).
//
//This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
//
//Remember to use Read-Search-Ask if you get stuck. Write your own code.
//
//Here are some helpful links:
//
//String.prototype.substr()
//String.prototype.substring()


function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var strlen = str.length ;
  var tarlen = target.length;
  var roz = strlen - tarlen;
  
  for(var i = 0; i< strlen; i++){
    if(str.substr(roz, strlen) === target){
      return true;
    }else{
      return false;
    }
  }
}

confirmEnding("He has to give me a new name", "name");
