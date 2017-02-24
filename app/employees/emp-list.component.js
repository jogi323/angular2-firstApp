"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
console.log("Hello");
var EmpListComponent = (function () {
    function EmpListComponent() {
        this.title = 'Employees List';
        this.imageWidth = 50;
        this.imageMargin = 2;
        this.showImage = false;
        this.empName = " ";
        this.Employees = [
            {
                "EmployeeId": 2452,
                "EmployeeName": "Joginaidu Gopisetti",
                "EmailID": "jgopisetti@innominds.com",
                "DateOfBirth": "14-08-1993",
                "Location": 'Visakhapatnam',
                "starRating": 3.2,
                "imageUrl": "app/assets/images/jogi.jpg"
            },
            {
                "EmployeeId": 2453,
                "EmployeeName": "Sairam Allampalli",
                "EmailID": "sallampalli@innominds.com",
                "DateOfBirth": "03-03-1993",
                "Location": 'Visakhapatnam',
                "starRating": 3.2,
                "imageUrl": "app/assets/images/sai.jpg"
            },
            {
                "EmployeeId": 2454,
                "EmployeeName": "Ramachandra rao Nuni",
                "EmailID": "rnuni@innominds.com",
                "DateOfBirth": "14-08-1992",
                "Location": 'Visakhapatnam',
                "starRating": 3.2,
                "imageUrl": "app/assets/images/ram.jpg"
            },
            {
                "EmployeeId": 2458,
                "EmployeeName": "Prudhviraju Mantena",
                "EmailID": "pmantena@innominds.com",
                "DateOfBirth": "14-08-1993",
                "Location": 'Visakhapatnam',
                "starRating": 3.2,
                "imageUrl": "app/assets/images/prudhvi.jpg"
            }
        ];
    }
    EmpListComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    EmpListComponent.prototype.ngOnInit = function () {
        console.log("In Angular");
    };
    return EmpListComponent;
}());
EmpListComponent = __decorate([
    core_1.Component({
        selector: 'my-emp',
        templateUrl: 'app/employees/emp-list.component.html',
        styleUrls: ['app/employees/emp-list.component.css'],
    })
], EmpListComponent);
exports.EmpListComponent = EmpListComponent;
;
//# sourceMappingURL=emp-list.component.js.map