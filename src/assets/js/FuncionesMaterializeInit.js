document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems,{});
});


  document.addEventListener('DOMContentLoaded', function() {
    let sidenav = document.querySelectorAll('.sidenav');
    let instancia_sidenav = M.Sidenav.init(sidenav,{});    
    let dropdowns = document.querySelectorAll('.dropdown-trigger');
    let instancia_dropwdown = M.Dropdown.init(dropdowns, {
    hover:false});
  });


  function inyectarCodigo(nombre, apellido) {
    nombre = `<h3>${nombre} ${apellido}</h3>`
    document.getElementById("caja").innerHTML = nombre;
  
  }


  function iniciarImagen() {
 
    const $seleccionArchivos = document.querySelector("#seleccionArchivos"),
      $imagenPrevisualizacion = document.querySelector("#imagenPrevisualizacion");
  
    $seleccionArchivos.addEventListener("change", () => {
      // Los archivos seleccionados, pueden ser muchos o uno
      const archivos = $seleccionArchivos.files;
      // Si no hay archivos salimos de la función y quitamos la imagen
      if (!archivos || !archivos.length) {
        $imagenPrevisualizacion.src = "";
        return;
      }
      // Ahora tomamos el primer archivo, el cual vamos a previsualizar
      const primerArchivo = archivos[0];
      console.log(primerArchivo.path);
      // Lo convertimos a un objeto de tipo objectURL
      const objectURL = URL.createObjectURL(primerArchivo);
      // Y a la fuente de la imagen le ponemos el objectURL
      $imagenPrevisualizacion.src = objectURL;
    });
  }

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems, {});
  });

function initSelect() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, {});
}

  

  

 


  