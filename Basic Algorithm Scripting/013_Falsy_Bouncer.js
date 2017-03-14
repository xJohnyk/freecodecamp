//Remove all falsy values from an array.
//
//Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
//
//Remember to use Read-Search-Ask if you get stuck. Write your own code.
//
//Here are some helpful links:
//
//Boolean Objects
//Array.prototype.filter()


function bouncer(arr) {
  // Don't show a false ID to this bouncer.
 
  var result = arr.filter(Boolean);
  
  
  return result;
}

bouncer([7, "ate", "", false, 9]);
