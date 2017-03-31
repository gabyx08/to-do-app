var contador=0;

function agregarTarea(event){
  event.preventDefault();

  var articulo = document.createElement("article");
  var entrada = document.createElement("input");
  var etiqueta = document.createElement("label");
  var boton = document.createElement("button");

  var id = "check" + contador;
  entrada.type = "checkbox";
  entrada.id = id;
  entrada.onclick = function(event){
    var checked = this.checked;
    var texto = this.nextSibling;
    if(checked){
      texto.style.textDecoration = "line-through";
    } else{
      texto.style.textDecoration = null;
    }
  };

  var textarea= document.getElementById("nombreTarea");
  var tarea = textarea.value;

  etiqueta.setAttribute("for", id);
  etiqueta.innerText = tarea ;
  boton.type = "button";
  boton.innerText = "Eliminar";
  boton.id = id;
  boton.onclick= eliminar;

  articulo.appendChild(entrada);
  articulo.appendChild(etiqueta);
  articulo.appendChild(boton);
  document.getElementById("contenedorTareas").appendChild(articulo);

  textarea.value="";
  contador++;
}

function eliminar(event){
  var articulo = this.parentElement;
  articulo.remove();
}
