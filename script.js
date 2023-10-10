document.addEventListener("DOMContentLoaded", () => {
    const imageContainers = document.querySelectorAll(".image-container");
    const popup = document.getElementById("popup");
    const pdfViewer = document.getElementById("pdfViewer");
    const popupMessage = document.getElementById("popupMessage");

    imageContainers.forEach((container) => {
        container.addEventListener("click", (event) => {
            event.stopPropagation(); // Evita que el clic se propague y active el evento de cierre.

            const pdfUrl = event.currentTarget.getAttribute("data-pdf");
            const message = event.currentTarget.getAttribute("data-message");

            pdfViewer.src = pdfUrl;
            popupMessage.textContent = message;
            popup.style.display = "block"; // Muestra el popup solo cuando se hace clic en una imagen
        });
    });

    popup.addEventListener("click", (event) => {
        event.stopPropagation(); // Evita que el clic en el popup lo cierre.
    });

    document.addEventListener("click", () => {
        popup.style.display = "none"; // Oculta el popup cuando se hace clic en cualquier lugar fuera de él
    });

    // Cierra el popup cuando se presiona la tecla Esc
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            popup.style.display = "none";
        }
    });
});
