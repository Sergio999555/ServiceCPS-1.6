const sidebarButton = document.querySelector('.button__menu');
const sidebarWindow = document.querySelector('.sidebar');
const mainBody = document.body;

sidebarButton.addEventListener('click', openPopup);

export function openPopup(evt) {
    const closeSidebarButton = sidebarWindow.querySelector('.sidebar_close');
    if ( evt.target.classList.contains('button__menu')) {

        sidebarWindow.classList.toggle('sidebar_open');
        mainBody.classList.toggle('overflow');

        sidebarWindow.addEventListener('click', (e) => {

            if ( e.target.classList.contains( 'sidebar_open')) {
                sidebarWindow.classList.toggle('sidebar_open');
                mainBody.classList.toggle('overflow');
            }
        });

        closeSidebarButton.addEventListener('click', () => {
            mainBody.classList.remove('overflow');
            sidebarWindow.classList.remove('sidebar_open');
        })
    }
}