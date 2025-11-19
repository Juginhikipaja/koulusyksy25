window.addEventListener('DOMContentLoaded', () => {
    vaihdaTeema('theme-index');
});

function vaihdaTeema(teema) {
    document.body.className = teema;


    const sections = document.querySelectorAll('main.main-content section');
    sections.forEach(sec => sec.style.display = 'none');

    switch(teema) {
        case 'theme-index':
            document.getElementById('section-index').style.display = 'block';
            break;
        case 'theme-teknologiat':
            document.getElementById('section-teknologiat').style.display = 'block';
            break;
        case 'theme-portfolio':
            document.getElementById('section-portfolio').style.display = 'block';
            break;
    }
}