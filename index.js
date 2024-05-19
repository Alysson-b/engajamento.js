const qntDeSeguidores = document.querySelector('.follow');
const qntDeview = document.querySelector('.view');
const qntDeAcesso = document.querySelector('.Acessos');
const qntDeAlcance = document.querySelector('.alcance');


const result = document.querySelector('#result');


result.addEventListener('click' function()){

    const qntDeSeguidores = parseInt('follow'.value);
    const qntDeview = parseInt('view'.value);
    const mensagem = document.querySelector('#mensagem');
     
    const result = (qntDeSeguidores / qntDeview) * 100;
    
    if(result >= 10 ){
        const mensagem = document.createElement('p');
        
        result = document.textContent = 'parabens voçe está no caminho certo, continue!'
        mensagem.style.fontSize = '2rem'
        mensagem.style.color = "#DA2D11"
        mensagem.append(mensagem);

    }else if( result <= 0.07 && result >= 0.04){
        result = document.textContent = 'otimo, tente uma maior interaçao com seus seguidores e aumente seus resultado!'
        mensagem.style.fontSize = '2rem'
        mensagem.style.color = "#0162F8"
        mensagem.append(mensagem);
        
    }else{
        result= document.textContent = "acho que estar na hora de mudar a estategia e tentar algo novo!"
        mensagem.style.fontSize = '2rem'
        mensagem.style.color = "#212121"
        mensagem.append(mensagem);

    }



}
