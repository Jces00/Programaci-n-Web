{
    function ejer3(){
			
        var cadena = prompt("Introduce la cadena:");
        var separador = " ";
        var longitud=0;
        var vector=new Array();
        var posicion=0;
        
        if (cadena.length == 0){
            ejer3();
            return;
        }
        
        for (var i in cadena)
        {
            longitud++;	
        }
                
        vector[posicion]="";
        for(var i = 0; i < longitud; i++)
        {
            if(cadena[i]!=separador)
            {
                vector[posicion]+=cadena[i];
            }
            else
            {
                posicion++;
                vector[posicion]="";
                }	
        }
                    
        var resultado = "La cadena \""+cadena+"\" ";
         
        var cadenaSinEspacios = "";
        for(i in vector) {
          if(vector[i] != " ") {
            cadenaSinEspacios += vector[i];
          }
        }
         
        var letras = cadenaSinEspacios.split("");
        var letrasReves = cadenaSinEspacios.split("").reverse();
         
        
        var iguales = true;
        for(i in letras) {
          if(letras[i] == letrasReves[i]) {
            
          }
          else {
            
            iguales = false;
          }
        }
        if(iguales) {
          resultado += " es un palíndromo";
        }
        else {
          resultado += " no es un palíndromo";
        }
         
        alert("La cadena tiene " + vector.length + " palabras" + "\nLa primera palabra es: " + vector[0] + 
                "\nLa ultima palabra es: " + vector[vector.length-1] +
                "\nLa cadena en orden inverso es: " + vector.reverse() + 
                "\nLas palabras ordenadas de la a a la z son: " + vector.sort() + 
                "\nLas palabras ordenadas de la z a la a son: " + vector.sort().reverse() + 
                "\n" + resultado);
    }
}