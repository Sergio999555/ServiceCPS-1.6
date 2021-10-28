const feedbackButton = document.querySelectorAll('.button__chat');
const feedbackWindow = document.querySelector('.feedback');
const mainBody = document.body;

feedbackButton.forEach( elem => elem.addEventListener('click', openFeedback));

export function openFeedback(evt) {
    const closeFeedbackButton = feedbackWindow.querySelector('.feedback_close');
    
    if ( evt.target.classList.contains( 'button__chat') ) {
        feedbackWindow.classList.toggle('feedback_open');
        mainBody.classList.toggle('overflow');

        feedbackWindow.addEventListener('click', (e) => {

            if ( e.target.classList.contains('feedback_open')) {
                feedbackWindow.classList.toggle('feedback_open');
                mainBody.classList.toggle('overflow');
            }
        });

        closeFeedbackButton.addEventListener('click', () => {
            mainBody.classList.remove('overflow');
            feedbackWindow.classList.remove('feedback_open');
        })
    }
}