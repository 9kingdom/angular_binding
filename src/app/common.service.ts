import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ModalData } from './modal-data';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  code = new Subject<ModalData>();

  constructor() { }


}
