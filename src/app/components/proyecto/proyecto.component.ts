import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {DOCUMENT} from "@angular/common";
import {TokenStorageService} from "../../service/token-storage.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Proyecto} from "../../model/proyecto";
import {ProyectoService} from "../../service/proyecto.service";


declare const $: any

@Component({
    selector: 'app-proyecto',
    templateUrl: './proyecto.component.html',
})
export class ProyectoComponent implements OnInit {

    @ViewChild('formAdd') ngAddForm: NgForm | undefined

    proyectos: Proyecto[] = []

    formGroup = new FormGroup({
        titulo: new FormControl('', [Validators.required]),
        descripcion: new FormControl('', [Validators.required]),
        estado: new FormControl(false,)
    })

    constructor(
        @Inject(DOCUMENT) private document: Document,
        private proyectoService: ProyectoService,
        private tokenService: TokenStorageService,
        private _snackbar: MatSnackBar,
    ) {
    }


    ngOnInit(): void {
        $('#proyecto').appendTo("body")
        this.getproyectos()
    }

    getproyectos() {
        this.proyectoService.getProyectos().subscribe({
            next: value => {
                this.proyectos = value
            },
            error: err => {
                this._snackbar.open('Error cargando la lista de proyectos', 'Cerrar');
                console.log(err)
            }
        })
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
            this.proyectoService.saveProyecto(this.formGroup.value).subscribe({
                next: value => {
                    $('#proyecto').modal('hide')
                    this.proyectos.push(this.formGroup.value as Proyecto)
                    this._snackbar.open(value.mensaje, "Ok")
                },
                error: err => {
                    this._snackbar.open(err.mensaje, "Ok")
                }
            })
        }
    }

    deleteproyecto(id: number) {
        this.proyectoService.deleteProyecto(id).subscribe({
            next: _ => {
                this.proyectos.forEach((item, index) => {
                    if (item.id === id) this.proyectos.splice(index, 1);
                })
                this._snackbar.open('Proyecto eliminado correctamente', "Ok")
            },
            error: err => {
                this._snackbar.open(err.mensaje, "Ok")
            }
        })
    }
}
