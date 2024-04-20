let words = ["apple", "cat", "dog", "elephant"];

function get5CharWords(words) {
  // Start coding here
  let splitMoreThanFive = [];
  for(let i =0; i< words.length; i++){
    if(words[i].length >= 5) 
    {
      splitMoreThanFive.push(words[i])
    }
  }
  return splitMoreThanFive
}

const result = get5CharWords(words);

console.log(result); // Output: ["apple", "elephant"]
