import { Pipe, PipeTransform } from '@angular/core';
import {IEmployee} from './employee';
console.log("hai");
@Pipe({
    name: 'empFilter'
})
export class empFilterPipe implements PipeTransform{
  transform(value: IEmployee[], filterBy: string): IEmployee[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((Employee: IEmployee) =>
            Employee.EmployeeName.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}
