import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { ModalService } from '../_modal';
import { AuthenticationService } from '../_services/authentication.service';


@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {
  loginForm : FormGroup;
  
  constructor(private formBuilder : FormBuilder, private modalService : ModalService, private authenticationService : AuthenticationService) {

   }

  ngOnInit(){
    this.loginForm = this.formBuilder.group({
      username : new FormControl(),
      password : new FormControl()
      //username : ['', [Validators.required, Validators.minLength(6)]],
      //password : ['', [[Validators.required, Validators.minLength(6)]]]
    });
  }

  openModal(id : string){
      this.modalService.open(id);
  }
  get f(){
    return this.loginForm.controls;
  }
  onSubmit(){
    console.log(this.f.username.value);
    this.authenticationService.login(this.f.username.value, this.f.password.value);
  }

}
