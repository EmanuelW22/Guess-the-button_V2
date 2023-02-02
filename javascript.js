const createButton = document.getElementById("createButton");
const container = document.getElementById("container");
let buttonCreate = false;

let number_buttons, winning_number;
createButton.addEventListener("click", function() {
  number_buttons = document.getElementById("myInput").value;
  if(!buttonCreate && number_buttons >= 2) {
      for (let i = 0; i < number_buttons; i++) {
        const newButton = document.createElement("button");
        newButton.innerHTML = "Button " + (i + 1);
        newButton.id= i;
        newButton.style.fontSize = "25px";
        newButton.style.color = "green";
        newButton.addEventListener("click", function(){
          winer(i);
      });
        container.appendChild(newButton);
      }
  }
  winning_number =  Math.floor(Math.random() * number_buttons);
  buttonCreate = true;
});

function winer(clicked_id){
  if(clicked_id+1 == winning_number) {
    document.getElementById("text").innerHTML = "Congratulations you won";
    document.getElementById("text").style.color = "green";
  }else{
    document.getElementById("text").innerHTML = "I'm sorry, try again";
    document.getElementById("text").style.color = "red";
  }
  winer = function(){};
}
function resetPage() {
  location.reload();
}
