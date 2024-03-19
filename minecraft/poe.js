const boton = document.getElementById("boton_construir");
boton.onclick = () => { 
    const imagen = document.getElementById("ImagenConstruir");
    imagen.src = "https://www.movilzona.es/app/uploads-movilzona.es/2022/02/casa-minecraft-inicio-primera-planta.jpg";
    
    console.log(imagen);
};