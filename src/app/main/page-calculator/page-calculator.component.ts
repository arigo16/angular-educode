import { Component } from '@angular/core'
import { Router } from '@angular/router'

import { SendReceiveService } from 'src/app/service/SendReceive.service'

@Component({
  selector: 'app-page-calculator',
  templateUrl: './page-calculator.component.html',
  styleUrls: ['./page-calculator.component.css']
})
export class PageCalculatorComponent {

  number1: number
  number2: number
  number3: number
  result: string

  constructor(
    private router: Router,
    private sendReceiveService: SendReceiveService
  ) { }

  Operation(operation: any) {
    if (!this.number1) {
      this.result = "Angka pertama tidak ada nominal"
    } else if (!this.number2) {
      this.result = "Angka kedua tidak ada nominal"
    } else {
      if (operation == "+") {
        this.number3 = (+this.number1) + (+this.number2)
        this.result = "Hasilnya adalah: " + this.number3
      } else if (operation == "-") {
        this.number3 = (+this.number1) - (+this.number2)
        this.result = "Hasilnya adalah: " + this.number3
      } else if (operation == "/") {
        this.number3 = (+this.number1) / (+this.number2)
        this.result = "Hasilnya adalah: " + this.number3
      } else if (operation == "*") {
        this.number3 = (+this.number1) * (+this.number2)
        this.result = "Hasilnya adalah: " + this.number3
      }
    }
  }

  passingDataFunc(value: string) {
    this.sendReceiveService.changeMessage(value)

    this.router.navigate(["/receive-data"])
  }
}
