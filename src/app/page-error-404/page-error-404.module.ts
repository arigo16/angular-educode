import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { PageError404Component } from './page-error-404.component'

const routes = [
  {
    path: '**',
    component: PageError404Component
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  declarations: [
    PageError404Component
  ]
})
export class PageError404Module { }