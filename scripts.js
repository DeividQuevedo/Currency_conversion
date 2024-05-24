document.addEventListener("DOMContentLoaded", () => {
    const convertButton = document.querySelector(".convert-button");
    const currencySelectIn = document.getElementById("currencySelectIn");
    const currencySelectOut = document.getElementById("currencySelectOut");

    const currencyRates = {
        real: 1,
        dolar: 5.2,
        euro: 6.2
    };

    const formatCurrency = (value, currency) => {
        return new Intl.NumberFormat(undefined, {
            style: "currency",
            currency: currency
        }).format(value);
    };

    const convertValues = () => {
        const inputCurrencyValue = document.querySelector(".input-currency").value;
        const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
        const currencyValueConverted = document.querySelector(".currency-value-converted");

        const rateIn = currencyRates[currencySelectIn.value];
        const rateOut = currencyRates[currencySelectOut.value];

        const convertedValue = (inputCurrencyValue / rateIn) * rateOut;

        const currencySymbolIn = currencySelectIn.value === "real" ? "BRL" : currencySelectIn.value === "dolar" ? "USD" : "EUR";
        const currencySymbolOut = currencySelectOut.value === "real" ? "BRL" : currencySelectOut.value === "dolar" ? "USD" : "EUR";

        currencyValueToConvert.innerHTML = formatCurrency(inputCurrencyValue, currencySymbolIn);
        currencyValueConverted.innerHTML = formatCurrency(convertedValue, currencySymbolOut);

        currencyValueToConvert.setAttribute('data-currency', currencySymbolIn);
        currencyValueConverted.setAttribute('data-currency', currencySymbolOut);
    };

    const updateCurrencyInfo = (selectElement, currencyNameElement, currencyImageElement) => {
        const currency = selectElement.value;
        const currencyMap = {
            real: {
                name: 'Real Brasileiro',
                image: './assets/img/brasil.jpg'
            },
            dolar: {
                name: 'Dólar Americano',
                image: './assets/img/eua.jpg'
            },
            euro: {
                name: 'Euro',
                image: './assets/img/euro.png'
            }
        };
        currencyNameElement.innerHTML = currencyMap[currency].name;
        currencyImageElement.src = currencyMap[currency].image;
    };

    currencySelectIn.addEventListener('change', () => {
        updateCurrencyInfo(currencySelectIn, document.getElementById('currencyNameIn'), document.querySelector('.currencyImgIn'));
        convertValues();
    });

    currencySelectOut.addEventListener('change', () => {
        updateCurrencyInfo(currencySelectOut, document.getElementById('currencyNameOut'), document.querySelector('.currencyImgOut'));
        convertValues();
    });

    convertButton.addEventListener('click', convertValues);
});
