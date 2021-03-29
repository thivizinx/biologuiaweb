
let botao = document.querySelector("#botao");
botao.addEventListener("click", function () {
    let palavrapesquisada = document.getElementById("txtBusca").value;
   
    switch (palavrapesquisada) {
        case "Citologia":
        case "Células":
        case "Biologia célular":
            window.location.href = "file:///C:/Users/Mateus/OneDrive/%C3%81rea%20de%20Trabalho/trabalho%20web/Citologia.html";
            break;
        case "botânica":
        case "Botânica":
        case "Plantas":
            window.location.href = "file:///C:/Users/Mateus/OneDrive/%C3%81rea%20de%20Trabalho/trabalho%20web/botanica.html";
            break;
        case "Ecologia":
        case "ecologia":
        case "Biosfera":
            window.location.href = "file:///C:/Users/Mateus/OneDrive/%C3%81rea%20de%20Trabalho/trabalho%20web/ecologia.html";
            break;
        case "Evolução":
        case "evolução":
        case "Teoria evolutiva":
            window.location.href = "file:///C:/Users/Mateus/OneDrive/%C3%81rea%20de%20Trabalho/trabalho%20web/evolucao.html";
            break;
        case "Fisiologia":
        case "fisiologia":
        case "FISIOLOGIA":
            window.location.href = "file:///C:/Users/Mateus/OneDrive/%C3%81rea%20de%20Trabalho/trabalho%20web/fisiologia.html";
            break;
        case "Histologia":
        case "histologia":
        case "HISTOLOGIA":
            window.location.href = "file:///C:/Users/Mateus/OneDrive/%C3%81rea%20de%20Trabalho/trabalho%20web/histologia.html";
            break;
        case "Microbiologia":
        case "microbiologia" :
        case "MICROBIOLOGIA" :
            window.location.href = "file:///C:/Users/Mateus/OneDrive/%C3%81rea%20de%20Trabalho/trabalho%20web/microbiologia.html";      
            break;
        case "zoologia":
        case "Zoologia":
        case "ZOOLOGIA":
            window.location.href = "file:///C:/Users/Mateus/OneDrive/%C3%81rea%20de%20Trabalho/trabalho%20web/zoologia.html";
            break;
        default:
            window.alert("Ops! Tente escrever de novo, nossa busca ainda é case sensitive :O, envie um email para os desenvolvedores e em breve adcionaremos seu conteúdo.");

   }


}
);
