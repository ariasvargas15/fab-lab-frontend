import {Component, OnInit} from '@angular/core'
import {Router} from '@angular/router'
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms'
import {ErrorStateMatcher} from '@angular/material/core'
import {TokenStorageService} from "../../service/token-storage.service";
import {AuthService} from "../../service/auth.service";
import {MatSnackBar} from "@angular/material/snack-bar";

export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted))
    }
}

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    isLoggedIn = false
    isLoginFailed = false
    errorMessage = ''
    document = ''
    matcher = new MyErrorStateMatcher()
    hide = true

    formGroup = new FormGroup({
        username: new FormControl('', [
            Validators.required
        ]),
        password: new FormControl('', [
            Validators.required
        ])
    })

    constructor(
        private authService: AuthService,
        private tokenStorage: TokenStorageService,
        private router: Router,
        private _snackbar: MatSnackBar) {
    }

    ngOnInit(): void {
        if (this.tokenStorage.getToken()) {
            this.isLoggedIn = true
            this.document = this.tokenStorage.getUser().document
            this.router.navigate(['/home']).then()
        }
    }

    onSubmit(): void {
        if (this.formGroup.valid) {
            console.log(this.formGroup.value)
            this.authService.login(this.formGroup.value).subscribe({
                    next: value => {
                        this.tokenStorage.saveToken(value.jwt)
                        this.isLoginFailed = false
                        this.isLoggedIn = true
                        this.goToHome()
                    },
                    error: err => {
                        this.errorMessage = err.error
                        this._snackbar.open('Usuario o contraseña inválida', 'Cerrar');
                    }
                }
            )
        }
    }

    goToHome(): void {
        this.router.navigate(['/home']).then()
    }

}
