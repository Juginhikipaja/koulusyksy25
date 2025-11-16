window.addEventListener('DOMContentLoaded', () => {
    vaihdaTeema('theme-portfolio');
});

function vaihdaTeema(teema) {
    document.body.className = teema;
}