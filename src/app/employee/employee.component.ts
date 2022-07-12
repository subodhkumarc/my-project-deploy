import {Component} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  testing : any[];
  selectedVals : any[];
  dataSource = [
    { level: '1', active: false, name: 'Level 1' },
    { level: '2', active: false, name: 'Level 2' },
    { level: '3', active: false, name: 'Level 3' },
    { level: '4', active: false, name: 'Level 4' },
    { level: '5', active: false, name: 'Level 5' },
    { level: '6', active: false, name: 'Level 6' },
    { level: '7', active: false, name: 'Level 7' },
    { level: '8', active: false, name: 'Level 8' },
    { level: '9', active: false, name: 'Level 9' },
    
  ];

  // toggle(event){
  //   console.log(this.selectedVals);
  //   console.log(event);
  // }
  
  selectedValues(event){
    this.testing = [
      {  name: 'Level 1' },
      {  name: 'Level 5' },
      {  name: 'Level 9' },
    ];

    let finalValues :any[] =[];
    let tempValues = this.dataSource;
     this.testing.forEach( t1 =>{
       let temp =[];
       temp = tempValues.filter(t2 => t1.name === t2.name);
       if(temp!=undefined && temp.length!=0){
        finalValues.push(temp);
       }
     });

     this.dataSource = [];
     this.dataSource = finalValues;
  }

}

