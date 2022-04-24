if (window.File && window.FileReader) {
  console.log("Todas las APIs soportadas");

  function cargarVideo(e) {

    var file = e.target.files[0];
    var reader = new FileReader();

    reader.onload = function (e) {
      alert('Cargando el video'); //Ponemos un mensaje de carga 

      var src = document.createAttribute('src');
      src.value = e.target.result;

      if (!file.type.match('video.*')) { //Controlamos que el archivo sea un formato de video
        alert("Formato no admitido");
        return;
      }

      video.setAttributeNode(src);
    };

    reader.readAsDataURL(file);

  }

  function volumen(v) { //Con esta función subimos o bajamos el volumen, dependiendo del parámetro que le pasemos
    video = document.getElementById("video");

    if (v === "up") {
      if (video.volume < 0.9999999999999999) { //He tenido que poner este valor porque <0 me daba error. Es el último que me imprimía en consola
        video.volume += 0.1;
        console.log(video.volume);
      } else {
        video.volume = 1;
      }

    } else if (v === "down") {
      if (video.volume > 0.10000000000000015) {
        video.volume -= 0.1;
        console.log(video.volume);
      } else {
        video.volume = 0;
      }
    }
  }

  document.getElementById('file').addEventListener('change', cargarVideo, false);

} else {
  alert("La API de FILE no es soportada por el navegador");
}