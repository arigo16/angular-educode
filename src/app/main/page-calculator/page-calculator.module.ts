import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'

import { PageCalculatorComponent } from './page-calculator.component'

const routes = [
  {
    path: '',
    component: PageCalculatorComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule
  ],
  declarations: [
    PageCalculatorComponent
  ]
})
export class PageCalculatorModule { }
