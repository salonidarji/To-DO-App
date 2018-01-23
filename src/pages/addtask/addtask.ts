import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,LoadingController} from 'ionic-angular';
import { TaskProvider } from '../../providers/task/task';
import { Tasks } from '../shared/tasks';
import { HomePage } from '../home/home'; // main task-page


/**
 * Generated class for the AddtaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addtask',
  templateUrl: 'addtask.html',
})
export class AddtaskPage {

	Id:string;
	Title:string;
	Status:string;

  constructor(public load:LoadingController ,public _data:TaskProvider,public navCtrl: NavController, public navParams: NavParams) {
  }
  
  insertTask()
  {
  let pg1=this.load.create({
      content:"loading.."
    });
    pg1.present();
  
  let item=new Tasks(this.Id,this.Title,this.Status);
  this._data.addTask(item).subscribe(
	(data)=>{
	
	this.navCtrl.push(HomePage);
	},
	function(err){
		alert(err);
	},
	function(){
		pg1.dismiss();
	}
  );
	
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddtaskPage');
  }

}
