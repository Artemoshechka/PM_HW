//Смена валюты
for (char of ITEMS){
    if (CURRENCY !== char.currency){
        char.price = String(Math.floor(Number(char.price) * CURRENCY_EXCHANGE[char.currency]));
        char.oldPrice = String(Math.floor(Number(char.oldPrice) * CURRENCY_EXCHANGE[char.currency]));
        char.currency = CURRENCY;
    }
}

//Сортировка айтемов
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
//Конец сортировки

//Добавление суммы в корзину
let items = document.querySelector("#items"),
    value = document.querySelector("#value"),
    currency = document.querySelector("#currency")

items.appendChild(document.createTextNode(BASKET.elements));
value.appendChild(document.createTextNode(BASKET.price));
currency.appendChild(document.createTextNode(CURRENCY));

//Добавление айтемов в оранжевое меню
let products = document.querySelector('.products');
for (char of MENU){
    let title = document.createTextNode(char.title);
    let link = document.createElement('a');
    let product_type = document.createElement('div');
    product_type.setAttribute('class', 'products__category');
    link.setAttribute('href',char.url);
    link.appendChild(title);
    product_type.appendChild(link);
    products.appendChild(product_type);
}

//Добавление айтемов в поля "Новинки" "Рекомендуем" "Распродажа"
let new_items = document.querySelector('.products-list-new__items'),
    new_string = `<img src="images/previous_button.png" alt="previous button" class="previous-button">
            <img src="images/next_button.png" alt="next button" class="next-button">`;

for (char of NEW){
    let item_string = `<div class="products-list__items__wrap">
                <img src="images/products_new.jpg" alt="new label" class="product-label">
                <div class="products-list__items__wrap__image"><a href="#"><img src=${char.img} alt="some item"></a></div>
                <p><a href=${char.url}>${char.description}</a></p>
                <p class="price">Цена:<span class="big-numbers"><b> ${char.price} ${char.currency}</b></span><span class="old-price"> ${char.oldPrice} ${char.currency}</span></p>
                <p>
                    <button class="buy-button">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 495.4 495.4" width="512" height="512" class="svg replaced-svg"><path d="M185 381.5c-22.9 0-41.4 18.5-41.4 41.4 0 22.9 18.5 41.4 41.4 41.4 22.8 0 41.4-18.5 41.4-41.4C226.4 400 207.9 381.5 185 381.5z"></path><path d="M365.6 381.5c-22.9 0-41.4 18.5-41.4 41.4 0 22.9 18.5 41.4 41.4 41.4 22.8 0 41.4-18.5 41.4-41.4C407 400 388.5 381.5 365.6 381.5z" class="a"></path><path d="M469.6 154.7l-229.2 0c-11.5 0-20.7 9.3-20.7 20.8s9.3 20.8 20.8 20.8l202.8 0 -12.9 43.5 -206.2 0c-10.6 0-19.2 8.6-19.2 19.3 0 10.6 8.6 19.3 19.3 19.3l194.8 0.1 -12.1 40.7H174.5L159 196.2 144.3 76.5c-1.2-9.5-8.1-17.3-17.3-19.6l-98-25C16.6 28.7 3.9 36.2 0.7 48.6s4.3 25.1 16.8 28.3l82.7 21.1 32.2 241.6c0 0 1.1 28.2 26.7 28.2h256.8c21.5 0 25.7-22.4 25.7-22.4l50.9-151.2C492.4 194.2 507.5 154.7 469.6 154.7z"></path></svg>
                        <b>КУПИТЬ</b>
                    </button>
                    <a href=${char.url} class="more">Подробнее</a>
                </p>
            </div>`
    new_string += item_string;
}
new_items.innerHTML = new_string;

new_items = document.querySelector('.products-list-recommended__items');
new_string = `<img src="images/previous_button.png" alt="previous button" class="previous-button">
            <img src="images/next_button.png" alt="next button" class="next-button">`;

for (char of RECOMMENDED){
    let item_string = `<div class="products-list__items__wrap">
                <img src="images/products_recommended.jpg" alt="new label" class="product-label">
                <div class="products-list__items__wrap__image"><a href="#"><img src=${char.img} alt="some item"></a></div>
                <p><a href=${char.url}>${char.description}</a></p>
                <p class="price">Цена:<span class="big-numbers"><b> ${char.price} ${char.currency}</b></span><span class="old-price"> ${char.oldPrice} ${char.currency}</span></p>
                <p>
                    <button class="buy-button">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 495.4 495.4" width="512" height="512" class="svg replaced-svg"><path d="M185 381.5c-22.9 0-41.4 18.5-41.4 41.4 0 22.9 18.5 41.4 41.4 41.4 22.8 0 41.4-18.5 41.4-41.4C226.4 400 207.9 381.5 185 381.5z"></path><path d="M365.6 381.5c-22.9 0-41.4 18.5-41.4 41.4 0 22.9 18.5 41.4 41.4 41.4 22.8 0 41.4-18.5 41.4-41.4C407 400 388.5 381.5 365.6 381.5z" class="a"></path><path d="M469.6 154.7l-229.2 0c-11.5 0-20.7 9.3-20.7 20.8s9.3 20.8 20.8 20.8l202.8 0 -12.9 43.5 -206.2 0c-10.6 0-19.2 8.6-19.2 19.3 0 10.6 8.6 19.3 19.3 19.3l194.8 0.1 -12.1 40.7H174.5L159 196.2 144.3 76.5c-1.2-9.5-8.1-17.3-17.3-19.6l-98-25C16.6 28.7 3.9 36.2 0.7 48.6s4.3 25.1 16.8 28.3l82.7 21.1 32.2 241.6c0 0 1.1 28.2 26.7 28.2h256.8c21.5 0 25.7-22.4 25.7-22.4l50.9-151.2C492.4 194.2 507.5 154.7 469.6 154.7z"></path></svg>
                        <b>КУПИТЬ</b>
                    </button>
                    <a href=${char.url} class="more">Подробнее</a>
                </p>
            </div>`
    new_string += item_string;
}
new_items.innerHTML = new_string;

new_items = document.querySelector('.products-list-sale__items');
new_string = `<img src="images/previous_button.png" alt="previous button" class="previous-button">
            <img src="images/next_button.png" alt="next button" class="next-button">`;
for (char of SALE){
    let item_string = `<div class="products-list__items__wrap">
                <img src="images/products_sale.jpg" alt="new label" class="product-label">
                <div class="products-list__items__wrap__image"><a href="#"><img src=${char.img} alt="some item"></a></div>
                <p><a href=${char.url}>${char.description}</a></p>
                <p class="price">Цена:<span class="big-numbers"><b> ${char.price} ${char.currency}</b></span><span class="old-price"> ${char.oldPrice} ${char.currency}</span></p>
                <p>
                    <button class="buy-button">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 495.4 495.4" width="512" height="512" class="svg replaced-svg"><path d="M185 381.5c-22.9 0-41.4 18.5-41.4 41.4 0 22.9 18.5 41.4 41.4 41.4 22.8 0 41.4-18.5 41.4-41.4C226.4 400 207.9 381.5 185 381.5z"></path><path d="M365.6 381.5c-22.9 0-41.4 18.5-41.4 41.4 0 22.9 18.5 41.4 41.4 41.4 22.8 0 41.4-18.5 41.4-41.4C407 400 388.5 381.5 365.6 381.5z" class="a"></path><path d="M469.6 154.7l-229.2 0c-11.5 0-20.7 9.3-20.7 20.8s9.3 20.8 20.8 20.8l202.8 0 -12.9 43.5 -206.2 0c-10.6 0-19.2 8.6-19.2 19.3 0 10.6 8.6 19.3 19.3 19.3l194.8 0.1 -12.1 40.7H174.5L159 196.2 144.3 76.5c-1.2-9.5-8.1-17.3-17.3-19.6l-98-25C16.6 28.7 3.9 36.2 0.7 48.6s4.3 25.1 16.8 28.3l82.7 21.1 32.2 241.6c0 0 1.1 28.2 26.7 28.2h256.8c21.5 0 25.7-22.4 25.7-22.4l50.9-151.2C492.4 194.2 507.5 154.7 469.6 154.7z"></path></svg>
                        <b>КУПИТЬ</b>
                    </button>
                    <a href=${char.url} class="more">Подробнее</a>
                </p>
            </div>`
    new_string += item_string;
}
new_items.innerHTML = new_string;

//Добавление айтемов "Что покупают сейчас"

new_items = document.querySelector('.buying__items');
new_string = '';
for (char of BUYING_RIGHT_NOW){
    let item_string = `<div class="buying__items__wrap">
                <div class="buying__items__wrap__image"><a href=${char.url}><img src=${char.img} alt="some item"></a></div>
                <p><a href=${char.url}>${char.title}</a></p>
            </div>`
    new_string += item_string;
}
new_items.innerHTML = new_string;

