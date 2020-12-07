export interface IMovieDetails {
    total_pages: number;
    // tslint:disable-next-line: variable-name
    total_results: number;
    results: IMovie;
    page: number;
}
export interface IMovie {
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
}
