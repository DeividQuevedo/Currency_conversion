const convertButton = document.querySelector(".convert-button")
const currencySelectIn = document.querySelector(".currencySelectIn")
const currencySelectOut = document.querySelector(".currencySelectOut")

currencySelectIn.addEventListener('change', changeCurrencyIn)
currencySelectOut.addEventListener('change', changeCurrencyOut)
convertButton.addEventListener('click', convertValues)

function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //Valor em real
    const currencyValueConverted = document.querySelector(".currency-value") // Outras moedas
    

    console.log(currencySelectIn.value)
    const dolarToday = 5.2
    const euroToday = 6.2
    const realToday = 1

    
    if (currencySelectIn.value == "real"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency", 
            currency: "BRL"
        }).format(inputCurrencyValue / realToday)
        
    }

    if (currencySelectIn.value == "dolar"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", 
            currency: "USD"
        }).format(inputCurrencyValue)
        
    }

    if (currencySelectIn.value == "euro"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency", 
            currency: "EUR"
        }).format(inputCurrencyValue)
        
    } 
    
    
    if (currencySelectOut.value == "real"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency", 
            currency: "BRL"
        }).format(inputCurrencyValue / realToday)
    }

    if (currencySelectOut.value == "dolar"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", 
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelectOut.value == "euro"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)    
    } 
    
}

function changeCurrencyIn() {
    const currencyNameIn = document.getElementById('currencyNameIn')
    const currencyImageIn = document.querySelector('.currencyImgIn')
    const currencyValueToConvert = document.querySelector(".currency-value") //Valor em real

    if (currencySelectIn.value == 'real') {

        currencyNameIn.innerHTML = 'Real Brasileiro'
        currencyImageIn.src = './assets/img/brasil.jpg'

        convertValues()
    }

    if (currencySelectIn.value == 'dolar') {
        currencyNameIn.innerHTML = 'Dolar americano'
        currencyImageIn.src = './assets/img/eua.jpg'
        convertValues()
    }

    if (currencySelectIn.value == 'euro') {
        currencyNameIn.innerHTML = 'Euro'
        currencyImageIn.src = './assets/img/euro.png'
        convertValues()
    }


}

function changeCurrencyOut() {
    const currencyNameIn = document.getElementById('currencyNameIn')
    const currencyNameOut = document.getElementById('currencyNameOut')
    const currencyImageIn = document.querySelector('.currency-img')
    const currencyImageOut = document.querySelector('.currencyImgOut')

    if (currencySelectOut.value == 'real') {

        currencyNameOut.innerHTML = 'Real Brasileiro'
        currencyImageOut.src = './assets/img/brasil.jpg'
        convertValues()
    }

    if (currencySelectOut.value == 'dolar') {
        currencyNameOut.innerHTML = 'Dolar americano'
        currencyImageOut.src = './assets/img/eua.jpg'
        convertValues()
    }

    if (currencySelectOut.value == 'euro') {
        currencyNameOut.innerHTML = 'Euro'
        currencyImageOut.src = './assets/img/euro.png'
        convertValues()
    }


}


