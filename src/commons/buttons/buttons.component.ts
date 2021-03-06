import { Component, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {
    @Input() buttonType: string;
    @Input() buttonLabel: string;
    @Input() buttonClass: string;
    @Input() iconClass:  string;
    @Input() click: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  public ngOnInit(): void {
      switch(this.buttonClass){
          case "cancel":{
            this.buttonClass = "btn-cancel"
            this.buttonLabel = "Cancelar"
            break;
          }
          case "success":{
            this.buttonClass ="btn-success"
            this.buttonLabel = "Aceptar"
            break;
          }
          case "delete":{
            this.buttonClass ="btn-delete"
            this.buttonLabel = "Eliminar"
            break;
          }
      }
  }

  public onClick (){
      this.click.emit();
  }


}
