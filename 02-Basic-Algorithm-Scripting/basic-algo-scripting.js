/*
  01. Convert Celsius to Fahrenheit

  You are given a variable celsius representing a temperature in Celsius. 
  Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given 
  Celsius temperature. Use the formula mentioned above to help convert the Celsius temperature to Fahrenheit.
*/

{
  function convertCtoF(celsius) {
    let fahrenheit;
    fahrenheit = (9 / 5) * celsius + 32;
    return fahrenheit;
  }
  
  console.log(convertCtoF(30));
}

/*
  02. Reverse a String

  Reverse the provided string and return the reversed string.
  For example, "hello" should become "olleh".
*/

{
  function reverseString(str) {
    return str.split('').reverse().join("");
  }
  
  console.log(reverseString("hello"));
}

/*
  03. Factorialize a Number
*/

{
  function factorialize(num) {
    return (num == 0) ? 1 : factorialize(num - 1) * num;
  }
  
  console.log(factorialize(5));
}

/*
  04. Find the Longest Word in a String
  
  Return the length of the longest word in the provided sentence.
  Your response should be a number.
*/

{
  function findLongestWordLength(str) {
    let wordsArr = str.split(" ");
    let longest = "";
    for (let word of wordsArr) {
      if (word.length > longest.length) {
        longest = word;
      }
    }
    return longest.length;
  }
  
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
}

/*
  05. Return Largest Numbers in Arrays
  
  Return an array consisting of the largest number from each provided sub-array. 
  For simplicity, the provided array will contain exactly 4 sub-arrays.
*/

{
  function largestOfFour(arr) {
    let largestArr = [];
    for (const subArr of arr) {
      let largest = subArr[0];
      for (const num of subArr) {
        if (largest < num) largest = num;
      }
      largestArr.push(largest);
    }
    return largestArr;
  }
  
  console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));
}

/*
  06. Confirm the Ending

  Check if a string (first argument, str) ends with the given target string (second argument, target).
  This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this 
  challenge, we would like you to use one of the JavaScript substring methods instead.
*/

{
  function confirmEnding(str, target) {
    return str.slice( str.length - target.length ) == target;
  }
  
  console.log(confirmEnding("Bastian", "n"));
}

/*
  07. Repeat a String Repeat a String
  
  Repeat a given string str (first argument) for num times (second argument). 
  Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in 
  .repeat() method.
*/

{
  function repeatStringNumTimes(str, num) {
    if (num <= 0) {
      return "";
    } 
    return str + repeatStringNumTimes(str, num - 1);
  }
  
  console.log(repeatStringNumTimes("abc", 3));
}

/*
  08. Truncate a String
  
  Truncate a string (first argument) if it is longer than the given maximum string length (second argument). 
  Return the truncated string with a ... ending.
*/

{
  function truncateString(str, num) {
    if (str.length > num) return str.slice(0, num) + "...";
    return str;
  }
  
  console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
}

/*
  09. Finders Keepers

  Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. 
  This means that given an element x, the 'truth test' is passed if func(x) is true. 
  If no element passes the test, return undefined.
*/

{
  function findElement(arr, func) {
    for (let num of arr) {
      if(func(num)) {
        return num;
      }
    }
    return;
  }
  
  console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));
}

/*
  10. Boo who
  
  Check if a value is classified as a boolean primitive. Return true or false.
  Boolean primitives are true and false.
*/

{
  function booWho(bool) {
    return (typeof bool) == "boolean";
  }
  
  console.log(booWho(true));
}

/*
  11. Title Case a Sentence

  Return the provided string with the first letter of each word capitalized. 
  Make sure the rest of the word is in lower case.
  For the purpose of this exercise, you should also capitalize connecting words like the and of.
*/

{
  function titleCase(str) {
    let strArr = str.split(" ");
    for (let i = 0; i < strArr.length; i++) {
      strArr[i] = strArr[i][0].toUpperCase() + strArr[i].slice(1,).toLowerCase();
    }
    return strArr.join(" ");
  }
  
  console.log(titleCase("I'm a little tea pot"));
}

/*
  12. Slice and Splice
  
  You are given two arrays and an index.
  Copy each element of the first array into the second array, in order.
  Begin inserting elements at index n of the second array.
  Return the resulting array. The input arrays should remain the same after the function runs.
*/

{
  function frankenSplice(arr1, arr2, n) {
    return arr2 = [...arr2.slice(0, n), ...arr1, ...arr2.slice(n,)];
  }
  
  console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
}

/*
  13. Falsy Bouncer

  Remove all falsy values from an array. Return a new array; do not mutate the original array.
  Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
  Hint: Try converting each value to a Boolean.
*/

{
  function bouncer(arr) {
    let filteredArr = [];
    for (let elem of arr) {
      if (elem) {
        filteredArr.push(elem);
      }
    }
    return filteredArr;
  }
  
  bouncer([7, "ate", "", false, 9]);
}

/*
  14. Where do I Belong

  Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has 
  been sorted. The returned value should be a number.
  For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
  Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] 
  and 19 is less than 20 (index 2) and greater than 5 (index 1).
*/

{
  function getIndexToIns(arr, num) {
    return arr.concat(num).sort((a, b) => (a - b)).indexOf(num);
  }
  
  console.log(getIndexToIns([5, 3, 20, 3], 5));
}

/*
  15. Mutations

  Return true if the string in the first element of the array contains all of the letters of the string in the second 
  element of the array.

  For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in 
  the first, ignoring case.

  The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

  Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.
*/

{
  function mutation(arr) {
    let testStr = arr[0].toLowerCase()
    for (let word of arr[1].toLowerCase()) {
      if (testStr.indexOf(word) == -1) {
        return false;
      }
    }
  
    return true;
  }
  
  console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
}

/*
  16. Chunky Monkey
  
  Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them 
  as a two-dimensional array.
*/

{
  function chunkArrayInGroups(arr, size) {
    let _2DArr = [] 
    let iterations = arr.length / size;
  
    for (let i = 0; i < iterations; i++) {
      _2DArr.push(arr.splice(0, size));
    }
    
    return _2DArr;
  }
  
  console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
}