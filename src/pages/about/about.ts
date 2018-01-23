import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { User_class } from '../shared/user_class';
import { UserdbProvider } from '../../providers/userdb/userdb';
import { SignupPage } from '../signup/signup';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

	email_id:string='';
	password:string='';
	

  constructor(public _db: UserdbProvider ,public navCtrl: NavController) {

  }

  onLoginClick(){

      this._db.Login(new User_class(this.email_id,this.password,''))
      .subscribe(
        (x:User_class[])=>{

            if(x.length==1){
              alert('login');
            }
            else{
              alert('invalid');
            }
        },
        function(error){
          console.log(error);
        },
        function(){}
      );
  }

  
  loadSignup()
  {
  this.navCtrl.push(SignupPage);
  
  }
}


  

