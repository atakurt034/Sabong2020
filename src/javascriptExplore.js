document.addEventListener('DOMContentLoaded', (event) => {
    stars();
})


function stars() {
    var footerText = document.getElementsByClassName('text-muted')
    var stars = document.getElementsByClassName('stars')[0]
    var x = 4;
    for (var i = 0; i < x; i++) {
        var stars1 = stars.cloneNode(true)
        footerText[i].appendChild(stars1)
        footerText[i].classList.add("footer-text");
    }
    stars.remove()
}

function removeBasket() {
    var basket = document.getElementsByClassName('btn-basket')[0]
    var search = document.getElementsByClassName('d-flex')[0]
    search.prepend(basket)
    basket.classList.remove('basket')
}

function basket() {
    var basket = document.getElementsByClassName('btn-basket')[0]
    var navbar = document.getElementsByClassName('navbar-brand')[0]
    navbar.append(basket)
    basket.classList.add('basket')
}

function myFunction(x) {
    if (x.matches) { // If media query matches
        basket()
    } else {
removeBasket()
    }
}
var x = window.matchMedia("(max-width: 992px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes