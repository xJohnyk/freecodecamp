//Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.
//
//Remember to use Read-Search-Ask if you get stuck. Write your own code.
//
//Here are some helpful links:
//
//Global String Object


function repeatStringNumTimes(str, num) {
  // repeat after me
  if (num < 0){
    return "";
  }
  var reap = str.repeat(num);
  
  
  return reap;
}

repeatStringNumTimes("abc", 3);
