var api = 'https://api.api-ninjas.com/v1/jokes?limit=1'
var getJokebtn = document.querySelector("#get_joke")
var jokeContainerEl = document.querySelector(".main-container")
var jokeGenerate = document.querySelector("#joke-display")
var favoriteJoke = document.querySelector(".favorite-joke")
var favoriteIcon = document.querySelector(".favicon")
var favoriteList = document.querySelector(".viewfavorate")
// console.log(jokeContainerEl)
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

                console.log(data);
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
    jokeGenerate.textContent = "";
    // console.log(jokeData[0])
    var jokeContainer = document.createElement('div');
    jokeContainer.classList = "joke-container";
    var getaJoke = document.createElement("p");
    getaJoke.textContent = jokeData[0].joke;
    // console.log(jokeData[0].joke);

    window.localStorage.setItem("joke", JSON.stringify(jokeData[0].joke));

    jokeGenerate.appendChild(jokeContainer)
    jokeContainer.appendChild(getaJoke)

    // console.log(saveToLocalStorage)
    // console.log(getaJoke)
}


// console.log(getaJoke.textContent)
var favoriteJokeEl = function (currentFJoke) {

    var currentFJoke = JSON.parse(localStorage.getItem("joke"))
    // Array datatype
    var favoriteJokeList = JSON.parse(localStorage.getItem("favorite"))
    if (favoriteJokeList) {
        favoriteJokeList.push(currentFJoke);
    } else {
        favoriteJokeList = [currentFJoke];
    }

    window.localStorage.setItem("favorite", JSON.stringify(favoriteJokeList));

    // console.log(favoriteJokeList);


    let htmlQuery = ``

    for (let i = 0; i < favoriteJokeList.length; i++) {
        htmlQuery += `<p>${favoriteJokeList[i]}</p>`
    }
    // console.log(htmlQuery);
    favoriteJoke.innerHTML = htmlQuery;


    // console.log(currentFJoke)
    // jokeContainerEl.style.display = "none";
    // var favoriteJokeContainer=document.createElement('div');
    // var goBackBtn=document.createElement('button');
    // favoriteJokeContainer.classList = "favorite-joke-container";
    // var jokeList = document.createElement("p");
    // jokeList.textContent="Your favorite Joke is: "+currentFJoke
    // goBackBtn.textContent="Go Back"
    // console.log(currentFJoke)
    // favoriteJoke.appendChild(favoriteJokeContainer)
    // favoriteJokeContainer.appendChild(jokeList)
    // favoriteJokeContainer.appendChild(goBackBtn)

    // var backMain=function(){
    //     jokeContainerEl.style.display = "block"
    //     favoriteJokeContainer.style.display="none"
    // }

    // goBackBtn.addEventListener("click",backMain)

}

getJokebtn.addEventListener("click", gameStart)
favoriteIcon.addEventListener("click", favoriteJokeEl)

