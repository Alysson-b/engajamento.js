let qntDeSeguidores = document.querySelector('.follow');
let qntDeview = document.querySelector('.view');
let qntDeAcesso = document.querySelector('.acessos');
let qntDeAlcance = document.querySelector('.alcance');
let result = document.querySelector('#result');
let mensagem = document.querySelector('#mensagem');
let aviso = document.querySelector('.mensagem')
let btn = document.querySelector('.btn')


result.addEventListener('click', function() {

    function showButton(){
        result.style.display = 'block';
        mensagem.innerHTML = '';
    }

    qntDeSeguidores.addEventListener('input', showButton);
    qntDeview.addEventListener('input', showButton);

    let follow = parseInt( qntDeSeguidores.value.trim());
    let view = parseInt( qntDeview.value.trim());
    mensagem.innerHTML = '';
   
    let resultbtn = (follow / 100) * (view / 100) * 0.05 ;
    let paragraf = document.createElement('p');
    
    if (isNaN(follow) || isNaN(view) || view === 0) {
        mensagem.textContent ='Por favor, insira valores válidos.';
        return;
    }
    result.style.display = 'none';

    if(resultbtn >= 10){
        mensagem.textContent = 'Parabéns, você está no caminho certo, continue!'
        mensagem.style.color = '#0000b4be'
    }else if(resultbtn >= 5 && resultbtn < 10){
        mensagem.textContent = 'Ótimo, tente uma maior interação com seus seguidores e aumente seus resultados!'
        mensagem.style.color = "#00b327"
    }else{
        mensagem.textContent = "Acho que está na hora de mudar a estratégia e tentar algo novo!"
        mensagem.style.color = "#c20101b6"
    }
    mensagem.appendChild(paragraf);
    qntDeSeguidores.value = '';
    qntDeview.value = '';
})

btn.addEventListener('click', function() {

    function showButton(){
        btn.style.display = 'block';
        aviso.innerHTML = '';
    }
    qntDeAcesso.addEventListener('input', showButton);
    qntDeAlcance.addEventListener('input', showButton);
     
    let hits = parseInt (qntDeAcesso.value.trim());
    let range = parseInt (qntDeAlcance.value.trim())

    if (isNaN(hits) || isNaN(range) || hits === 0 || range === 0) {
        aviso.textContent ='Por favor, insira valores válidos.';
        return;
    }

    btn.style.display = 'none';

    let btnClc = (hits / range ) * 100;
    let mensage = document.createElement('p');

    if(btnClc >= 0.10 ){
        aviso.textContent = 'Parabéns, seu alcance foi de!'
        aviso.style.color = '#0000b4be'

    }else if(btnClc >= 0.05 && btnClc < 0.08){
        aviso.textContent = 'Você teve um ótimo desempenho!'
        aviso.style.color = "#00b327"
    }else{
        aviso.textContent = "Acho que podemos melhorar!"
        aviso.style.color = "#c20101b6"
    }
    mensage.textContent = `${btnClc.toFixed(0)}%`;
    aviso.appendChild(mensage);
    qntDeAcesso.value = '';
    qntDeAlcance.value = '';


})

