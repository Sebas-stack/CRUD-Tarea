// varables globales 
let campoTexto = document.querySelector(".campoTexto");
let btnCrear = document.querySelector(".boton");
let tablaTareas = document.querySelector(".table");


//agregar al boton el evento click para crear una tarea

btnCrear.addEventListener("click",()=>{
    // alert(campoTexto.value)
    creaTareas();
})

//funcion para y  crear una tarea
function creaTareas() {
    // validar si se escribe en el campo de texto 
    if(campoTexto.value){
        // alert("todo melo") 
        let fila = document.createElement("tr")
        fila.innerHTML = `
            <td>${campoTexto.value} </td>
            <td><span onclick="editarTarea();">📃</span></td>
            <td><span onclick= "eliminrTarea();">❌</span></td>
        `
        tablaTareas.appendChild(fila)
        campoTexto.value =""; //limpiar campo de texto

    }else{
        alert("Maloooo")
    }
}

// funcion para editar una tarea 

function editarTarea() {
    let tarea = event.target;
    let viejaTarea = tarea.parentElement.parentElement.children[0];
    let nuevaTarea =  prompt("escribe la nueva tarea", viejaTarea.textContent );
    viejaTarea.textContent = nuevaTarea;
}



// funcion para eliminar tarea 

function eliminrTarea() {
    let tarea = event.target;
    // alert('deseas eliminar la tarea?') 
    // tarea.remove(); 
    let confirmar = confirm('Deseas eliminar una tarea?')
    if (confirmar) {
        tarea.parentElement.parentElement.remove()
    }
    // console.log(tarea.parentElement.parentElement) 
}

// agrgar evento del teclado para oprimir la tecla enter 
campoTexto.addEventListener("keyup",(tecla)=>{
    if (tecla.key == "Enter") {
        creaTareas()
    }
})