/**
 * Created by devon on 2017-03-29.
 */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GameService {
    // when an instance of this class is created
    constructor(private http: Http) {

    }

    // get Games
    getGames() {
        return this.http.get('/api').map(response => response.json());
    }
}