import { ErrorService } from './error.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
})
export class ErrorComponent implements OnInit {

  constructor(public errorService: ErrorService) {
  }

  ngOnInit() {
  }
}
