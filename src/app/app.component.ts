import { getLocaleTimeFormat } from '@angular/common';
import { Component } from '@angular/core';
import { timestamp } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  pvisible: boolean = true;

  buttonArray = []

  pushButtonArray() {
    this.buttonArray.push(new Date().toLocaleString())
  }
}
