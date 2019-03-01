import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { SendReceiveService } from 'src/app/service/SendReceive.service'

@Component({
  selector: 'app-page-receive-data',
  templateUrl: './page-receive-data.component.html',
  styleUrls: ['./page-receive-data.component.css']
})
export class PageReceiveDataComponent implements OnInit {
  dataReceived: any

  constructor(
    private router: Router,
    private sendReceiveService: SendReceiveService
  ) {
    this.sendReceiveService.dataSend.subscribe(result => this.dataReceived = result)
  }

  ngOnInit() {
    if (!this.dataReceived) {
      this.router.navigate(["../"])
    }
  }

}
