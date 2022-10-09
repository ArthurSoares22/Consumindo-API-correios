

//Criando uma função para poder consultar o cep
function ConsultarEndereco() {
    const cep = document.querySelector('#ceptxt').value;
    if (cep.length !== 8) {
        window.alert('Cep Invalido!')
        return;



    }


    //Variável que armazena a URL da API
    const Url = `https://viacep.com.br/ws/${cep}/json/`;

    //Consumindo a API utilizando "Fetch"
    fetch(Url).then(function (response) {       //Função que espera um retorno das informações da URL
        response.json().then(function (data) {  //Função que retorna os valores do response em formato Json
            preencherForm(data)



        })

    });

}

//Função que preenche os campos do formulário com as informações retornadas no data
function preencherForm(dados) {

    //Verificação de cep não encontrado 
    if (dados.erro) {

        window.alert("Cep não encontrado")
        document.querySelector('#rua').value = ("");
        document.querySelector('#br').value = ("");
        document.querySelector('#cidade').value = ("");
        document.querySelector('#estado').value = ("");




    }
    //Retornando os valores do "data", caso o cep seja válido 
    else {
        
        document.querySelector('#rua').value = dados.logradouro;
        document.querySelector('#br').value = dados.bairro;
        document.querySelector('#cidade').value = dados.localidade;
        document.querySelector('#estado').value = dados.uf;

    }


}












