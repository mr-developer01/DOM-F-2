var loginButton = document.querySelector("#login button")
var regButton = document.querySelector("#reg button")
var login = document.querySelector("#login")
var reg = document.querySelector("#reg")


loginButton.addEventListener("click", () => {
    login.style.transform = "translateX(-100%)"
    reg.style.transform = "translateX(-100%)"
})

regButton.addEventListener("click", () => {
    reg.style.transform = "translateX(0%)"
    login.style.transform = "translateX(0%)"
})