import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { RegistroPage } from '../registro/registro';
import { LoginService } from '../../services/login/login.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../../model/user/user.model';
import { ListaPage } from '../lista/lista';
import { UserPrincipalPage } from '../user-principal/user-principal';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  usuario : User = {
    email : undefined,
    password : undefined
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, public loginService : LoginService, public fireauth: AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  registroVentana(){
    this.navCtrl.push(RegistroPage);
  }


  loginUser(email:string,password:string){
    this.loginService.loginUser(email,password);
    this.navCtrl.setRoot(ListaPage);
    }

}
