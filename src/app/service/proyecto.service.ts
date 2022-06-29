import {Injectable} from '@angular/core'
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs'
import {Curso} from "../model/curso";
import {Proyecto} from "../model/proyecto";

const AUTH_API = 'http://localhost:8080/proyecto'

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
export class ProyectoService {

    constructor(private http: HttpClient) {
    }

    getProyectos(): Observable<Proyecto[]> {
        return this.http.get<Proyecto[]>(AUTH_API, httpOptions)
    }

    saveProyecto(proyecto: Proyecto): Observable<any> {
        if (proyecto.estado == null) {
            proyecto.estado = false
        }
        return this.http.post(AUTH_API, {
            titulo: proyecto.titulo,
            descripcion: proyecto.descripcion,
            estado: proyecto.estado
        }, httpOptions)
    }

    deleteProyecto(id: number): Observable<any> {
        return this.http.delete(AUTH_API + '/' + id, httpOptions)
    }

}
