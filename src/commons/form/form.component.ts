import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

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
  requestTypes = ['Claim', 'Feedback', 'Help Request']
  estados = ['Aguascalientes','Baja California','Baja California Sur','Campeche','Coahuila de Zaragoza','Colima','Chiapas','Chihuahua','Distrito Federal','Durango','Guanajuato','Hidalgo',
  'Jalisco','México','Michoacán de Ocampo','Morelos','Nayarit','Nuevo León','Manlio Fabio Altamirano','Oaxaca','Puebla','Querétaro','Quintana Roo','San Luis Potosí','Sinaloa','Sonora',
  'Tabasco','Tamaulipas','Tlaxcala','Veracruz de Ignacio de la Llave','Yucatán','Zacatecas']

  constructor( private formBuilder: FormBuilder ) {}

   public ngOnInit(): void {
        this.contactForm = this.formBuilder.group({
            //id: ['', Validators.required],
            nombre: ['', [Validators.required, Validators.minLength(4)]],
            correo: ['', [Validators.required, Validators.email]],
            idMunicipio: ['', Validators.required],
            idEstado: ['', Validators.required],
            cp: ['', Validators.required],
            requestType: ['', Validators.required],
            mensaje: ['', [Validators.required,Validators.minLength(10)]],
            acceptTerms: [false, Validators.requiredTrue]
        });
    }
    // convenience getter for easy access to form fields
    get f() { return this.contactForm.controls; }

   // Submit Registration Form
     onSubmit() {
        this.submitted = true;
        if(this.contactForm.invalid){
          return;
        }
        console.log(JSON.stringify(this.contactForm.value));
        //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.contactForm.value));
  }

      onReset(){
        this.submitted = false;
        this.contactForm.reset();
    }

}
