{
    document.addEventListener("DOMContentLoaded", init);

    function ocultarMostrar(){
        if(this.innerHTML === "Ocultar contenido"){
            document.getElementById("contenidos_" + this.id.slice(7)).style.display = "none";
            this.innerHTML = "Mostrar más";
            return;
        }
        
        document.getElementById("contenidos_" + this.id.slice(7)).style.display = "";
        this.innerHTML = "Ocultar contenido";
    }
    
    function init(){
        let enlaces = document.getElementsByTagName("a")
        for(let i = 0; i < enlaces.length; i++)
            enlaces[i].addEventListener("click", ocultarMostrar);
    }
}