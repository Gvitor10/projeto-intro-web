// VARIAVEIS

const albums = [];

// ALBUMS - objects {};

album01 = {
    link: "https://www.google.com/search?q=Always+Home+EP.+Ian+Ewing&sxsrf=ALiCzsZedLde5lZoGhfblWcbQnYdAjxFvg%3A1665838706578&ei=cq5KY9j0IvvM1sQPrsyUgAQ&ved=0ahUKEwjY9e7ipOL6AhV7ppUCHS4mBUAQ4dUDCA8&uact=5&oq=Always+Home+EP.+Ian+Ewing&gs_lcp=Cgdnd3Mtd2l6EAMyBQghEKABMgUIIRCgAToICAAQogQQsAM6CggAEB4QogQQsANKBAhBGAFKBAhGGABQnQNY4SJg-SVoAXAAeACAAZsBiAGoApIBAzAuMpgBAKABAaABAsgBBcABAQ&sclient=gws-wiz",
    img: "/assets/Always Home.EP.jpg",
    album: "Always Home EP.",
    artista: "Ian Ewing",
    lancamento: 2019,
    gravadora: "Chillhop Music",
    naoRemixado: true,
    musicas: ["  01. Cambria", " 02. Midnight part. Braxton Cook", " 03. Like I Am", " 04. Rucker Park", " 05. Meaux", " 06. 17"],
    bestMusic: "/assets/mp3/like I Am.mp3",
};

album02 = {
    link: "https://www.google.com/search?q=Aura+EP.+chillhop&sxsrf=ALiCzsZPpxjYPJMWAzi0yVj_iYrkQh2xhA%3A1665838764275&ei=rK5KY6OuEJDT1sQPno6CqAw&ved=0ahUKEwijtLD-pOL6AhWQqZUCHR6HAMUQ4dUDCA8&uact=5&oq=Aura+EP.+chillhop&gs_lcp=Cgdnd3Mtd2l6EAMyBQghEKABOgkIABAHEB4QsAM6BwgAEB4QsAM6CQgAEAgQHhCwAzoGCAAQFhAeOgcIIRCgARAKOgQIIRAVSgQIQRgBSgQIRhgAUIgHWPQmYPYoaAFwAHgAgAG8AYgBlQqSAQMwLjmYAQCgAQHIAQjAAQE&sclient=gws-wiz",
    img: "/assets/Aura.EP.jpg",
    album: "Aura EP.",
    artista: "Monma, Misha & cocabona",
    lancamento: 2019,
    gravadora: "Chillhop Music",
    naoRemixado: true,
    musicas: [" 01. Search", " 02. Wonder", " 03. Moon", " 04. In The Sky Feat. Louk", " 05. Through", " 06. Black Garlic", " 07. 6th Station", " 08. Drift", " 09. Birds", " 10. Howl"],
    bestMusic: "/assets/mp3/In the Sky.mp3",
};

album03 = {
    link: "https://www.google.com/search?q=Buena+Vista+EP.+Saib&sxsrf=ALiCzsZbiJV1VGoOu6ZN7fgIN3QeYmr_aQ%3A1665838838696&ei=9q5KY5uOKv3P1sQPjbyD0A8&ved=0ahUKEwib4e6hpeL6AhX9p5UCHQ3eAPoQ4dUDCA8&uact=5&oq=Buena+Vista+EP.+Saib&gs_lcp=Cgdnd3Mtd2l6EAMyBQghEKABMgUIIRCgATIFCCEQoAE6CQgAEAgQHhCwAzoGCAAQFhAeOgQIIRAVOggIIRAWEB4QHUoECEEYAUoECEYYAFCZAljJEWD4EmgBcAB4AIABqAGIAeEFkgEDMC41mAEAoAEByAECwAEB&sclient=gws-wiz",
    img: "/assets/Buena Vista.EP.jpg",
    album: "Buena Vista EP.",
    artista: "Saib",
    lancamento: 2017,
    gravadora: "Hip Dozer",
    naoRemixado: true,
    musicas: [" 01. A Woman", " 02. Café", " 03. Pablo", " 04. Acapulco", " 05. Sakura Trees", " 06. I Wanna Know"],
    bestMusic: "/assets/mp3/",
};

album04 = {
    link: "https://www.google.com/search?q=Destination+EP.+Ruck+P&sxsrf=ALiCzsYTOKL93dD-fAwqhHFYUPivXdB1qg%3A1665838886762&ei=Jq9KY5WMLsXL1sQPrfOfgAo&ved=0ahUKEwiVt-S4peL6AhXFpZUCHa35B6AQ4dUDCA8&uact=5&oq=Destination+EP.+Ruck+P&gs_lcp=Cgdnd3Mtd2l6EAMyBQghEKABMgUIIRCgATIFCCEQoAEyBQghEKABMgUIIRCgATIICCEQFhAeEB0yCAghEBYQHhAdOgYIABAWEB46CAgAEBYQHhAPOgcIIRCgARAKSgQIQRgASgQIRhgAUABY0hVg3xdoAHAAeACAAcEBiAGPCZIBAzAuOJgBAKABAqABAcABAQ&sclient=gws-wiz",
    img: "/assets/Destination.jpg",
    album: "Destination EP.",
    artista: "Ruck P",
    lancamento: 2018,
    gravadora: "Chillhop Music",
    naoRemixado: true,
    musicas: [" 01. 3UO", " 02. As Long As I Got You part. Djmeia", " 03. Destination", " 04. Le Voyage Du Coeur"],
    bestMusic: "/assets/mp3/",
};

album05 = {
    link: "https://www.google.com/search?q=Levitate+EP.+Junior+State&sxsrf=ALiCzsaBf3eTGew1YLaLYXcClR2VbOBYvQ%3A1665838919474&ei=R69KY8fMHIvK1sQPrfu4uAU&ved=0ahUKEwiHjLHIpeL6AhULpZUCHa09DlcQ4dUDCA8&uact=5&oq=Levitate+EP.+Junior+State&gs_lcp=Cgdnd3Mtd2l6EAMyBggAEBYQHjoFCCEQoAE6CAghEBYQHhAdOgQIIRAVSgQIQRgASgQIRhgAUABYuR9g1iRoAXABeACAAb0BiAHfEJIBBDAuMTWYAQCgAQKgAQHAAQE&sclient=gws-wiz",
    img: "/assets/Levitate.EP.jpg",
    album: "Levitate EP.",
    artista: "Junior State",
    lancamento: 2019,
    gravadora: "Chillhop Music",
    naoRemixado: true,
    musicas: [" 01. Nostalgic", " 02. Mighty", " 03. Levitate", " 04. Nice and Easy", " 05. Persuasion", " 06. Townie"],
    bestMusic: "/assets/mp3/Nice And Easy.mp3",
};

album06 = {
    link: "https://www.google.com/search?q=Playtime+EP.+L%27ind%C3%A9cis&sxsrf=ALiCzsZybhjsjdLDv3JHIkd1UHJfd4DP0g%3A1665838945818&ei=Ya9KY_7FMbHW1sQPlsKWOA&ved=0ahUKEwi--vjUpeL6AhUxq5UCHRahBQcQ4dUDCA8&uact=5&oq=Playtime+EP.+L%27ind%C3%A9cis&gs_lcp=Cgdnd3Mtd2l6EAMyBQghEKABMgUIIRCgATIFCCEQoAE6BggAEBYQHjoICAAQFhAeEAo6BwghEKABEAo6BQgAEKIEOgcIABAeEKIESgQIQRgASgQIRhgAUABYkVxg4WVoCXAAeACAAbsBiAHYFpIBBDAuMjCYAQCgAQKgAQHAAQE&sclient=gws-wiz",
    img: "/assets/Playtime.EP.jpg",
    album: "Playtime EP.",
    artista: "L'indécis",
    lancamento: 2018,
    gravadora: "Chillhop Music",
    naoRemixado: true,
    musicas: [" 01. Check It Out", " 02. Soulful", " 03. Blind", " 04. Le Sud", " 05. Crossing Borders", " 06. Rekindling", " 07. Playtime"],
    bestMusic: "/assets/mp3/Soulful.mp3",
};

album07 = {
    link: "https://www.google.com/search?q=Sleep+in%2C+Love+EP.+Strehlow&sxsrf=ALiCzsa8QXQ7jeS0u17zsJBUYARPdu4uww%3A1665839020277&ei=rK9KY-DDENWj1sQPmM2_kAw&ved=0ahUKEwjgybn4peL6AhXVkZUCHZjmD8IQ4dUDCA8&uact=5&oq=Sleep+in%2C+Love+EP.+Strehlow&gs_lcp=Cgdnd3Mtd2l6EAM6CggAEEcQ1gQQsANKBAhBGABKBAhGGABQ_QtY_Qtg0g9oAXABeACAAZMBiAGTAZIBAzAuMZgBAKABAcgBBMABAQ&sclient=gws-wiz",
    img: "/assets/Sleep in, Love.EP.jpg",
    album: "Sleep in, Love EP.",
    artista: "Strehlow",
    lancamento: 2019,
    gravadora: "Chillhop Music",
    naoRemixado: true,
    musicas: [" 01. Hibiscus Emoji", " 02. Dream Girl", " 03. Jupiter Moons", " 04. Private Island", " 05. Sadie"],
    bestMusic: "/assets/mp3/Hibiscus Emoji.mp3",
};

album08 = {
    link: "https://www.google.com/search?q=zoned+Out++Joakim+Karud&sxsrf=ALiCzsZLOA2VHCUQlg6gftlA7P_QdbB0ug%3A1665839068586&ei=3K9KY4C4I-nM1sQPl_-N4Ag&ved=0ahUKEwiAlr6PpuL6AhVpppUCHZd_A4wQ4dUDCA8&uact=5&oq=zoned+Out++Joakim+Karud&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEKIEOgcIIxCwAxAnSgQIQRgBSgQIRhgAUPEFWI4HYIALaAFwAHgAgAGJAYgBgQKSAQMwLjKYAQCgAQHIAQHAAQE&sclient=gws-wiz",
    img: "/assets/Zoned Out.EP.jpg",
    album: "zoned Out EP",
    artista: "Joakim Karud",
    lancamento: 2018,
    gravadora: "Joakim Karud Music Produtions",
    naoRemixado: true,
    musicas: [" 01. Lost Whit You part. Simon Ekberg", " 02. Chill", " 03. Zoned Out", " 04. Off Course", " 05. No Worries part. Dyalla", " 06. Smile part. Kasey Andre", " 07. Good Old Days", " 08. So Long"],
    bestMusic: "/assets/mp3/Lost With You.mp3",
};

// Push() na variavel "Albums";

if (album01.naoRemixado === true){
    albums.push(album01);
} else {
    alert(`**Alerta - Objeto nao adicionado**\n Não é permitido adicionar remixes ao site`);
};

if (album02.naoRemixado === true){
    albums.push(album02);
} else {
    alert(`**Alerta - Objeto nao adicionado**\n Não é permitido adicionar remixes ao site`);
};

if (album03.naoRemixado === true){
    albums.push(album03);
} else {
    alert(`**Alerta - Objeto nao adicionado**\n Não é permitido adicionar remixes ao site`);
};

if (album04.naoRemixado === true){
    albums.push(album04);
} else {
    alert(`**Alerta - Objeto nao adicionado**\n Não é permitido adicionar remixes ao site`);
};

if (album05.naoRemixado === true){
    albums.push(album05);
} else {
    alert(`**Alerta - Objeto nao adicionado**\n Não é permitido adicionar remixes ao site`);
};

if (album06.naoRemixado === true){
    albums.push(album06);
} else {
    alert(`**Alerta - Objeto nao adicionado**\n Não é permitido adicionar remixes ao site`);
};

if (album07.naoRemixado === true){
    albums.push(album07);
} else {
    alert(`**Alerta - Objeto nao adicionado**\n Não é permitido adicionar remixes ao site`);
};

if (album08.naoRemixado === true){
    albums.push(album08);
} else {
    alert(`**Alerta - Objeto nao adicionado**\n Não é permitido adicionar remixes ao site`);
};

// RELATORIO;

for (let i = 0; i < albums.length; i++){
    console.log(`ITEM ${i}:\n LINK: ${albums[i].link}\n IMG: ${albums[i].img}\n ALBUM: ${albums[i].album}\n ARTISTA: ${albums[i].artista}\n LANÇAMENTO: ${albums[i].lancamento}\n GRAVADORA: ${albums[i].gravadora}\n NAO-REMIXADO: ${albums[i].naoRemixado}\n MUSICAS: ${albums[i].musicas}\n MELHOR MUSICA: ${albums[i].bestMusic}`);
};

// FUNCAO QUE RENDERIZA A DISCOGRAFIA

function renderDiscografia(array){
    const newDiv = document.getElementById("discografia");
    newDiv.innerHTML = "";
    for (let i = 0; i < array.length; i++){
        newDiv.innerHTML += 
        `<div id="album">
            <img src="${array[i].img}" width="200px" height="200px" />
            <ul id="Descricao-album">
                <li><b>Album: </b><a href="${array[i].link}" target="_blank">${array[i].album}</a></li>
                <li><b>Artista: </b>${array[i].artista}</li>
                <li><b>Lançamento: </b>${array[i].lancamento}</li>
                <li><b>Gravadora: </b>${array[i].gravadora}</li>
                <li><b>Nao-Remixado: </b>${array[i].naoRemixado}</li>
                <li><b>Musicas: </b>${array[i].musicas}</li>
            </ul>
            <audio id="player" src="${array[i].bestMusic}" controls></audio>
        </div>`
    };
};

renderDiscografia(albums);


// FUNÇAO PESQUISAR MUSICA

function pesquisar(){
    let string = document.getElementById("barraDePesquisa");
    const resultado = albums.filter( (value) => {return value.artista === string.value});

    if (resultado[0] === undefined){
        alert('**ERRO**\n Objeto nao encontrado');
        string.value = "";
    } else {
        if (string.value === resultado[0].artista){
            mostrarResultado(resultado);
            string.value = "";
        };
    };
};


// FUNCAO MOSTRAR RESULTADO

function mostrarResultado(array){
    const newDiv = document.getElementById("discografia");
    for (let i = 0; i < array.length; i++){
        newDiv.innerHTML = 
        `<div id="album">
            <img src="${array[i].img}" width="200px" height="200px" />
            <ul id="Descricao-album">
                <li><b>Album: </b><a href="${array[i].link}" target="_blank">${array[i].album}</a></li>
                <li><b>Artista: </b>${array[i].artista}</li>
                <li><b>Lançamento: </b>${array[i].lancamento}</li>
                <li><b>Gravadora: </b>${array[i].gravadora}</li>
                <li><b>Nao-Remixado: </b>${array[i].naoRemixado}</li>
                <li><b>Musicas: </b>${array[i].musicas}</li>
            </ul>
            <audio id="player" src="${array[i].bestMusic}" controls></audio>
        </div>`
    };
}