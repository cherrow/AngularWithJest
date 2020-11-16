import { Component, OnInit } from '@angular/core';
import {TestService} from "../test.service";

@Component({
  selector: 'app-service-test',
  templateUrl: './service-test.component.html',
  styleUrls: ['./service-test.component.scss']
})
export class ServiceTestComponent implements OnInit {
  private isCreate: boolean;
  private createTip: string;
  private records: number[];

  constructor(private testService: TestService) { }

  ngOnInit(): void {
    if (this.isCreate) {
      this.createTip = 'create mode';
    } else {
      this.createTip = 'update mode';
      this.testService.fetchRecordByCreateMode(this.isCreate)
        .subscribe(data => {
          this.records = data;
      });
      this.testService.updateCreateTip(this.createTip).subscribe();
    }
  }
}
