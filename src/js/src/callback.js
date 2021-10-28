const callbackButton = document.querySelectorAll('.button__phone');
const callbackWindow = document.querySelector('.callback');
const mainBody = document.body;

callbackButton.forEach( elem => elem.addEventListener('click', openCallback));

export function openCallback(evt) {
    const closeCallbackButton = callbackWindow.querySelector('.callback_close');
    
    if ( evt.target.classList.contains( 'button__phone') ) {
        callbackWindow.classList.toggle('callback_open');
        mainBody.classList.toggle('overflow');

        callbackWindow.addEventListener('click', (e) => {

            if ( e.target.classList.contains('callback_open')) {
                callbackWindow.classList.toggle('callback_open');
                mainBody.classList.toggle('overflow');
            }
        });

        closeCallbackButton.addEventListener('click', () => {
            mainBody.classList.remove('overflow');
            callbackWindow.classList.remove('callback_open');
        })
    }
}