document.getElementById('formulario').addEventListener('submit', guardarNota);


function guardarNota(e){
    
    let titulo = document.getElementById('titulo').value;
    let descripcion = document.getElementById('descripcion').value;

    const nota = {
        titulo,
        descripcion
    };

    if(localStorage.getItem('notas') === null){

        let notas = [];
        notas.push(nota);
        localStorage.setItem('notas', JSON.stringify(notas));
        
    }
    else{

        let notas = JSON.parse(localStorage.getItem('notas'));
        notas.push(nota);
        localStorage.setItem('notas', JSON.stringify(notas))
        
    }
       
    dameNota();
    document.getElementById('formulario').reset();
    e.preventDefault();


}

function dameNota(){
    let notas = JSON.parse(localStorage.getItem('notas'));
    let vistaNotas = document.getElementById('notas');

    vistaNotas.innerHTML = '';

    for(let i = 0; i < notas.length; i++){

        let titulo = notas[i].titulo;
        let descripcion = notas[i].descripcion;


        vistaNotas.innerHTML += `<div class="card mb-2">

            <div class="card-body">
                <p>${titulo} - ${descripcion}</p>
                <a class="btn btn-danger" onClick="eliminarTarea('${titulo}')">
                    Borrar
                </a>
            </div>

        </div>
        `
    }
}

function eliminarTarea(titulo){

    let notas = JSON.parse(localStorage.getItem('notas'));

    for(let i = 0; i < notas.length; i++){

        if(notas[i].titulo == titulo){

            notas.splice(i, 1);
        }
    }

    localStorage.setItem('notas', JSON.stringify(notas));

    dameNota()    
}

dameNota();