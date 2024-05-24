let qntDeSeguidores = document.querySelector('.follow');
let qntDeview = document.querySelector('.view');
let qntDeAcesso = document.querySelector('.Acessos');
let qntDeAlcance = document.querySelector('.alcance');
let result = document.querySelector('#result');
let mensagem = document.querySelector('#mensagem');


result.addEventListener('click', function() {

    let follow = parseInt( qntDeSeguidores.value.trim());
    let view = parseInt( qntDeview.value.trim());
    mensagem.innerHTML = '';

    if (isNaN(follow) || isNaN(view) || view === 0) {

        mensagem.textContent ='Por favor, insira valores válidos.';
        return;
    }

    let resultbtn = (follow / view ) * 100;
    let paragraf = document.createElement('p');

    if(resultbtn >= 10){
        mensagem.textContent = 'parabens voçe está no caminho certo, continue!'
        console.log(resultbtn)
    }
    else if(resultbtn >= 5 && resultbtn <= 8.99){
        mensagem.textContent = 'otimo, tente uma maior interaçao com seus seguidores e aumente seus resultado!'
        mensagem.style.fontSize = '2rem'
        mensagem.style.color = "#0162F8"
    }else{
        mensagem.textContent = "acho que estar na hora de mudar a estategia e tentar algo novo!"
        mensagem.style.fontSize = '2rem'
        mensagem.style.color = "#212121"
    }

    mensagem.appendChild(paragraf);

})
