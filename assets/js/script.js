// Start of Local Storage
let favorites = document.getElementByName("favorites");
console.log(favorites)

localStorage.setItem("temp", favorites)

localStorage.getItem("temp").value = favorites;

// document.getElementByName("favorite-tab") = favorites ***TAB DOES NOT EXIST YET***
// End of Local Storage

//Start of Giphy API
document.addEventListener("DOMContentLoaded", init);

function init() {
    document.getElementByName("btnSearch").addEventListener("click", ev => {
        ev.preventDefault()
        let url = `https://api.giphy.com/v1/gifs/search?api_key=DFZTgLlTP0VKQOv1TXrzx1CpfpvNY8Kk&limit=1&q=`;
        let str = document.getElementByName("search").value.trim();
        url = url.concat(str);
        console.log(url);
        fetch(url)
            .then(response => response.json())
            .then(content => {
                console.log(content.data);
                console.log("META", content.meta);
                let fig = document.createElement("figure");
                let img = document.createElement("img");
                let fc = document.createElement("figcaption");
                img.src = content.data[0].images.downsized.url;
                img.alt = content.data[0].title;
                fc.textContent = content.data[0].title
                fig.appendChild(img);
                fig.appendChild(fc);
                let giph = document.querySelector(".giph");
                giph.insertAdjacentElement("afterbegin", fig);
                document.querySelector("#search").value = "";
            })
            .catch(err => {
                console.error(err);
            });
        });
    }
//End of Giphy API
