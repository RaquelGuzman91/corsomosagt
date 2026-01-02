document.getElementById("up"),addEventListener("click", scrollUp);

function scrollUp() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}