import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ModalData } from './modal-data';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  code = new Subject<ModalData>();
  name = new Subject<string>();
  private initName;

  constructor() { }

  getInitName(): string {
    return this.initName;
  }

  setInitName(switchName: string) {
    this.initName = switchName;
  }


}
