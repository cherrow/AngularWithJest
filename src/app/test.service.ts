import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }

  public fetchRecordByCreateMode(isCreate: boolean): Observable<number[]> {
    return of([1, 2]);
  }

  public updateCreateTip(tip: string): Observable<boolean> {
    return of(true);
  }
}
