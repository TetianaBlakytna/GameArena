const gameList = document.getElementById("game-list");

function displayGames() {
    gameList.innerHTML = "";

games.forEach(function(game) {
    console.log(game.name);
    const gameItem = document.createElement("div");
    gameItem.classList.add("game-item");
    gameItem.innerHTML = `
        <div class="game-card">
        <h3>${game.name}</h3>
        <p>Rating: ${game.rating}</p>
        <p>Genre: ${game.genre.join(", ")}</p>
        <p>Console: ${game.console.join(", ")}</p>
        <p>Release Year: ${game.releaseYear}</p>
        <p>Status: ${game.status}</p>
        <p>Favorite: ${game.favorite ? "Yes" : "No"}</p>
        <img src="${game.Image}" alt="${game.name}">
        </div>
    `;
    gameList.appendChild(gameItem);
});
}

function updateStats() {
    // Total games
    const totalGames = games.length;

    // Completed games
    const completedGames = games.filter(game => game.status === "Completed").length;

    // Currently playing
    const playingGames = games.filter(game => game.status === "Playing").length;

    // Favorite games
    const favoriteGames = games.filter(game => game.favorite === true).length;

    // Average rating
    let totalRating=0;
    games.forEach(function(game){
        totalRating = totalRating + game.rating;
    });
    let averageRating = 0;
    if (games.length > 0) {
        averageRating = (totalRating / games.length).toFixed(1)};
    // Update HTML
    document.getElementById("games-total").textContent = totalGames;
    document.getElementById("completed-games").textContent = completedGames;
    document.getElementById("currently-played").textContent = playingGames;
    document.getElementById("favorite-games").textContent = favoriteGames;
    document.getElementById("average-rating").textContent = averageRating;
}
displayGames();
updateStats();
