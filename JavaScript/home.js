const tHeader = document.querySelector('.top');
const bHeader = document.querySelector('.link');

const tHeaderheight = tHeader.offsetHeight;

window.addEventListener('scroll', () => {
    if (window.scrollY > tHeaderheight)
    {
        bHeader.classList.add('fixed');
        tHeader.classList.add('hidden');
    }
    else
    {
        bHeader.classList.remove('fixed');
        tHeader.classList.remove('hidden');
    }
});