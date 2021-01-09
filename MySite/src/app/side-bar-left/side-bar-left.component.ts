import { Component, OnInit } from '@angular/core';
import { ModalService } from '../_modal';

@Component({
  selector: 'app-side-bar-left',
  templateUrl: './side-bar-left.component.html',
  styleUrls: ['./side-bar-left.component.css']
})
export class SideBarLeftComponent implements OnInit {
  constructor(private modalService : ModalService) {
  }

  ngOnInit(): void {
  }
  openModal(modalId : string){
    if(localStorage.getItem('token') != null){
      if(localStorage.getItem('token').toString() != 'true'){
        this.modalService.open(modalId);
      }
    }else{
      this.modalService.open(modalId);
    }
  }
  closeModal(modalId : string){
    this.modalService.close(modalId);
  }

  logOut(){
    localStorage.clear();
  }
}
