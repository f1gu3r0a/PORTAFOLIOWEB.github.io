document.addEventListener('DOMContentLoaded', function () {
    const showContentButtons = document.querySelectorAll('.show-content-button');
  
    showContentButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const hiddenContent = button.nextElementSibling;
        hiddenContent.style.display =
          hiddenContent.style.display === 'block' ? 'none' : 'block';
      });
    });
  });


  
  /*ventana*/
 
 // Cuando el documento esté completamente cargado
 $(document).ready(function() {
    $(".custom-show-button").click(function() {
        var pdfUrl = $(this).data("pdf");
        window.open(pdfUrl, "_blank");
    });
});


