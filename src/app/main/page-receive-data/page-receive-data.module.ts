import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { PageReceiveDataComponent } from './page-receive-data.component'

const routes = [
  {
    path: '',
    component: PageReceiveDataComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  declarations: [
    PageReceiveDataComponent
  ]
})
export class PageReceiveDataModule { }