import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { backendDir } from '../constants';

@Injectable()
export class BookServiceBackend {

    constructor(private httpClient: HttpClient) {

    }

    public getBooks() {
        const res = this.httpClient.get(backendDir);
        console.log(res);
    }
}
