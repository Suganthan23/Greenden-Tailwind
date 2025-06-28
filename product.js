var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("closenav")

menuicon.addEventListener("click", function () {
    sidenav.style.right = 0
})

closenav.addEventListener("click", function () {
    sidenav.style.right = "-50%"
})

var productContainer = document.getElementById("pc")
var search = document.getElementById("search")
var productlist = productContainer.querySelectorAll("div") 

search.addEventListener("keyup", function () {
    var enteredValue = event.target.value.toUpperCase()

    for (let count = 0; count < productlist.length; count++) {
        var productName = productlist[count].querySelector("h1").textContent.toUpperCase()

        if (productName.indexOf(enteredValue) < 0) {
            productlist[count].style.display = "none"
        } else {
            productlist[count].style.display = "block"
        }
    }
})
