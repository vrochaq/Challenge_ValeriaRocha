function encriptar() {
    let texto = document.getElementById("inputTexto").value;
    let outputTexto = document.getElementById("outputTexto");

    if (texto.trim() === "") {
        outputTexto.value = "Ningún mensaje fue encontrado.\nIngresa el texto que desees encriptar o desencriptar.";
        outputTexto.classList.add("error-background");
        outputTexto.classList.remove("hidden-background");
    } else {
        let textoEncriptado = texto
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
        outputTexto.value = textoEncriptado;

        
        outputTexto.classList.add("hidden-background");
        outputTexto.classList.remove("error-background");
    }
}

function desencriptar() {
    let texto = document.getElementById("inputTexto").value;
    let outputTexto = document.getElementById("outputTexto");

    if (texto.trim() === "") {
       
        outputTexto.value = "Ningún mensaje fue encontrado.\nIngresa el texto que desees encriptar o desencriptar.";
        outputTexto.classList.add("error-background");
        outputTexto.classList.remove("hidden-background");
    } else {
        let textoDesencriptado = texto
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
        outputTexto.value = textoDesencriptado;

       
        outputTexto.classList.add("hidden-background");
        outputTexto.classList.remove("error-background");
    }
}

function copiar() {
    let textoEncriptado = document.getElementById("outputTexto");
    textoEncriptado.select();
    textoEncriptado.setSelectionRange(0, 99999); 

    
    document.execCommand("copy");

    
    document.getElementById("inputTexto").value = "";

    
    textoEncriptado.classList.remove("error-background");
    textoEncriptado.classList.add("hidden-background");

    
    alert("Texto copiado al portapapeles");
}


