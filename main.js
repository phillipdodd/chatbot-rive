console.log('loaded...?')

//* DOM Elements

const userInput = document.getElementById("user_input");
const submitButton = document.getElementById("submit_button");
const reply = document.getElementById("reply");

submitButton.onmouseup = submitHandler;

function submitHandler() {
    console.log(userInput.value);
}
