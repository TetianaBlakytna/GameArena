// Add game button

const addGameButton = document.getElementById("add-game-button");
const addGameForm = document.getElementById("add-game-form");

addGameButton.addEventListener("click", function() {
    addGameForm.classList.remove("hidden");
});
const cancelAddGameButton = document.getElementById("cancel-add-game");

cancelAddGameButton.addEventListener("click", function() {
    addGameForm.classList.add("hidden");
});

addGameForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const gameName = document.getElementById("game-name").value;
    console.log("Name:", gameName);
    const gameGenre = document.getElementById("game-genre").value;
    console.log("Genre:", gameGenre);
 const gameYear = Number(document.getElementById("game-year").value);

console.log("Year:", gameYear);
const gameRating = Number(document.getElementById("game-rating").value);
console.log("Rating:", gameRating);
const gameStatus = document.getElementById("game-status").value;
console.log("Status:", gameStatus);
const gameFavorite = document.getElementById("game-favorite").checked;
console.log("Favorite:", gameFavorite);

const newGame = {
    id: games.length + 1,
    name: gameName,
    rating: gameRating,
    genre: [gameGenre],
    console: [], 
    releaseYear: gameYear,
    status: gameStatus,
    favorite: gameFavorite,
    Image: "" // add image
}
games.push(newGame);
console.log(games);
addGameForm.reset();
addGameForm.classList.add("hidden");
});