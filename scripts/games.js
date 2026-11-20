let games = [
    {
        id: 1,
        name: "Guessing game",
        rating: 10,
        genre: ["Puzzle", "Strategy"],
        console: ["PC", "PS5"],
        releaseYear: 2026,
        status: "Completed",
        favorite: true,
        Image:"images/pokemon.png"
    },
    {
        id: 2,
        name: "Pokemon game",
        rating: 4,
        genre: ["Action", "RPG"],
        console: ["3DS", "Switch"],
                releaseYear: 2026,
        status: "Completed",
        favorite: true,
        Image:"images/pokemon.png"
    }
];

// add new games 

const saveGame = localStorage.getItem("games");

if (saveGame != null){
    games = JSON.parse(saveGame);
}