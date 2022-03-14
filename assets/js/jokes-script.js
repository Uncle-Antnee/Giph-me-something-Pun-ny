var api = 'https://api.api-ninjas.com/v1/jokes?limit=1'
var getJokeBtn = document.querySelector("#getJokeBtn")
var jokeContainerEl = document.querySelector(".main-container")
var jokeGenerate = document.querySelector("#joke-display")
var favoriteJoke = document.querySelector(".favorite-joke")
var favoriteIcon = document.querySelector("#favicon")
var options = document.querySelector("#activitySelector")
var favoriteList = document.getElementById("favorites")

console.log(favoriteList)
console.log(favoriteIcon)
//console.log(jokeContainerEl)
// const request = require('request');

function gameStart() {

    // var h=new Headers();
    var req = new Request(api, {
        method: 'GET',

        headers: { 'X-Api-Key': 'x/llZ+nbFehhqBQgnpQ+mQ==BP0pUE73NtSGOMpx' },
        contentType: 'application/json',
    });

    fetch(req).then((response) => {
        if (response.ok) {
            // return response.json();
            response.json().then(function (data) {
                // console.log(data);
                jokeDisplay(data)
                // console.log(temp);
            })
        } else {
            throw new Error('bad http stuff');
        }
    })

        .catch((err) => {
            console.log('ERROR', error.message)
        });

}

var jokeDisplay = function (jokeData) {
    // jokeGenerate.textContent = "";
    //console.log(jokeData[0])
    var jokeContainer = document.createElement('div');
    jokeContainer.classList = "joke-container";
    var getaJoke = document.createElement("p");
    getaJoke.classList = "joke-containt";
    //getaJoke.textContent=jokeData[0].joke;
    // console.log(jokeData[0].joke);
    jokeGenerate.textContent = jokeData[0].joke;

    window.localStorage.setItem("joke", JSON.stringify(jokeData[0].joke));

    jokeGenerate.appendChild(jokeContainer);
    jokeContainer.appendChild(getaJoke);

}


// console.log(getaJoke.textContent)
var favoriteJokeEl = function (currentFJoke) {

    var currentFJoke = JSON.parse(localStorage.getItem("joke"))
    var favoriteJokeList = JSON.parse(localStorage.getItem("favorite"))
    if (favoriteJokeList) {
        favoriteJokeList.push(currentFJoke);
    } else {
        favoriteJokeList = [currentFJoke];
    }

    localStorage.setItem("favorite", JSON.stringify(favoriteJokeList));

    console.log(favoriteJokeList);

}


var favoriteAll = function () {

    console.log("hello")
    jokeGenerate.textContent = "";
    //var favoriteJokeListAll=[];
    var favoriteJokeListAll = JSON.parse(localStorage.getItem("favorite"))
    console.log(favoriteJokeListAll)
    for (let i = 0; i < favoriteJokeListAll.length; i++) {
        // allList+='<p>${favoriteJokeList[i]}</p>'

        var jokeListStorage = document.createElement('ol');
        jokeListStorage.classList = "save-favorite-list";
        var listAll = document.createElement("li");

        var jokeFavoriteEL = []
        jokeFavoriteEL = favoriteJokeListAll[i];
        listAll.textContent = 'NO.' + [i + 1] + ' ' + jokeFavoriteEL;
        jokeGenerate.appendChild(jokeListStorage);
        jokeListStorage.appendChild(listAll);
        //jokeGenerate.innerHTML=allList;

    }
    console.log(favoriteJokeListAll)
}
getJokeBtn.addEventListener("click", gameStart)
favoriteIcon.addEventListener("click", favoriteJokeEl)
favoriteList.addEventListener("click", favoriteAll)
