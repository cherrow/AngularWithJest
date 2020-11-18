import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TestService {

  public testSubject$ = new BehaviorSubject<boolean>(false);

  constructor() { }

  public fetchRecordByCreateMode(isCreate: boolean): Observable<number[]> {
    return of([1, 2]);
  }

  public updateCreateTip(tip: string): Observable<boolean> {
    return of(true);
  }
}
