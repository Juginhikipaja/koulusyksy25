window.addEventListener('DOMContentLoaded', () => {
    vaihdaTeema('theme-taidot');
});

function vaihdaTeema(teema) {
    document.body.className = teema;
}