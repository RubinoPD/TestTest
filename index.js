let posts = ["Sveikinu radus darbą", "Ar tikrai pabaigus kursą viskas bus gerai", "Javascript nėra Java", "Rasti video medžiagą visada šaunu"];


function longestString(arr) {

  let word = "";
  let longestWordsArray = [];

  // 1. Ciklas pereiti per kiekviena sakini atskirai.

  for(let i = 0; i < arr.length; i++) {

    // 2. Paema sakini per kuri eina ciklas ir is jo sudaro nauja masyva su tame sakinyje esanciais zodziais.

    let splitString = arr[i].split(" ");

    
    // 3. Ciklas kuris pereina per naujai sukurta zodziu masyva.

    for (let x = 0; x < splitString.length; x++) {

      // 4. Tikrina zodzio ilguma ir priskiria ji kintamajam word.

      if (word.length < splitString[x].length) {
        word = splitString[x];
      }
    }

    // 5. Ideda ilgiausia zodi i longestWordsArray masyva. 

    longestWordsArray.push(word);

    //6. Resetina word kintamaji kad kitame cikle vel galima ji butu naudoti rasti ilgiausiam zodziui.

    word = "";
      
  }

  // 7. Pavercia ilgiausiu zodziu masyva i vientisa sakini su tarpais.

  let longestWordString = longestWordsArray.join(" ");

  return longestWordString;

}

console.log(longestString(posts));
