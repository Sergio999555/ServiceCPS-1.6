const repairEquipmentButton = document.querySelector('.repair-equipment__button-all');
const repairEquipment = document.querySelector('.repair-equipment__navigation');

export function openEquipmentList() {

    if (repairEquipment.classList.contains('hidden_equipment') ) {
      repairEquipment.classList.toggle('hidden_equipment');
      repairEquipment.style.minHeight = '360px';
      this.textContent = 'Скрыть';
        
    } else {

      repairEquipment.classList.toggle('hidden_equipment');
      repairEquipment.style.minHeight = '160px';
      this.textContent = 'Показать всё';
    }
}

repairEquipmentButton.addEventListener('click', openEquipmentList);