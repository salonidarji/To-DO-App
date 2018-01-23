import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserdbProvider } from '../../providers/userdb/userdb';
import { AboutPage } from '../about/about';
import { User_class } from '../shared/user_class';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

	email_id:string='';
	password:string='';
	mobile_no:string='';

  constructor(public _db:UserdbProvider , public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
 
  onSignupClick()
  {
	 this._db.addUser(new User_class(this.email_id,this.password,this.mobile_no))
      .subscribe(
        (x:User_class[])=>{
			
            if(x.length>0){
				alert("Registered");
             
            }
            else{
              alert('invalid procedure');
            }
        },
        function(error){
          console.log(error);
        },
        function(){}
      );
  }
  

}
