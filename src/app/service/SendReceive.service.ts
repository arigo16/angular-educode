import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable()
export class SendReceiveService {
    private dataSendSource = new BehaviorSubject('')
    dataSend = this.dataSendSource.asObservable()

    changeMessage(dataSend: string) {
        this.dataSendSource.next(dataSend)
    }

}
