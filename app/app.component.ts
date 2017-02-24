import { Component } from '@angular/core';
import { EmpListComponent } from './employees/emp-list.component';

@Component({
    selector: 'pm-app',
    template: `
        <div>
            <h1>Inno<span class="minds">Minds</span> Mean Stack Team</h1>
            <my-emp></my-emp>
        </div>`,
     styleUrls : ['app/app.component.css']

})
export class AppComponent {

 }
