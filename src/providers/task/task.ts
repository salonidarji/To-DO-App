import { Injectable } from '@angular/core';
import { Http,Response,Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Tasks } from '../../pages/shared/tasks';

/*
  Generated class for the TaskProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TaskProvider {

	arr:Tasks[]=[];
 url:string="https://rkdemotask.herokuapp.com/Tasks/";
	//url:string="http://localhost:3000/tasks/";

  constructor(public http: Http) {
    console.log('Hello TaskProvider Provider');
  }

  getAllTask()
  {
  return this.http.get(this.url).map(
	(res:Response)=>res.json());
  
  }
  
  deleteTask(item)
	{
	//let body=JSON.stringify(item);
	let header=new Headers({'Content-Type':'application/json'});
	let ro=new RequestOptions({headers:header});
	return this.http.delete(this.url+item.Id,ro)
		.map((res:Response)=>res.json());
	}
	
	addTask(item)
  {
	let body=JSON.stringify(item);
	let header=new Headers({'Content-Type':'application/json'});
	let ro=new RequestOptions({headers:header});
	return this.http.post(this.url,body,ro)
		.map((res:Response)=>res.json());
  }
  
  editTask(item)
  {
	let body=JSON.stringify(item);
	let header=new Headers({'Content-Type':'application/json'});
	let ro=new RequestOptions({headers:header});
	return this.http.put(this.url+item.Id,body,ro)
		.map((res:Response)=>res.json());
  }
  
}
