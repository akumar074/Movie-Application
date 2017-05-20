// Movie Object Class
export class Movie {
    title: string;
    year: string;
    poster: string;
    // Movie class properties initialization with constructor
    constructor(  title: string, year: string, poster: string ) {
        this.title = title;
        this.year = year;
        this.poster = poster;
    }
    clone() {
        return new Movie( this.title, this.year, this.poster);
    }
}
