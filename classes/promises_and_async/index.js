async function dogAPI(link){
    (await fetch(link).
    then(response => response.json()).
    then(response => {
        const divImg = document.querySelector('.ImgCenter');
        const img = document.createElement('img');
        
        img.src = response.message;
        img.alt = "Imagem carregada dinamicamente";
        divImg.appendChild(img);
    }
    ).catch(err => {
        console.log("Erro ao buscar os dados da API: " + err)
    }));
}
const url = "https://dog.ceo/api/breeds/image/random";
dogAPI(url)