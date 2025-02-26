const checkbuttons = document.querySelectorAll(".btn-check");  // Butonları seç

checkbuttons.forEach((checkbutton, index) => {
    checkbutton.addEventListener("click", () => {
        if (!checkbutton.disabled) {
            // Diğer tüm butonlardan 'checked' sınıfını kaldır
            checkbuttons.forEach((button) => {
                button.classList.remove("checked");
            });

            // Şu anki butona 'checked' sınıfını ekle
            checkbutton.classList.add("checked");
        }
    });
});
