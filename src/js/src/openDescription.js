const contentTextBtn = document.querySelector('.content__text-button');
const contentTxt = document.querySelector('.content__text');

export function openMainTxt() {

    if (contentTxt.classList.contains('hidden_text')) {
      contentTxt.classList.toggle('hidden_text');
      contentTxt.style.height = 'auto';
      this.textContent = 'Скрыть';
        
    } else {

      contentTxt.classList.toggle('hidden_text');
      contentTxt.style.height = '90px';
      this.textContent = 'Читать далее';
    }
}

contentTextBtn.addEventListener('click', openMainTxt);