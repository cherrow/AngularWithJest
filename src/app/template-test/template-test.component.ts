import {Component, Inject, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-template-test',
  templateUrl: './template-test.component.html',
  styleUrls: ['./template-test.component.scss']
})
export class TemplateTestComponent implements OnInit {

  public showFirstDom = false;
  public readonly = false;
  public placeholder = '';
  public inputControl = new FormControl();

  constructor() { }

  ngOnInit(): void {
    this.inputControl.valueChanges.subscribe(value => {
      if (value === 'enable') {
        this.inputControl.enable();
        this.placeholder = 'enable worked';
      } else if (value === 'disable') {
        this.inputControl.disable();
        this.placeholder = 'disable worked';
      }
    });
  }
}
