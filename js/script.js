const menu = document.getElementById("menu");
    const linkes = document.querySelector(".nav-linkes");

    menu.addEventListener("click", () => {
    linkes.classList.toggle("ativo");
});

document.querySelectorAll(".nav-linkes a").forEach(link => {
    link.addEventListener("click", () => {
        linkes.classList.remove("ativo");
    });
});