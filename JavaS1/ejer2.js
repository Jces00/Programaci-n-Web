{
  function CompararFechas()
  {
    //Comprobamos que tenga formato correcto
    var Fecha_aux = document.getElementById("Fecha").value.split("/");
     var Fecha1 = new Date(parseInt(fecha_aux[2]),parseInt(fecha_aux[1]-1),parseInt(fecha_aux[0]));
   
     //Comprobamos si existe la fecha
    if (isNaN(Fecha1)){
      alert("Fecha introducida incorrecta");
      return false;
    }
    else{
      alert("La fecha que has introducido es "+Fecha1);
    }
  }
}