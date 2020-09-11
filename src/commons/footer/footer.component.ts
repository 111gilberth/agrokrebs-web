import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input()  footerStyle: string;
  @Input()  footerText: string;
  @Input()  gridRow: string;
  @Input()  fooName: string;

  constructor() { }

  public ngOnInit(): void {
      switch(this.fooName){
            case "footerUno":{
                this.footerStyle = "page-footer font-small special-color-dark pt-4page-footer font-small special-color-dark pt-4"
                this.footerText = "container-fluid text-center text-md-left"
                this.gridRow = "row"
              break;
            }
            case "footerDos":{
                this.footerStyle = "page-footer font-small teal pt-4"
                this.footerText = "container-fluid text-center text-md-left"
                this.gridRow = "row"
              break;
            }
            case "footerTres":{
                this.footerStyle = "page-footer font-small indigo"
                this.footerText = "container text-center text-md-left"
                this.gridRow = "row"
              break;
           }
       }
    }
}
