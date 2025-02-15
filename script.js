document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".container").style.opacity = "1";
    document.querySelector(".container").style.transform = "translateY(0)";

    document.getElementById("toggleMore").addEventListener("click", function() {
        let moreInfo = document.getElementById("moreInfo");
        moreInfo.classList.toggle("show");
        this.textContent = moreInfo.classList.contains("show") ? "Скрыть" : "Подробнее";
    });
});