const HEADER = document.getElementById('header__navigation');

HEADER.addEventListener('click', (event) => {
    HEADER.querySelectorAll('.link').forEach(elem => elem.classList.remove('active'));
    event.target.classList.add('active');
})

document.addEventListener('scroll', (event) => {
    const curPos = window.scrollY;
    
    document.querySelectorAll('.container > .scroll').forEach((elem) => {
        
        if (elem.offsetTop - 95 <= curPos && (elem.offsetTop + elem.offsetHeight) > curPos) {
            HEADER.querySelectorAll('.link').forEach(a => {
                a.classList.remove('active');
                if (elem.getAttribute('id') === a.getAttribute('href').substring(1)) {
                    a.classList.add('active')
                }
            })
            
        }
    })
})