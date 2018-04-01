import { Component, Input } from '@angular/core';


@Component({
  selector: 'item-component',
  templateUrl: './item-component.component.html'
})

export class ItemComponent {
    @Input() item : any;

}
