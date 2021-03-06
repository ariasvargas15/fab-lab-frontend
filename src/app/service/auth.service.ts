import {Injectable} from '@angular/core'
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs'
import {User} from "../model/user";
import {Token} from "../model/token";

const AUTH_API = 'http://localhost:8080/usuario/'

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient) {
    }

    login(user: User): Observable<Token> {
        return this.http.post<Token>(AUTH_API + 'login', {
            username: user.username,
            password: user.password
        }, httpOptions)
    }

    register(user: { username: any; email: any; password: any }): Observable<any> {
        return this.http.post(AUTH_API + 'signup', {
            username: user.username,
            email: user.email,
            password: user.password
        }, httpOptions)
    }
}
