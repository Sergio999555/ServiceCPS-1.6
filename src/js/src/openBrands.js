const repairBrandsButton = document.querySelector('.repair-brands__button-all');
const repairBrands = document.querySelector('.repair-brands__container');

export function openBrandsList() {

    if (repairBrands.classList.contains('hidden_brands') ) {
      repairBrands.classList.toggle('hidden_brands');
      repairBrands.style.height = '200px';
      this.textContent = 'Показать всё';
        
    } else {

      repairBrands.classList.toggle('hidden_brands');
      repairBrands.style.height = 'auto';
      this.textContent = 'Скрыть';
    }
}

repairBrandsButton.addEventListener('click', openBrandsList);