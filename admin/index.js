window.addEventListener('load', crawlAnim)

function crawlAnim() {
    var welTxt = document.querySelector('.welcome-txt')
    welTxt.style.animation = `crawlUp 1.5s 0s ease-in-out`

    var addEvt = document.querySelector('.add-event')
    setTimeout(() => {
        addEvt.classList.add('show-me')
    }, 1500);
}