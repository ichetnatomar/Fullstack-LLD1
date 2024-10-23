//Using function expression and ? operator
// let ask = (question, yes, no) => {
//   confirm(question) ? yes() : no();
// };

// ask("Do yo agree?", 
//   function(){
//     alert("you agreed.");
//   },
//   function(){
//     alert("You refused.")
//   }
// );

//Using if-else and function declaration
function ask(question, yes, no) {
  if (confirm(question)) {
    yes();
  }
  else {
    no();
  }
}

// function yes(){
//   alert("You agreed.");
// }

let yes = () => alert("You agreed.");

// function no(){
//   alert("You refused.");
// }


let no = () => alert("Yo refused.");

ask("Do you agree?", yes(), no());
