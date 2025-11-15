window.addEventListener('DOMContentLoaded', () => {
    vaihdaTeema('theme-index');
});

function vaihdaTeema(teema) {
    document.body.className = teema;
}