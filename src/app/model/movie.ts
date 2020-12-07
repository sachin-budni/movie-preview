import { IMovie, IMovieDetails, ILanguage } from './movie.d';

export class MovieDetails implements IMovieDetails{
    // tslint:disable-next-line: variable-name
    total_pages: number;
    // tslint:disable-next-line: variable-name
    total_results: number;
    results: Movie;
    page: number;
    constructor(movieDetails: IMovieDetails) {
        this.total_pages = movieDetails.total_pages;
        this.results = new Movie(movieDetails.results);
        this.page = movieDetails.page;
        this.total_results = movieDetails.total_results;
    }
}

export class Movie implements IMovie{
    adult: boolean;
    // tslint:disable-next-line: variable-name
    backdrop_path: string;
    // tslint:disable-next-line: variable-name
    genre_ids: number[];
    id: number;
    // tslint:disable-next-line: variable-name
    original_language: string;
    // tslint:disable-next-line: variable-name
    original_title: string;
    overview: string;
    popularity: number;
    // tslint:disable-next-line: variable-name
    poster_path: string;
    // tslint:disable-next-line: variable-name
    release_date: string;
    title: string;
    video: boolean;
    // tslint:disable-next-line: variable-name
    vote_average: number;
    // tslint:disable-next-line: variable-name
    vote_count: number;
    constructor(movie: IMovie) {
        this.id = movie.id;
        this.genre_ids = movie.genre_ids;
        this.original_language = movie.original_language;
        this.original_title = movie.original_title;
        this.overview = movie.overview;
        this.popularity = movie.popularity;
        this.poster_path = movie.poster_path;
        this.release_date = movie.release_date;
        this.title = movie.title;
        this.video = movie.video;
        this.vote_average = movie.vote_average;
        this.vote_count = movie.vote_count;
    }
}
