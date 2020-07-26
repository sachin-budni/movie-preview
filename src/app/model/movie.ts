export interface Movie {
    backdrop_path: string;
    belongs_to_collection: string;
    budget: number;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    poster_path: string;
    production_companies: Company[];
    spoken_languages: Language[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
}

class Company {
    id: number;
    // tslint:disable-next-line: variable-name
    logo_path: string;
    name: string;
    // tslint:disable-next-line: variable-name
    origin_country: string;
}

class Language {
    // tslint:disable-next-line: variable-name
    iso_639_1: string;
    name: string;
}