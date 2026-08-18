
document.getElementById("button-top").addEventListener("click", scrollUp);

function scrollUp() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}