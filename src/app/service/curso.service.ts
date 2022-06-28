import {Injectable} from '@angular/core'
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs'
import {Curso} from "../model/curso";

const AUTH_API = 'http://localhost:8080/curso/'

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
    providedIn: 'root'
})
export class CursoService {

    constructor(private http: HttpClient) {
    }

    getCursos(): Observable<Curso[]> {
        return this.http.get<Curso[]>(AUTH_API, httpOptions)
    }
}
