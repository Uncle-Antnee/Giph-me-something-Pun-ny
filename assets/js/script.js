let favorites = document.getElementById("favorite");
console.log(favorites)

localStorage.setItem("temp", favorites)

localStorage.getItem("temp").value = favorites;

document.getElementById("favorite-tab") = favorites;