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
    this.modalService.open(modalId);
  }
  closeModal(modalId : string){
    this.modalService.close(modalId);
  }
}
