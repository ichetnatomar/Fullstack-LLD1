function ask(question, yes, no) {
  let ans = confirm(question); //1 and 2 are ignored if they dont make any sense
  if (ans) {
    yes(); 
    // alert(yes);will print yes's body
  }
  else{
    no();
  }
}

function yes() {
  alert("Its a Yes!");
}

function no() {
  alert("NO!");
}

ask("Did you have fun today?", yes(), no()); // if instead ask(question , yes(), no()) was written it would have parsed the line, found yes() thus executed it, and then executed no(), and then finally went on inside ask() body, hence O/P: Its a yes. No! ..
