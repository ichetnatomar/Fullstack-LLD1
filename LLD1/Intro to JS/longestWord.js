let str = "JavaScript is a fun programming language";
console.log(findLongestWord(str));

function findLongestWord(str){
  let len = 0;
  let words = [];
  words = str.split(' ');
  
  for(let i = 0; i < words.length; i++){
    let word = words[i];
    len = Math.max(len, word.length);
  }
  return len;
}
