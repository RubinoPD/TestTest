let posts = ["Sveikinu radus darbą", "Ar tikrai pabaigus kursą viskas bus gerai", "Javascript nėra Java", "Rasti video medžiagą visada šaunu"];


function longestString(arr) {

  let word = "";
  let longestWordsArray = [];

  for(let i = 0; i < arr.length; i++) {

    let splitString = arr[i].split(" ");

      
    for (let x = 0; x < splitString.length; x++) {
      if (word.length < splitString[x].length) {
        word = splitString[x];
      }
    }
    longestWordsArray.push(word);
    word = "";
      
  }
  let longestWordString = longestWordsArray.join(" ");
  return longestWordString;
}

console.log(longestString(posts));
