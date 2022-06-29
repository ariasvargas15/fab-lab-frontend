import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {Curso} from "../../../model/curso";
import {CursoService} from "../../../service/curso.service";
import {DOCUMENT} from "@angular/common";
import {TokenStorageService} from "../../../service/token-storage.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";

declare const $: any

@Component({
    selector: 'app-cursos',
    templateUrl: './cursos.component.html',
})
export class CursosComponent implements OnInit {

    @ViewChild('formAdd') ngAddForm: NgForm | undefined

    cursos: Curso[] = []

    formGroup = new FormGroup({
        titulo: new FormControl('', [Validators.required]),
        descripcion: new FormControl('', [Validators.required]),
        fecha: new FormControl('', [Validators.required]),
        lugar: new FormControl('', [Validators.required]),
        url: new FormControl('', [Validators.required]),
    })

    constructor(
        @Inject(DOCUMENT) private document: Document,
        private cursoService: CursoService,
        private tokenService: TokenStorageService,
        private _snackbar: MatSnackBar,
    ) {
    }


    ngOnInit(): void {
        $('#curso').appendTo("body")
        this.getCursos()
        this.sortCursos()
    }

    getCursos() {
        this.cursoService.getCursos().subscribe({
            next: value => {
                this.cursos = value
            },
            error: err => {
                this._snackbar.open('Error cargando la lista de cursos', 'Cerrar');
                console.log(err)
            }
        })
    }

    sortCursos() {
        this.cursos.sort((a, b) =>
            this.getDateInMillis(b.fecha) - this.getDateInMillis(a.fecha));
    }

    getDateInMillis(fecha: string): number {
        const [day, month, year] = fecha.split('/');
        return new Date(+year, +month - 1, +day).getTime();
    }

    goToUrl(link: string) {
        let newLink = link
        if (!link.startsWith('https://')) {
            newLink = 'https://' + link
        }
        window.open(newLink)
    }

    isAuthenticated(): boolean {
        return this.tokenService.existToken()
    }

    onAgregarClicked() {
        this.ngAddForm?.reset()
        this.ngAddForm?.resetForm()
    }

    onSubmit() {
        if (this.formGroup.valid) {
            this.cursoService.saveCurso(this.formGroup.value).subscribe({
                next: value => {
                    $('#curso').modal('hide')
                    this.cursos.push(this.formGroup.value as Curso)
                    this.sortCursos()
                    this._snackbar.open(value.mensaje, "Ok")
                },
                error: err => {
                    this._snackbar.open(err.mensaje, "Ok")
                }
            })
        }
    }

    deleteCurso(id: number) {
        this.cursoService.deleteCurso(id).subscribe({
            next: _ => {
                this.cursos.forEach((item, index) => {
                    if (item.id === id) this.cursos.splice(index, 1);
                })
                this.sortCursos()
                this._snackbar.open('Curso eliminado correctamente', "Ok")
            },
            error: err => {
                this._snackbar.open(err.mensaje, "Ok")
            }
        })
    }
}
