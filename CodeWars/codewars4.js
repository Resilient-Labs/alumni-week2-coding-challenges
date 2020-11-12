Vowel Count
JavaScript:
function getCount(str) {
  var vowelsCount = 0;
  var vowels = "aeiou" // create a string with the vowels in it
  for(let i = 0; i < str.length; i++){// use the for loop to run through the array
   if(vowels.includes(str[i])){// add method .includes and put str array inside to check for vowels
    vowelsCount++ // once vowels are detected check
    }
  }

  return vowelsCount;
}
