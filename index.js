document.querySelector('form').onsubmit = () => {
    let busca = document.querySelector('#cep');

    fetch(`https://viacep.com.br/ws/${busca.value}/json/`).then(dados => {dados.json().then((cep)=> retorno(cep))})
    const retorno = (result) => {
        for (const campo in result){
            if (document.querySelector('#'+campo)){
                document.querySelector('#'+campo).value = result[campo]
            }
        }
    }
}