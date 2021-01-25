'use strict'
window.addEventListener('load', function(){

var table = document.querySelector("#movies");




getItems()
    .then(data => data.json())
    .then(items => {
        itemsList(items.results);
    });


function getItems(){
    return fetch("https://manager5.streamradio.fr:1280/api/v2/history/?format=json&limit=15");

}

function itemsList(items){

    items.map((item) => {
        let dateTime = new Date(item.ts);
        let hours = dateTime.getHours();
        let minutes = dateTime.getMinutes();
        let time = hours + ":" + minutes;

        let div = document.createElement("div");
        let divText = document.createElement("div");
        let img = document.createElement("img");
        let title = document.createElement("p");
        let date = document.createElement("div");
        let ico = document.createElement("img");
        let author = document.createElement("p");
        let dateText = document.createElement("label");
        
        dateText.className = "text-date";
        div.className = "item-content";
        divText.className = "text-content";
        img.className = "img";
        ico.className = "ico";
        title.className = "black";
        date.className = "gray date";
        author.className = "gray author";

        dateText.innerHTML = "      Aujourd'hui à " + time;
        title.innerHTML = item.title;
        author.innerHTML = item.author;
        
        
        img.src = item.img_url;
        ico.src = "./img/timeIco.png";
       

        date.appendChild(ico);
        date.appendChild(dateText);
        divText.appendChild(date);
        divText.appendChild(title);
        divText.appendChild(author);
        div.appendChild(img);
        div.appendChild(divText);
        table.appendChild(div);
    });
}
});