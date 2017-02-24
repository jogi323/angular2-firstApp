import { Component,OnInit} from '@angular/core';
import { starComponent } from '../shared/star.component';
import {IEmployee} from './employee';
console.log("Hello");
@Component({
selector:'my-emp',
templateUrl:'app/employees/emp-list.component.html',
styleUrls:['app/employees/emp-list.component.css'],

})
export class EmpListComponent implements OnInit{
    title:string= 'Employees List';
    imageWidth=50;
    imageMargin=2;
    showImage:boolean=false;
    empName:string=" ";
    Employees: IEmployee[] = [
    {
        "EmployeeId": 2452,
        "EmployeeName": "Joginaidu Gopisetti",
        "EmailID":"jgopisetti@innominds.com",
        "DateOfBirth": "14-08-1993",
        "Location": 'Visakhapatnam',
        "starRating": 3.2,
        "imageUrl": "app/assets/images/jogi.jpg"
    },
    {
        "EmployeeId": 2453,
        "EmployeeName": "Sairam Allampalli",
        "EmailID":"sallampalli@innominds.com",
        "DateOfBirth": "03-03-1993",
        "Location": 'Visakhapatnam',
        "starRating": 3.2,
        "imageUrl": "app/assets/images/sai.jpg"
    },
    {
        "EmployeeId": 2454,
        "EmployeeName": "Ramachandra rao Nuni",
        "EmailID":"rnuni@innominds.com",
        "DateOfBirth": "14-08-1992",
        "Location": 'Visakhapatnam',
        "starRating": 3.2,
        "imageUrl": "app/assets/images/ram.jpg"
    },
    {
        "EmployeeId": 2458,
        "EmployeeName": "Prudhviraju Mantena",
        "EmailID":"pmantena@innominds.com",
        "DateOfBirth": "14-08-1993",
        "Location": 'Visakhapatnam',
        "starRating": 3.2,
        "imageUrl": "app/assets/images/prudhvi.jpg"
    }
];
toggleImage():void{
    this.showImage=!this.showImage;
}
ngOnInit():void{
    console.log("In Angular");
}
 };