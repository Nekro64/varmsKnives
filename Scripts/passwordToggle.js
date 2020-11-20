let passInput = document.querySelector("#inputPasswordReg")
let toggleButton = document.querySelector(".togglePass");
let passInfoText = document.querySelector(".passInfoText");


passInput.addEventListener("keyup", ()=> {
    let displayParameter = passInput.value.length > 0 ? toggleButton.style.display = "flex" : toggleButton.style.display = "none";
    let passCheck = passInput.value.length == 0 ? passInfoText.style.color = "black" : passInput.value.length >= 6 ? passInfoText.style.color = "green" : passInfoText.style.color = "red";
})

toggleButton.addEventListener("click",()=>{
    let inputType = passInput.getAttribute("type") === "password" ? "text" : "password"
    passInput.setAttribute("type", inputType);
    let buttonContent = toggleButton.textContent === "Pokaż" ? toggleButton.textContent = "Ukryj" : toggleButton.textContent = "Pokaż";
})