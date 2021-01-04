import { Component, OnInit } from '@angular/core';
import { ModalService } from '../_modal';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {

  constructor(private modalService : ModalService) {

   }

  ngOnInit(): void {
  }

  openModal(id : string){
      this.modalService.open(id);
  }
  onSubmit(){}

}
