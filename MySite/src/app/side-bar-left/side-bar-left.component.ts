import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalService } from '../_modal';

@Component({
  selector: 'app-side-bar-left',
  templateUrl: './side-bar-left.component.html',
  styleUrls: ['./side-bar-left.component.css']
})
export class SideBarLeftComponent implements OnInit {
  constructor(private modalService : ModalService, private _router:Router) {
  }

  ngOnInit(): void {
    
  }
  openModal(modalId : string){
    if(localStorage.getItem('currentUser')){
      if(modalId === 'login-Modal'){
          this._router.navigate(['/logged-in']);
          return;
      }
    }
   this.modalService.open(modalId);
  }
  closeModal(modalId : string){
    this.modalService.close(modalId);
  }

  logOut(){
    //localStorage.clear();
  }
}
