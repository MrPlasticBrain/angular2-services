import { Component } from '@angular/core';

@Component({
    selector: 'app-cmp-b',
    template:  `
    <h2>Component B</h2>
    <div>
      <input type="text">
      <button (click)="onLog()">Log</button>
      <button (click)="onStore()">Store</button>
    </div>
    <hr>
    <div>
        <button (click)="onGet()">Refresh Storage</button>
        <h3>Storage</h3>
        <ul>
            <li></li>
        </ul>
        <h3>Received Value</h3>
        <p></p>
    </div>
  `
})
export class CmpBComponent {

}
