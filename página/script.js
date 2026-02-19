<script>
        // Usando Fetch para leer el archivo JSON
        fetch('datos.json')
            .then(response => response.json()) // Convertir a JSON
            .then(data => {
                // Manipular el DOM para mostrar los datos
                document.getElementById('contenedor').innerHTML = 
                    `<p>Nombre: ${data.nombre}</p>
                     <p>Edad: ${data.edad}</p>`;
            })
            .catch(error => console.error('Error:', error));
 </script>