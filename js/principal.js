const btnValids = document.getElementById("#botao-valida");
const inpNome = document.getElementById("nome");
const inpEmail = document.getElementById("email");
const inpAssunto = document.getElementById("assunto");
const areaTexto = document.getElementById("area-texto");

function validaContato(){
        if(inpNome.value == ""){
            alert('preencha os campos')
        }else if(inpEmail.value == ""){
            alert('preencha os campos')
        }else if(inpAssunto.value == ""){
            alert('preencha os campos')
        }else if(areaTexto.value == ""){
            alert('preencha os campos')
        }
    }