const form = document.querySelector('.form');

const carBrand = document.forms.form.elements.carBrand; 
const carModel = document.forms.form.elements.carModel;  
const vehicleCondition = document.forms.form.elements.vehicleCondition;
const divsToShowIfCarUsed = document.querySelectorAll('.d-none-new');

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

function coumtOverMarketAndAuctionPrice (marketPrice, auctionPrice) {
    if (marketPrice === auctionPrice) {
        return marketPrice;
    }
    else if (marketPrice !== auctionPrice) {
        return ((marketPrice + auctionPrice)/2);
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const answersObj= Object.fromEntries(formData);

    const MarkPrice = countMarkPrice(answersObj);
    const auctionPrice = countauctionPrice(answersObj);
    const overMarketAndAuctionPrice = OverMarketAndAuctionPrice(answersObj);
    
});