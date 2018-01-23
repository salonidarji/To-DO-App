import { Component } from '@angular/core';
import { NavController ,LoadingController } from 'ionic-angular';
import { Tasks } from '../shared/tasks';
import { TaskProvider } from '../../providers/task/task';
import { AddtaskPage } from '../addtask/addtask';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	arr:Tasks[]=[];
	arr1:Tasks[]=[];
	Title:string;
	txtsearch:string;
	
  constructor(public load:LoadingController,public _data:TaskProvider,public navCtrl: NavController) {
	
  }

  ionViewDidLoad() {
	
	let l=this.load.create({
	content:"loading..."
	});

	l.present(); 
	
	this._data.getAllTask().subscribe(
	(d:Tasks[])=>{
		this.arr=d;
		this.arr1=d;
	},
	function(err)
	{
		alert(err);
	},
	function()
	{
		l.dismiss();
	}
	
	);
  }
  
  	addTask()
  {
  this.navCtrl.push(AddtaskPage);
  
  }  
  
  
  onClick(item)
  {
  let l=this.load.create({
	content:"loading..."
	});

	l.present(); 
	
	
	
	this._data.deleteTask(item).subscribe(
	(d:any)=>{
	this.arr.splice(this.arr.indexOf(item),1);
	
	},
	function(err)
	{
	alert(err);
	},
	function(){
	l.dismiss(); 
	}
);
  }
  
  onEdit(item)
  {
  let l=this.load.create({
	content:"loading..."
	});

	l.present(); 
		this._data.editTask(item).subscribe(
	(d:any)=>{
	if(item.Status=="done")
 
	{
 
	item.Status='pending';
 
	}
 
	else
 
	{
 
		item.Status='done';
 
	}
	
	},
	function(err)
	{
	alert(err);
	},
	function(){
	l.dismiss(); 
	}
);
  }
  

  searchItem()
  {
	if(this.txtsearch!='')
	{ 
		this.arr=this.arr.filter((x)=>x.Title.startsWith('d'));
		
	}
	else{
		this.arr=this.arr1;
	}
  }
}
