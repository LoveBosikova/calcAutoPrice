// Захватывает элементы ДОМ-дерева, с которыми будем работать
const form = document.querySelector('.form');

const carBrand = document.forms.form.elements.carBrand; 
const carModel = document.forms.form.elements.carModel;  
const vehicleCondition = document.forms.form.elements.vehicleCondition;
const divsToShowIfCarUsed = document.querySelectorAll('.d-none-new');
const result = document.getElementById('result');
const resultPrice =  document.getElementById('resultPrice');
const closeBtn = document.getElementById('closeBtn');

// Меняем выбор марок в зависимости от бренда
carBrand.addEventListener('change', () => {
    const brand = carBrand.value;
    switch(brand){
        case 'Opel':
            carModel.innerHTML = '<option value="Insignia">Insignia (по умолчанию) </option><option value="Omega">Omega</option><option value="Calibra">Calibra</option><option value="Vectra">Vectra</option>';
            break;
        case 'Mazda':
            carModel.innerHTML = '<option value="Cosmo">Cosmo (по умолчанию) </option><option value="Mazda6">Mazda6</option><option value="Familia">Familia</option><option value="Bongo">Bongo</option>';
            break;
        case 'Jaguar':
            carModel.innerHTML = '<option value="E-Pace">E-Pace (по умолчанию) </option><option value="I-Pace">I-Pace</option><option value="J-Pace">J-Pace</option>';
            break;
        case 'Reno':
            carModel.innerHTML = '<option value="Logan">Logan (по умолчанию) </option><option value="Clio">Clio</option><option value="Laguna">Laguna</option><option value="Duster">Duster</option>';
            break;
        }
});

// Если машина бу, показываем поля с количеством владельцев и сроком эксплуатации.
// Если машина новая, прячем эти поля
vehicleCondition.forEach((condition) => { condition.addEventListener('change', ()=>{

    console.log(condition.value);
    if (condition.value === 'used') {
        divsToShowIfCarUsed.forEach((div) => {
            div.style.display = 'block';
        })
    }
    else if (condition.value === 'new') {
        divsToShowIfCarUsed.forEach((div) => {
            div.style.display = 'none';
        })
    }
})})

// Набор чистых функций для рассчетов окончательной цены
function countMarkPrice ({ carBrand, carModel}) {
    if (carBrand === 'Opel') {
        switch(carModel){
            case 'Insignia':
                return 1400000;
            case 'Omega':
                return 1700000;
            case 'Calibra':
                return 2000000;
            case 'Vectra':
                return 1900000;
            }
    }

    else if (carBrand === 'Mazda') {
        switch(carModel){
            case 'Cosmo':
                return 2400000;
            case 'Mazda6':
                return 2700000;
            case 'Familia':
                return 3000000;
            case 'Bongo':
                return 5900000;
            }
    }
    else if (carBrand === 'Jaguar') {
        switch(carModel){
            case 'E-Pace':
                return 2400000;
            case 'I-Pace':
                return 1900000;
            case 'J-Pace':
                return 1400000;
            }
    }
    else if (carBrand === 'Reno') {
        switch(carModel){
            case 'Logan':
                return 1600000;
            case 'Clio':
                return 1200000;
            case 'Duster':
                return 2100000;
            }
    }
}

function countauctionPrice ({ auctionSelect }) {
    switch(auctionSelect){
        case '800':
            return 800000;
        case '900':
            return 900000;
        case '500':
            return 500000;
        case '600':
            return 600000;
        case '700':
            return 700000;
        case '1M':
            return 1000000;
        case '1,5M':
            return 1500000;
        }
};

function countOverMarketAndAuctionPrice (marketPrice, auctionPrice) {
    if (marketPrice === auctionPrice) {
        return marketPrice;
    }
    else if (marketPrice !== auctionPrice) {
        return ((marketPrice + auctionPrice)/2);
    }
}

function countOilIndex ({ oilType }) {
    switch(oilType){
        case 'Oil':
            return 0.9;
        case 'dizel':
            return 0.8;
        case 'gase':
            return 0.7;
        case 'electricity':
            return 0.9;
        }
}

function countpriceWithOilIndex (price, index) {
    return price*index;
}

function countEngineCapacityIndex ({ engineCapacity }) {
    if (engineCapacity <=3) {
        return 0.96;
    }
    else if (engineCapacity > 3.5 && engineCapacity <= 8) {
        return 0.95;
    }
    else if (engineCapacity > 8 && engineCapacity <= 15) {
        return price*0.92;
    }
    else if (engineCapacity > 15) {
        return 1.3;
    }
}

function countWithEngineCapacityIndex (price, index) {
    return Math.round(price*index);
}

function countHorsepowerIndex ({ horsepower }) {
    if (horsepower < 100) {
        return 0.7;
    }
    else if (horsepower >= 100 && horsepower <= 400) {
        return 1.2;
    }
    else if (horsepower > 400 && horsepower <= 800) {
        return 1.4;
    }
    else if (horsepower > 800) {
        return 1.8;
    }
}

function countPriceWithHorsepowerIndex (price, index) {
    return Math.round(price*index);
}

function isNew ({vehicleCondition}){
    vehicleCondition === 'new' ? true : false;
}

function getUsersCount ({usersNumbers}) {
    if (usersNumbers === 'one') {
        return 0.97;
    }
    else if (usersNumbers === 'several') {
        return 0.9;
    }
    else if (usersNumbers === '4more') {
        return 0.8;
    }

}

function countPriceMindingUsersCount (price, { carAge, usersNumbers }) {
    console.log(carAge);
    console.log(usersNumbers);
    console.log(price);

    let priceWithUsageFactor = price;

    if (carAge === '0-3') {
        priceWithUsageFactor = priceWithUsageFactor*0.98;
    }
    else if (carAge === '3-5') {
        priceWithUsageFactor = priceWithUsageFactor*0.92;
    }
    else if (carAge === '5-7') {
        priceWithUsageFactor = priceWithUsageFactor*0.89;
    }
    else if (carAge === '7+') {
        priceWithUsageFactor = priceWithUsageFactor*0.8;
    }

    if (usersNumbers === 'one') {
        return priceWithUsageFactor = priceWithUsageFactor*0.98;
    }
    else if (usersNumbers === 'several') {
        return priceWithUsageFactor = priceWithUsageFactor*0.92;
    }
    else if (usersNumbers === '4more') {
        return priceWithUsageFactor = priceWithUsageFactor*0.89;
    }
};

function countPriceMindingAge (isNew, answersObj, priceWithHorsepowerIndex) {
    if(isNew(answersObj)) {
        return priceWithHorsepowerIndex*2;
    }

    else {
        return Math.round(countPriceMindingUsersCount(priceWithHorsepowerIndex, answersObj));
    }
}

// Тут происходит самое важное - собираются подсчёты и выводится результат.
// Чтобы в будущем было легче фиксить и добавлять новые факторы, подсчёты выведены в переменные.
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const answersObj= Object.fromEntries(formData);
    console.log(answersObj);

    const MarkPrice = countMarkPrice(answersObj);
    const auctionPrice = countauctionPrice(answersObj);
    const overMarketAndAuctionPrice = countOverMarketAndAuctionPrice(MarkPrice, auctionPrice);

    const oilIndex = countOilIndex(answersObj);
    const priceWithOilIndex = countpriceWithOilIndex(overMarketAndAuctionPrice, oilIndex);

    const engineCapacityIndex = countEngineCapacityIndex(answersObj);
    const priceWithEngineCapacityIndex = countWithEngineCapacityIndex(priceWithOilIndex, engineCapacityIndex);

    const horsepowerIndex = countHorsepowerIndex(answersObj);
    const priceWithHorsepowerIndex = countPriceWithHorsepowerIndex(priceWithEngineCapacityIndex, horsepowerIndex); 

    const priceMindingAge = countPriceMindingAge(isNew, answersObj, priceWithHorsepowerIndex);

    resultPrice.innerHTML = `<bold>${priceMindingAge} рублей</bold>`;
    result.style.visibility = 'visible';
});

// Зактываем результат, чтобы можно было поменять данные в форме или просчитать другую машину
closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    result.style.visibility = 'hidden';
});