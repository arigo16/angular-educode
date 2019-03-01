import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { Routes, RouterModule } from '@angular/router'

import { AppComponent } from './app.component'

import { SendReceiveService } from './service/SendReceive.service'

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: './main/page-calculator/page-calculator.module#PageCalculatorModule'
  },
  {
    path: 'receive-data',
    loadChildren: './main/page-receive-data/page-receive-data.module#PageReceiveDataModule'
  },
  {
    path: '**',
    loadChildren: './page-error-404/page-error-404.module#PageError404Module'
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule

  ],
  providers: [
    SendReceiveService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
