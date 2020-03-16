const HEADER = document.getElementById('header__navigation');

HEADER.addEventListener('click' , (event) => {
    HEADER.querySelectorAll('.link').forEach(elem => elem.classList.remove('active'));
    event.target.classList.add('active');
})