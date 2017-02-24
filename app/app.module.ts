import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { EmpListComponent } from './employees/emp-list.component';
import { starComponent } from './shared/star.component';
import { empFilterPipe } from './employees/emp-filter.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
// import {empFilterPipe} from './employees/emp-filter.component';
@NgModule({
  imports: [ BrowserModule,FormsModule  ],
  declarations: [ AppComponent,EmpListComponent,empFilterPipe,starComponent ],
  bootstrap: [ AppComponent],
  schemas:     [CUSTOM_ELEMENTS_SCHEMA]  
})
export class AppModule { }
