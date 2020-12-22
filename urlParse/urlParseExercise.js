// con url = window.location.pathname; podria obtener el url actual para extraer los datos

let url = "www.rotundasoftware.com/6/api/listings/3?sort=desc&limit=10"; 

function getVariables(urlString){
    let firstSplit = urlString.split("/"); //obtengo las partes constantes
    let secondSplit = firstSplit[(firstSplit.length - 1)].split("?");//separo el id de las partes variables
    let thirdSplit = secondSplit[(secondSplit.length - 1)].split("&");//separo las partes variables entre si
    let hash = {
        version: firstSplit[1],
        collection: firstSplit[3],
        id: secondSplit[0],
        sort: extractValue(thirdSplit[0]),
        limit: extractValue(thirdSplit[1])
    };
    
    console.log(hash);
}

function extractValue(values){
    let res = values.split("=");
    return res[1];
}

getVariables(url);
