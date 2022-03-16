//  Escolher um Prato

let meal
let drink
let dessert
let priceOrder = 0
let priceDrink = 0
let priceDessert = 0

function order1() {
    document.querySelector("#product1").style.borderColor = "#ee0e76"
    document.querySelector("#product2").style.borderColor = "#ffffff"
    document.querySelector("#product3").style.borderColor = "#ffffff"
    document.querySelector("#product4").style.borderColor = "#ffffff"
    meal = 'Prato Simples'
    priceOrder = 20
}

function order2() {
    document.querySelector("#product1").style.borderColor = "#ffffff"
    document.querySelector("#product2").style.borderColor = "#ee0e76"
    document.querySelector("#product3").style.borderColor = "#ffffff"
    document.querySelector("#product4").style.borderColor = "#ffffff"
    meal = 'Lasanha'
    priceOrder = 25
}

function order3() {
    document.querySelector("#product1").style.borderColor = "#ffffff"
    document.querySelector("#product2").style.borderColor = "#ffffff"
    document.querySelector("#product3").style.borderColor = "#ee0e76"
    document.querySelector("#product4").style.borderColor = "#ffffff"
    meal = 'Churrasco'
    priceOrder = 22.50
}

function order4() {
    document.querySelector("#product1").style.borderColor = "#ffffff"
    document.querySelector("#product2").style.borderColor = "#ffffff"
    document.querySelector("#product3").style.borderColor = "#ffffff"
    document.querySelector("#product4").style.borderColor = "#ee0e76"
    meal = 'Peixe'
    priceOrder = 19.99
}
// Escolher a bebida

function drink1() {
    document.querySelector("#drink1").style.borderColor = "#ee0e76"
    document.querySelector("#drink2").style.borderColor = "#ffffff"
    document.querySelector("#drink3").style.borderColor = "#ffffff"
    drink = 'Refrigerante'
    priceDrink = 7
}

function drink2() {
    document.querySelector("#drink1").style.borderColor = "#ffffff"
    document.querySelector("#drink2").style.borderColor = "#ee0e76"
    document.querySelector("#drink3").style.borderColor = "#ffffff"
    drink = 'Suco Natural'
    priceDrink = 6.60
}

function drink3() {
    document.querySelector("#drink1").style.borderColor = "#ffffff"
    document.querySelector("#drink2").style.borderColor = "#ffffff"
    document.querySelector("#drink3").style.borderColor = "#ee0e76"
    drink = 'Cerveja'
    priceDrink = 10
}

// Escolher a sobremesa

function dessert1() {
    document.querySelector('#dessert1').style.borderColor = "#ee0e76"
    document.querySelector('#dessert2').style.borderColor = "#ffffff"
    document.querySelector('#dessert3').style.borderColor = "#ffffff"
    document.querySelector('#dessert4').style.borderColor = "#ffffff"
    dessert = 'Chocolate'
    priceDessert = 4.99
}

function dessert2() {
    document.querySelector('#dessert1').style.borderColor = "#ffffff"
    document.querySelector('#dessert2').style.borderColor = "#ee0e76"
    document.querySelector('#dessert3').style.borderColor = "#ffffff"
    document.querySelector('#dessert4').style.borderColor = "#ffffff"
    dessert = 'Sorvete'
    priceDessert = 10
}

function dessert3() {
    document.querySelector('#dessert1').style.borderColor = "#ffffff"
    document.querySelector('#dessert2').style.borderColor = "#ffffff"
    document.querySelector('#dessert3').style.borderColor = "#ee0e76"
    document.querySelector('#dessert4').style.borderColor = "#ffffff"
    dessert = 'Petit Gateau'
    priceDessert = 15
}

function dessert4() {
    document.querySelector('#dessert1').style.borderColor = "#ffffff"
    document.querySelector('#dessert2').style.borderColor = "#ffffff"
    document.querySelector('#dessert3').style.borderColor = "#ffffff"
    document.querySelector('#dessert4').style.borderColor = "#ee0e76"
    dessert = 'Açaí'
    priceDessert = 16
}

//Finalizar o Pedido

function finish() {
    if (!dessert && !drink && !meal) {
        alert('Não é possível fazer o pedido sem nenhum produto selecionado!')
    } else {
        let message = (`Gostaria de fazer um pedido: 
                       ${meal?meal:'sem refeição principal'}/
                       ${drink?drink:'sem bebida'}/
                       ${dessert?dessert:'sem sobremesa'}`)
        window.open(' https://wa.me/5531988888888?text=' + message)
    }
}