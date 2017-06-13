//
function changeSentence(first,second){
  return first.concat(second).toUpperCase();

}
// reversing the first two letters of the prompted sentence.
function letterReverse(first,second){
  return second.concat(first).toUpperCase();
}
function combine(sentence,letters){
  //combines the reversed letters to the end of the sentence
   return sentence.concat(letters);


}
// Create a fourth function to count the number of letters in the original
// sentence, divide it by two (rounding down if necessary), and output the letter
// at this index. Concatenate this letter at the beginning of the original sentence.
//  For example, if "I am a sentence" is my original input, and it has 16 characters
//   in it. If I divide this by 2, I get 8. The letter at the 8th position in the
//   sentence is "e". So my final result is "eI am a sentenceEI".
function reverseSentence(sentence){
  var countSentence=(sentence.length/2).toFixed();
  var outputletter=sentence.charAt(countSentence);
  return outputletter;

}
function main(){
  var sentence =prompt("Hey geek tell me what to do");
  var firstLetter=sentence.charAt(0);
  var lastLetter=sentence.charAt(sentence.length-1);
  console.log(sentence);
  console.log(changeSentence(firstLetter,lastLetter));
  console.log(letterReverse(firstLetter,lastLetter));
  var letters = letterReverse(firstLetter,lastLetter);
  var final= combine(sentence,letters);//I am a sentenceEI
  var letter = reverseSentence(sentence);//e
  var letterFinal= letter+final;
  var reversed=letterFinal.split("").reverse().join("");//reverses the whole sentence to look mirrored
  console.log(combine(sentence,letters));
  console.log(reverseSentence(sentence));
  console.log(letter+final);
  console.log(reversed);
}

main();
