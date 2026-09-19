const menu = document.getElementById("menu");
    const linkes = document.querySelector(".nav-linkes");

    menu.addEventListener("click", () => {
    linkes.classList.toggle("ativo");
});