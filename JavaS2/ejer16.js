{

    function addItem() {
        let elemento = document.createElement("li");
        let texto = document.createTextNode("Otro elemento");
        elemento.appendChild(texto);
        document.getElementById("lista").appendChild(elemento);
    }

    function init() {
        document.getElementById("button").addEventListener("click", addItem);
    }

    window.addEventListener("load",init);

 }