import { Component, Input, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-modal-video',
  templateUrl: './modal-video.component.html',
  styleUrls: ['./modal-video.component.scss']
})
export class ModalVideoComponent implements OnInit {
  title = 'modal';
  @Input() public srcVideo:string;
  @Input() public srcClass:string;
  @Input() public imgClass:string;
  @Input() public inputSize:string;
  @Input() public widthInput:string;
  @Input() public heightInput:string;
  trustedDashboardUrl : SafeUrl;
  closeResult: string;

  constructor(private modalService: NgbModal,
              private sanitizer: DomSanitizer){}

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  public  ngOnInit(): void {
      switch(this.srcClass){
          case "banano":{
            //this.urlSafe = this.sanitizer.bypassSecurityTrustUrl(this.urlBanano);
            this.trustedDashboardUrl = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/yTFA3zOrVE4");
            this.imgClass = "../../assets/Planta_de_platano.png"
            this.widthInput = "500"
            this.heightInput  = "300"
            break;
          }
          case "cafe":{
            //this.urlSafe = this.sanitizer.bypassSecurityTrustUrl(this.urlCafe);
            this.trustedDashboardUrl = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/YYtPzIbp05s");
            this.imgClass = "../../assets/Cafe.6.png"
            this.widthInput = "500"
            this.heightInput  = "300"
            break;
          }

          case "papaya":{
            //this.urlSafe = this.sanitizer.bypassSecurityTrustUrl(this.urlPapaya);
            this.trustedDashboardUrl = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/TDLs9YieqpE");
            this.imgClass = "../../assets/PA2.png"
            this.widthInput = "500"
            this.heightInput  = "300"
            break;
          }
          case "citricos":{
            //this.urlSafe = this.sanitizer.bypassSecurityTrustUrl(this.urlCitricos);
            this.trustedDashboardUrl = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/ngrW79HjzSE");
            this.imgClass = "../../assets/LM1.png"
            this.widthInput = "500"
            this.heightInput  = "300"
            break;
          }
          case "vivero":{
            //this.urlSafe = this.sanitizer.bypassSecurityTrustUrl(this.urlVivero);
            this.trustedDashboardUrl = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/lE9YzRvZ7vo");
            this.imgClass = "../../assets/L5.png"
            this.widthInput = "500"
            this.heightInput  = "300"
            break;
          }
          case "green":{
            //this.urlSafe = this.sanitizer.bypassSecurityTrustUrl(this.urlGreen);
            this.trustedDashboardUrl = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/yTFA3zOrVE4L");
            this.imgClass = "../../assets/Green_Cittrus.png"
            this.widthInput = "500"
            this.heightInput  = "300"
            break;
          }
          case "agricultura":{
            //this.urlSafe = this.sanitizer.bypassSecurityTrustUrl(this.urlAgri);
            this.trustedDashboardUrl = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/l8GLxR0N3K8");
            this.imgClass = "../../assets/Logo_100_x_100_px.png"
            this.widthInput = "180"
            this.heightInput  = "160"
            break;
          }
      }
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return  `with: ${reason}`;
      }
  }
}
