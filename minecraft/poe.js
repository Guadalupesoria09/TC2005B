const boton = document.getElementById("boton_construir");
const construir_casa = () => { 
    const imagen = document.getElementById("ImagenConstruir");
    imagen.src = "https://www.movilzona.es/app/uploads-movilzona.es/2022/02/casa-minecraft-inicio-primera-planta.jpg";
    
    boton.innerHTML = "Terminar casa";
    boton.className = "button is-warning";
    boton.onclick = terminar_casa;
};
const terminar_casa = () => { 
    const imagen = document.getElementById("ImagenConstruir");
    imagen.src = "https://i.ytimg.com/vi/VMV5h74Vy8Q/maxresdefault.jpg";
    
    boton.innerHTML = "Destruir casa";
    boton.className = "button is-danger";
    boton.onclick = destruir_casa;
};
const destruir_casa = () => { 
    const imagen = document.getElementById("ImagenConstruir");
    imagen.src = "https://static.planetminecraft.com/files/image/minecraft/texture-pack/2020/328/13784023_xl.jpg";
    
    boton.innerHTML = "Construir casa";
    boton.className = "button is-primary";
    boton.onclick = construir_casa;
};
boton.onclick = construir_casa;