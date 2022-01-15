import numToLettersMap from "../models/numToLettersMap"
import lettersResponseModel from "../models/LettersResponseModel"
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
          
         let resp = lettersToWord(arrayOfLetters);

        return res.json({letters: arrayOfLetters,words: resp});
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
  let MatchedWords = [];
  let arrayOfMathcedWords = currentLetters.map((letters) =>{
    arrayOfWords.map((word)=>{     
        if(word == letters){
          MatchedWords.push(word);
        }
    });
  });
  return MatchedWords;
}