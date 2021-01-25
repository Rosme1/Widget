'use strict'
window.addEventListener('load', function(){

var table = document.querySelector("#movies");
var date = new Date();

var hours = date.getHours();
var minutes = date.getMinutes();

var time = hours + ":" + minutes;


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
        let div = document.createElement("div");
        let divText = document.createElement("div");
        let img = document.createElement("img");
        let title = document.createElement("p");
        let date = document.createElement("p");
        let author = document.createElement("p");
        let hr = document.createElement("hr");
        
        
        div.className = "item-content";
        divText.className = "text-content";
        img.className = "img";
        title.className = "black";
        date.className = "gray date";
        author.className = "gray author";

        date.innerHTML = "Today at  " + time;
        title.innerHTML = item.title;
        author.innerHTML = item.author;
        
        img.src = item.img_url;
       

        
        divText.appendChild(date);
        divText.appendChild(title);
        divText.appendChild(author);
        div.appendChild(img);
        div.appendChild(divText);
        table.appendChild(div);
    });
}
});