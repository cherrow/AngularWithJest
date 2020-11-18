import { Component, OnInit } from '@angular/core';
import {TestService} from "../test.service";

@Component({
  selector: 'app-observable-test',
  templateUrl: './observable-test.component.html',
  styleUrls: ['./observable-test.component.scss']
})
export class ObservableTestComponent implements OnInit {
  private createTip: string;

  constructor(private testService: TestService) { }

  ngOnInit(): void {
    this.setupCreateModeChangeListener();
  }

  private setupCreateModeChangeListener() {
    this.testService.testSubject$.subscribe(isCreate => {
      if (isCreate) {
        this.createTip = 'create mode';
      } else {
        this.createTip = 'update mode';
      }
    });
  }
}
