/*Меняем валюту*/
for (char of ITEMS){
    if (CURRENCY !== char.currency){
        char.price = String(Math.floor(Number(char.price) * CURRENCY_EXCHANGE[char.currency]));
        char.oldPrice = String(Math.floor(Number(char.oldPrice) * CURRENCY_EXCHANGE[char.currency]));
        char.currency = CURRENCY;
    }
}

/*Сортировка айтемов*/
let NEW = [],
    RECOMMENDED = [],
    SALE = [];

for (char of ITEMS){
    if (char.type === 'new'){
        NEW.push(char);
    }
    if (char.type === 'recommended'){
        RECOMMENDED.push(char);
    }
    if (char.type === 'sale'){
        SALE.push(char);
    }
}

for (char of SALE){
    char.price_diff = Number(char.oldPrice) - Number(char.price)
}

NEW.sort(function(a, b){
    let dateA = new Date(a.date), dateB = new Date(b.date);
    return dateA-dateB
})

RECOMMENDED.sort(function (a, b){
    return a.price-b.price
})


SALE.sort(function (a, b){
    return b.price_diff-a.price_diff
})
/*Конец сортировки*/

let items = document.querySelector("#items"),
    value = document.querySelector("#value"),
    currency = document.querySelector("#currency")

items.appendChild(document.createTextNode(BASKET.elements));
value.appendChild(document.createTextNode(BASKET.price));
currency.appendChild(document.createTextNode(CURRENCY));