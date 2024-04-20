let words = ["hello", "world"];

function getWordLengths(words) {
  // Start coding hereR
  let countArr = []
  for(let i = 0 ; i <words.length; i++) {
    countArr.push(words[i].length)
  }
  return countArr;
}

const result = getWordLengths(words);

console.log(result); // Output: [5, 5]
