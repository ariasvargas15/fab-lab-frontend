import {Injectable} from '@angular/core'
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs'
import {Curso} from "../model/curso";

const AUTH_API = 'http://localhost:8080/curso'

const httpOptions = {
    headers: new HttpHeaders(
        {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
        })
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

    saveCurso(curso: Curso): Observable<any> {
        return this.http.post(AUTH_API,{
            titulo: curso.titulo,
            descripcion: curso.descripcion,
            fecha: curso.fecha,
            lugar: curso.lugar,
            url: curso.url
        }, httpOptions)
    }
}
