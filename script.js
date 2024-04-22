let menuVisible = false;

function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById( "nav" ).classList="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible=true;
    }
}

function seleccionar(){
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }

}
function descargarPDF() {
    // Especifica la ruta de tu archivo PDF
    var rutaPDF = "/Estefania_CristóbaldelaCruz_CV.pdf";
    
    // Crea un elemento <a> temporal
    var linkElement = document.createElement('a');
    linkElement.href = rutaPDF;
    
    // Añade el atributo 'download' para forzar la descarga
    linkElement.download = 'EstefaniaCV.pdf';
    
    // Hace clic en el enlace para iniciar la descarga
    linkElement.click();
}

//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 