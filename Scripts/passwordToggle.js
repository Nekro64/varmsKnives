let passInput = document.querySelector("#inputPasswordReg")
let toggleButton = document.querySelector(".togglePass");


passInput.addEventListener("keyup", ()=> {
    let displayParameter = passInput.value.length > 0 ? toggleButton.style.display = "flex" : toggleButton.style.display = "none";

})

toggleButton.addEventListener("click",()=>{
    let inputType = passInput.getAttribute("type") === "password" ? "text" : "password"
    passInput.setAttribute("type", inputType);
    let buttonContent = toggleButton.textContent === "Pokaż" ? toggleButton.textContent = "Ukryj" : toggleButton.textContent = "Pokaż";

})
