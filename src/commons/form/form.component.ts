import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormControlDirective } from '@angular/forms'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  contactForm: FormGroup
  estados = []
  requestTypes = ['Claim', 'Feedback', 'Help Request']
  municipios = []

  constructor() {
    this.contactForm = this.createContactFormGroup()
   }

   createContactFormGroup(){
     return new FormGroup({
            personalData: new FormGroup({
                id: new FormControl(),
                nombre: new FormControl(),
                correo: new FormControl(),
                idMunicipio: new FormControl(),
                idEstado: new FormControl(),
                cp: new FormControl()
            }),
              requestType: new FormControl(),
              mensaje: new FormControl(),
     })

   }

  ngOnInit(): void {
  }

}
