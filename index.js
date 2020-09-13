const allDivs = document.querySelectorAll('.container div');
const btn = document.querySelector('.container button');
const video = document.querySelector('video');
const container = document.querySelector('.container');
let counter = 0;



const start = () => {
    btn.removeEventListener('click', start);
    const id = setInterval(function () {
        allDivs[counter].classList.add('move');

            if (counter === 8) {
                clearInterval(id);
                video.autoplay = true;
                video.load();

            }
            counter++;
        }, 1500);
}
btn.addEventListener('click', start);