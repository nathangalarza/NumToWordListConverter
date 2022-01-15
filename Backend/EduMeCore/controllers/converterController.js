import numToLettersMap from "../models/numToLettersMap"
var fs = require("fs");
const text = fs.readFileSync("../EdumeCore/resources/Dictionaries/engmix.txt", "utf-8");
const arrayOfWords = text.split("\n");
exports.getExpansion = (req, res) => {

        let numString
        try {
          //get the value of the number string from UI.
          numString = req.params.value.toString()
        } catch (e) {
          console.log(e)
          return []
        }
        //splits the input into array of letter values
        const arrayOfNums = numString.split('')
        //Array of letters 
        let arrayOfLetters = arrayOfNums
        //mapping starts with the number that it is
          .map((num) => {
            const letters = numberToLetter(num)
            if (letters !== []) {
              return letters
            }
          })
          .reduce((previous, current) => {

            let merge = []
            previous.forEach(previousLetter => {
              current.forEach(currentLetter => {
                merge.push(previousLetter + currentLetter)
              })
            })
            return merge
          })
         lettersToWord(arrayOfLetters);
        return res.json(arrayOfLetters);
};

//This function number to letter changes the corresponding number to a letter. 

const numberToLetter = (numberChar) => {
  let numberString
  try {
    numberString = numberChar.toString()
  } catch (ex) {
    console.log(ex)
  }
  //checks if the number string is in the map
  if (numberString in numToLettersMap) {
    //returns de corresponding letter
    return numToLettersMap[numberString]
  }
 
  return []
}

const lettersToWord = (currentLetters) =>{
  let arrayOfletters = currentLetters.map((letters) =>{
    let MatchedWords = [];
    arrayOfWords.map((word)=>{     
        if(word == letters){
          console.log(word);
          MatchedWords.push(word);
        }
    });
    return MatchedWords;
  });
}