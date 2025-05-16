document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");

  fetch("components/navbar.html")
    .then((res) => res.text())
    .then((data) => {
      header.innerHTML = data;

      // Ждём пока вставится, затем активируем поведение
      if (typeof initNavbar === 'function') {
        initNavbar();
      }
    })
    .catch((err) => console.error("Ошибка загрузки navbar:", err));
});