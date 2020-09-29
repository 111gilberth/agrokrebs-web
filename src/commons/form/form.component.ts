import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactServiceService } from '../../app/services/contact.service.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  contactForm: FormGroup
  submitted = false;
  municipios = ['Acajete','Acatlán','Acayucan','Actopan','Acula','Acultzingo','Camarón de Tejeda','Alpatláhuac','Alto Lucero de Gutiérrez Barrios','Altotonga','Alvarado','Amatitlán',
  'Naranjos Amatlán','Amatlán de los Reyes','Angel R. Cabada','La Antigua','Apazapan','Aquila','Astacinga','Atlahuilco','Atoyac','Atzacan','Atzalan','Tlaltetela','Ayahualulco',
  'Banderilla','Benito Juárez','Boca del Río','Calcahualco','Camerino Z. Mendoza','Carrillo Puerto','Catemaco','Cazones de Herrera','Cerro Azul','Citlaltépetl','Coacoatzintla','Coahuitlán',
  'Coatepec','Coatzacoalcos','Coatzintla','Coetzala','Colipa','Comapa','Córdoba','Cosamaloapan de Carpio','Cosautlán de Carvajal','Coscomatepec','Cosoleacaque','Cotaxtla','Coxquihui','Coyutla',
  'Cuichapa','Cuitláhuac','Chacaltianguis','Chalma','Chiconamel','Chiconquiaco','Chicontepec','Chinameca','Chinameca','Chinampa de Gorostiza','Las Choapas','Chocamán','Chontla',
  'Chumatlán','Emiliano Zapata','Espinal','Filomeno Mata','Fortín','Gutiérrez Zamora','Hidalgotitlán','Huatusco','Huayacocotla','Hueyapan de Ocampo','Huiloapan de Cuauhtémoc','Ignacio de la Llave',
  'Ilamatlán','Isla','Ixcatepec','Ixhuacán de los Reyes','Ixhuatlán del Café','Ixhuatlancillo','Ixhuatlán del Sureste','Ixhuatlán de Madero','Ixmatlahuacan','Ixtaczoquitlán','Jalacingo',
  'Xalapa','Jalcomulco','Jáltipan','Jamapa','Jesús Carranza','Xico','Jilotepec','Juan Rodríguez Clara','Juchique de Ferrer','Landero y Coss','Lerdo de Tejada','Magdalena','Maltrata']
  requestTypes = ['Información', 'Seguimiento', 'Ayuda']
  estados = ['Aguascalientes','Baja California','Baja California Sur','Campeche','Coahuila de Zaragoza','Colima','Chiapas','Chihuahua','Distrito Federal','Durango','Guanajuato','Hidalgo',
  'Jalisco','México','Michoacán de Ocampo','Morelos','Nayarit','Nuevo León','Manlio Fabio Altamirano','Oaxaca','Puebla','Querétaro','Quintana Roo','San Luis Potosí','Sinaloa','Sonora',
  'Tabasco','Tamaulipas','Tlaxcala','Veracruz de Ignacio de la Llave','Yucatán','Zacatecas']

  constructor( private formBuilder: FormBuilder,
               private contactServiceService: ContactServiceService,
               private router: Router ) {}

   public ngOnInit(): void {
        this.contactForm = this.formBuilder.group({
            //id: ['', Validators.required],
            nombre: ['Gilberto', [Validators.required, Validators.minLength(4)]],
            correo: ['test@test.mx', [Validators.required, Validators.email]],
            municipio: ['2', Validators.required],
            estado: ['2', Validators.required],
            cp: ['94540', Validators.required],
            requestType: ['', Validators.required],
            mensaje: ['Escribe aquí tu mensaje', [Validators.required,Validators.minLength(10)]],
            acceptTerm: [false, Validators.requiredTrue]
        });
    }
    // convenience getter for easy access to form fields
    get f() { return this.contactForm.controls; }

   // Submit Registration Form
   /*onSubmit() {
        //console.log("entra");
          this.submitted = true;
          if(this.contactForm.invalid){
            console.log("invalido registro");
            console.log(this.contactForm['nombre'].value);
            console.log(this.contactForm['correo'].value);
            console.log(this.contactForm['municipio'].value);
            console.log(this.contactForm['estado'].value);
            console.log(this.contactForm['cp'].value);
            console.log(this.contactForm['requestType'].value);
            console.log(this.contactForm['mensaje'].value);
            console.log(this.contactForm['acceptTerms'].value);
            return;
          }
          this.contactServiceService.createContact(this.contactForm.value)
          .subscribe((response)  => {
            console.log(response);
           // console.log(JSON.stringify(this.contactForm.value));
          });
            console.log(this.contactForm.controls['nombre'].value);
            console.log(this.contactForm.controls['correo'].value);
            console.log(this.contactForm.controls['municipio'].value);
            console.log(this.contactForm.controls['estado'].value);
            console.log(this.contactForm.controls['cp'].value);
            console.log(this.contactForm.controls['requestType'].value);
            console.log(this.contactForm.controls['mensaje'].value);
            console.log(this.contactForm.controls['acceptTerm'].value);
    }*/
    saveProduct(values){
      const contactData = new FormData();
      contactData.append("nombre", this.contactForm.get('nombre').value);
      contactData.append("correo", this.contactForm.get('correo').value);
      contactData.append("municipio", this.contactForm.get('municipio').value);
      contactData.append("estado", this.contactForm.get('estado').value);
      contactData.append("cp", this.contactForm.get('cp').value );
      contactData.append("requestType", this.contactForm.get('requestType').value);
      contactData.append("mensaje", this.contactForm.get('mensaje').value);
      contactData.append("acceptTerm", this.contactForm.get('acceptTerm').value);
      this.contactServiceService.createContact(contactData).subscribe(result =>{
        console.log(result);
        //console.log(JSON.stringify(this.contactForm.value));
        //this.router.navigate(['']);
      });
    }

      onReset(){
        this.submitted = false;
        this.contactForm.reset();
    }

}
