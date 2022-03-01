// @ts-ignore
import {NgModule} from '@angular/core';
// @ts-ignore
import {CommonModule} from '@angular/common';


// @ts-ignore
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BookRoutingModule}
  from './book-routing.module';





// @ts-ignore
@NgModule({
  declarations: [],
  exports: [

  ],
    imports: [
        CommonModule,
        BookRoutingModule,
        ReactiveFormsModule,
        FormsModule,
    ]
})
export class BookModule {
}
