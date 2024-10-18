function ask(question) {
  let ans = confirm(question, 1, 2); //1 and 2 are ignored if they dont make any sense
  if (ans) {
    // yes(); //will execute func yes
    alert(yes); //will print yes's body
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

ask("Did you have fun today?", yes, no); // if instead ask(question , yes(), no()) was written it would have parsed the line, found yes() thus executed it, ten  executed no() and then finally went on inside ask() body, hence O/P: Its a yes. No! ..
