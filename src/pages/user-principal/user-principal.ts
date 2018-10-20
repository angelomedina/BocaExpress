import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import {AdminHomePage} from '../admin-home/admin-home'; // importa la pagina a llamar
import { LoginPage } from '../login/login';



@IonicPage()
@Component({
  selector: 'page-user-principal',
  templateUrl: 'user-principal.html',
})
export class UserPrincipalPage {

  /*
  tab1Root = AdminHomePage;
  tab2Root = AdminHomePage;
  tab3Root = LoginPage;
  tab4Root = LoginPage;
  */

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPrincipalPage');
  }


  adminVentana() {

    var jsonPrueba = {  // Prueba de como funcionan los envios de Json entre Pages
      nombre:'Wilfred',
      cedula:207720776
    };
    this.navCtrl.push(AdminHomePage, {jsonPrueba});  // el navCtrl funciona como redireccion de paginas
  }


  loginVentana(){
    this.navCtrl.push(LoginPage);
  }

}
