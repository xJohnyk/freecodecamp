//Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
//
//Remember to use Read-Search-Ask if you get stuck. Write your own code.
//
//Here are some helpful links:
//
//Array.prototype.push()
//Array.prototype.slice()


function chunkArrayInGroups(arr, size) {
  // Break it up.
  var result = [];
  while(arr.length > size){
    result.push(arr.splice(0,size));
  }
  if (arr.length)
    result.push(arr);
  
  return result;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
