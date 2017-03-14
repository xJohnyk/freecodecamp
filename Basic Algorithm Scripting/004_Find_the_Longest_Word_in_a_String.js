//Return the length of the longest word in the provided sentence.
//
//Your response should be a number.
//
//Remember to use Read-Search-Ask if you get stuck. Write your own code.
//
//Here are some helpful links:
//
//String.prototype.split()
//String.length


function findLongestWord(str) {
  var arr = str.split(' ');
  var longest = 0;
  for(var i = 0; i < arr.length;i++){
    var current = arr[i].length;
    if(current > longest){
      longest = current;
    }
  }
  return longest;
}

findLongestWord("What is the average airspeed velocity of an unladen swallow");
