


async function buscaEndereco(cep){
    var mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = '';

  
    
    try{
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaCEPConvertida = await consultaCEP.json();

        if (consultaCEPConvertida.erro){
            throw Error('CEP Inválido!');
        }

        var cidade = document.getElementById('cidade');
        var logradouro = document.getElementById('endereco');
        var estado = document.getElementById('estado');
        var bairro = document.getElementById('bairro');


        cidade.value = consultaCEPConvertida.localidade;
        logradouro.value = consultaCEPConvertida.logradouro;
        estado.value = consultaCEPConvertida.uf;
        bairro.value = consultaCEPConvertida.bairro;

        console.log(consultaCEPConvertida);
        return consultaCEPConvertida;
    }catch(erro){

        mensagemErro.innerHTML = `<p>CEP Inválido! Corrija e tente novamente</p>`
        console.log(erro);
    }
}

var campoCep = document.getElementById('cep');
campoCep.addEventListener('focusout', () => buscaEndereco(campoCep.value))




