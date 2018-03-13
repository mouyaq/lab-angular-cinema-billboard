export class Movie {
    id: number;                 //(Number) - A unique number used to distinguish between movies.
    title: string;              //(String) - Contains the movie title.
    poster: string;             //(String) - A URL of a poster image for the movie.
    synopsis: string;           //(String) - A brief description about the movie.
    genres: Array<string>;      //(Array of Strings) - The genres of a movie, such as "Adventure", "Action", "Romantic Comedy" etc.
    year: number;               //(Number) - Movie's release year.
    director: string;           //(String) - Director of the movie.
    actors: Array<string>;      // (Array of Strings) - The actors' names, using one string per each actor.
    hours: Array<string>;       // (Array of Strings) - The times the movie is showing. i.e. Wednesday 19:30, 22:30 would be an element of this array to indicate that you can watch a movie on wednesday at 19:30h and 22:30h.
    room: number;               //(Number) - Room number of the movie. Will be a value between 1 and 5.
}
