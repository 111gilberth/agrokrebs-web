import { Component, Input, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-video',
  templateUrl: './modal-video.component.html',
  styleUrls: ['./modal-video.component.scss']
})
export class ModalVideoComponent implements OnInit {
  title = 'modal';
  @Input() public srcVideo:string;
  @Input() public srcClass:string;


  closeResult: string;

  constructor(private modalService: NgbModal) { }

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
            this.srcVideo = "https://www.youtube.com/embed/yTFA3zOrVE4";
            break;
          }
          case "cafe":{
            this.srcVideo = "https://www.youtube.com/embed/YYtPzIbp05s";
            break;
          }

          case "papaya":{
            this.srcVideo = "https://www.youtube.com/embed/TDLs9YieqpE";
            break;
          }
          case "citricos":{
            this.srcVideo = "https://www.youtube.com/embed/ngrW79HjzSE";
            break;
          }
          case "vivero":{
            this.srcVideo = "https://www.youtube.com/embed/lE9YzRvZ7vo";
            break;
          }
          case "green":{
            this.srcVideo = "https://www.youtube.com/embed/qEYTnoueq3U";
            break;
          }
          case "agricultura":{
            this.srcVideo = "https://www.youtube.com/embed/l8GLxR0N3K8";
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
