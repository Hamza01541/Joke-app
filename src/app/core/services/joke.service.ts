import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class JokeService {
    jokeBaseUrl = 'http://api.icndb.com/jokes/';

    constructor(private http: HttpClient) { }

    /**
     * Gets joke list.
     * @returns {Observable<any>}
     */
    getJokes(pageIndex: number, pageSize: number, searchStr: string): Observable<any> {
        const url = `${this.jokeBaseUrl}random/1000`;
        return this.http.get(url).pipe(map((res: any) => {

            // Client-side pagination on overall record.
            const filteredJokes = this.getFilteredJokes(pageIndex, pageSize, searchStr, res.value);

            return filteredJokes;
        }));
    }

    /**
     * Gets joke detail.
     * @param {number} jokeId Joke id
     * @returns {Observable<any>}
     */
    getJokeDetail(jokeId: number): Observable<any> {
        const url = `${this.jokeBaseUrl}${jokeId}`;
        return this.http.get(url);
    }

    /**
     * Apply filteration on data and returns filtered data.
     * @param pageIndex
     * @param pageSize
     * @param searchStr
     * @param jokes
     * @returns {any}
     */
    getFilteredJokes(pageIndex: number, pageSize: number, searchStr: string, jokes: any[]): any {
        let count = jokes.length;

        if (searchStr && searchStr.length) {
            jokes = jokes.filter(item => item.joke.toLowerCase().includes(searchStr.toLowerCase()));
            count = jokes.length;
        }

        const filteredJokes = jokes.splice(pageIndex * pageSize, pageSize);

        return { jokes: filteredJokes, totalCount: count };
    }
}
