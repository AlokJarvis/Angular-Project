import { Component, OnInit } from '@angular/core';
import {Sort} from '@angular/material/sort';


@Component({
  selector: 'app-employee-thrird',
  templateUrl: './employee-thrird.component.html',
  styleUrls: ['./employee-thrird.component.css']
})
export class EmployeeThrirdComponent implements OnInit {
  id:number;
  name:string;
  salary:number;
  department:string;
  
 
    constructor() {
    
     }
    
  ngOnInit(): void {
  }
  employee:Array<{id:number,name:string,salary:number,department:string}>=[
                                  {id:1001,name:'Rahul',salary:9000,department:'JAVA'},
                                  {id:1002,name:'Vikash',salary:11000,department:'ORAAPS'},
                                  {id:1003,name:'Uma',salary:12000,department:'JAVA'},
                                  {id:1004,name:'Sachin',salary:11500,department:'ORAAPS'},
                                  {id:1005,name:'Amol',salary:7000,department:'.NET'},
                                  {id:1006,name:'Vishal',salary:17000,department:'BI'},
                                  {id:1007,name:'Rajita',salary:21000,department:'BI'}
                                ];
  sortNum(prop:string):void{
    this.employee.sort((a:EmployeeThrirdComponent,b:EmployeeThrirdComponent)=>{
      return a[prop]-b[prop];
    });
  }
  sortString(prop:string):void{
    this.employee.sort((a:EmployeeThrirdComponent,b:EmployeeThrirdComponent)=>
    {
      let A:EmployeeThrirdComponent=a;
      if(prop==="name")
      {
        if(a.name.toLowerCase()>b.name.toLowerCase()) return 1;
        else if(a.name.toLowerCase()<b.name.toLowerCase()) return -1;
        else return 0;
      }
      else
      {
        if(a[prop]>b[prop]) return 1;
        else if(a[prop]<b[prop]) return -1;
        else return 0;
      }
    });
  }
 }