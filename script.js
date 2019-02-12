function  getChar(input, character){
  if(input.value == null || input.value == 0){
    document.getElementById("idLayar").value = character;
  }else{
    document.getElementById("idLayar").value += character;
  }
}

function calculate(input){
      var operation = input.value;
      input.value = eval(operation);
}
