let api_key = "https://api.nasa.gov/planetary/apod?api_key=lbWgGWLR8ZAYU8L6X8T2umRiUzQiixa85be8NFnS";
let data;
const player = document.getElementById("player");

fetch(api_key)
    .then(function(response){
        return response.json();
    }).then(function(myjson){
        data = myjson;
        const head = document.getElementById("head");
        let url = data.url;
        if(data.media_type == "video"){
            let embed = document.createElement("iframe");
            embed.setAttribute("src", url);
            embed.setAttribute("id", "video");
            embed.setAttribute("width", "100%");
            embed.setAttribute("height", "720px");
            head.insertBefore(embed, player);
        }else if(data.media_type == "image"){
            let image = document.createElement("img");
            image.setAttribute("id", "image");
            image.setAttribute("src", url);
            head.insertBefore(image, player);
        }    
});