// Este archivo contiene el código JavaScript para agregar funcionalidades interactivas a la página web

// Función para mostrar un mensaje de confirmación antes de enviar el formulario de encuesta
document.addEventListener('DOMContentLoaded', function() {
    const encuestaForm = document.getElementById('encuesta-form');
    if (encuestaForm) {
        encuestaForm.addEventListener('submit', function(event) {
            const confirmacion = confirm("¿Estás seguro de enviar la encuesta?");
            if (!confirmacion) {
                event.preventDefault();
            }
        });
    }
});

// Función para mostrar un mensaje de confirmación antes de eliminar una donación
document.addEventListener('DOMContentLoaded', function() {
    const eliminarBtns = document.querySelectorAll('.eliminar-btn');
    eliminarBtns.forEach(item => {
        item.addEventListener('click', function(event) {
            const confirmacion = confirm("¿Estás seguro de eliminar esta donación?");
            if (!confirmacion) {
                event.preventDefault();
            }
        });
    });
});
