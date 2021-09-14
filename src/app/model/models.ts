export type RouterNames = 'top-rated' | 'upcoming' | 'trendingchart' | 'now-playing' | 'popular' | 'latest';
export class LocalParams implements ILocalParams {
    page: number;
    language: string;

    constructor(params: ILocalParams) {
        this.page = params.page;
        this.language = params.language;
    }
}

export interface ILocalParams {
    page: number;
    language: string;
}

export interface ILanguage {
    english_name: string;
    iso_639_1: string;
    name: string;
}

export class Language implements ILanguage {
    // tslint:disable-next-line: variable-name
    private _english_name: string;
    // tslint:disable-next-line: variable-name
    private _iso_639_1: string;
    // tslint:disable-next-line: variable-name
    private _name: string;

    public get english_name(): string {
        return this._english_name;
    }

    public set english_name(englishname: string) {
        this._english_name = englishname;
    }

    public get iso_639_1(): string {
        return this._iso_639_1;
    }

    // tslint:disable-next-line: variable-name
    public set iso_639_1(iso_639_1: string) {
        this._iso_639_1 = iso_639_1;
    }

    public get name(): string {
        return this._name;
    }

    public set name(name: string) {
        this._name = name;
    }

}


