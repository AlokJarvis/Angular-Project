import { Component, OnInit } from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-employee-two',
  templateUrl: './employee-two.component.html',
  styleUrls: ['./employee-two.component.css']
})
export class EmployeeTwoComponent implements OnInit {
  id:number;
  name:string;
   salary:number;
   department:string;
   status:boolean=false;
   result:string;
  constructor()
   {
     
    }

  ngOnInit(): void {
  }
  employee:Array<{id:number,name:string,salary:number,department:string}>=[
  
      {id:1001,name:"Rahul",salary:9000,department:"Java"},
      {id:1002,name:"Sachin",salary:19000,department:"OraApps"},
      {id:1003,name:"Vikash",salary:29000,department:"BI"},
      ];
  deleteUser(arg1)
  {
    console.log("Delete Employee");
    for(let i=0;i<this.employee.length;i++)
    {
      if(i==arg1)
      {
        this.employee.pop();
        this.result="Data Deleted";
      }
    }
  }
  nid:number;
  nname:string;
  nsal:number;
  ndept:string;
  updateUser(id:number,name:string,salary:number,department:string)
  
 {
   this.nid=id;
   this.nname=name;
   this.nsal=salary;
   this.ndept=department;

    
  }
  editrow(id:number,name:string,salary:number,department:string)
  {
    for(let i=0;i<this.employee.length;i++)
    {
      let em=this.employee[i];
      if(em.id==id)
      {
        console.log(name);
        this.employee.splice(i,1);
        this.employee.push({id,name,salary,department});
        console.log(em.name);
        break;
      }
    }
  }

  save(arg1:any,arg2:any,arg3:any,arg4:any){
    this.employee.push({id:parseInt((<HTMLInputElement>arg1).value),name:(<HTMLInputElement>arg2).value,salary:parseInt((<HTMLInputElement>arg3).value),department:(<HTMLInputElement>arg4).value});
    this.status=true;
    if(this.status==true)
    {
      this.result="Data Inserted";
    }
    else{
      this.result="";
    }
   }
}
