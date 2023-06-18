const form = document.querySelector('.form');

const getFormItem = (form, formElement) => form.querySelector(formElement);


getFormItem(form, 'select[name="carBrand"]');

const carBrand = getFormItem(form, 'select[name="carBrand"]');
const carModel = getFormItem(form, 'select[name="carModel"]');

carBrand.addEventListener('change', () => {
    const brand = carBrand.value;
    switch(brand){
        case 'Opel':
            carModel.innerHTML = '<option value="Insignia">Insignia (по умолчанию) </option><option value="Omega">Omega</option><option value="Calibra">Calibra</option><option value="Vectra">Vectra</option>';
            break;
        case 'Mazda':
            carModel.innerHTML = '<option value="Cosmo">Cosmo (по умолчанию) </option><option value="Mazda6">Mazda6</option><option value="Calibra">Familia</option><option value="Bongo">Bongo</option>';
            break;
        case 'Jaguar':
            carModel.innerHTML = '<option value="E-Pace">E-Pace (по умолчанию) </option><option value="I-Pace">I-Pace</option><option value="J-Pace">J-Pace</option>';
            break;
        case 'Reno':
            carModel.innerHTML = '<option value="Logan">Logan (по умолчанию) </option><option value="Clio">Clio</option><option value="Laguna">Laguna</option><option value="Duster">Duster</option>';
            break;
        }
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const answersArr= Object.fromEntries(formData);

});