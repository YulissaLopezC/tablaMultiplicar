function resetInput(input){
    input.value= '';
}

const multiplicar = (num, limite)=>{

    let resultado;
    if(limite === 0){
        return 0;
    }
    
    resultado = num + multiplicar(num, limite - 1);
    addTabla(num, limite, resultado);
    return resultado; 
}

const addTabla =(num, limite, resultado) =>{
    const bodyTabla = document.getElementById("dataTabla");
    const newRow = bodyTabla.insertRow();
    const tabla = newRow.insertCell(0);
    const result = newRow.insertCell(1);
    tabla.textContent = `${num} X ${limite}`;
    result.textContent = `${resultado}`;
}

const delTabla =(tabla) =>{
    console.log("eliminar")
    const fila = tabla.getElementsByTagName("tr");
    for(let i = fila.length - 1; i >= 0; i--){
        tabla.removeChild(fila[i]);
        //console.log(fila[i])
    }
}

const tablaMultiplicar = () =>{

    const bodyTabla = document.getElementById("dataTabla");
    let num = Number(document.getElementById("multiplicando").value);
    let limite = Number(document.getElementById("limite").value);

    //si l tabla tiene filas eliminelas
    const fila = bodyTabla.getElementsByTagName("tr").length;
    if(fila != 0){
        delTabla(bodyTabla);
    }
   
    
    multiplicar(num, limite);
    resetInput(document.getElementById("multiplicando"));
    resetInput(document.getElementById("limite"));
}