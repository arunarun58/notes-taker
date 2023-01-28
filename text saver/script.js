

const operate = document.getElementById("save-el")
const clearall = document.getElementById("clear-el")


operate.addEventListener("click", function(){
    let inpt = document.getElementById("inputbox-el").value
    document.getElementById("saved-el").innerHTML +=  inpt + "<br>"
})

clearall.addEventListener("click", function(){
    document.getElementById("saved-el").innerHTML = ""
    document.getElementById("inputbox-el").value = ""

})