import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nave-item',
  templateUrl: './nave-item.component.html',
  styleUrls: ['./nave-item.component.css'],
})
export class NaveItemComponent implements OnInit {
  //input from side-nav
  @Input() icon: string;
  @Input() routerlink: string;
  @Input() itemTitle: string;

  activateCondition = false;

  @Input('activateCondition')
  // get showTitle(): boolean {
  //   return this.activateCondition;
  // }
  set showTitle(value: boolean) {
    this.activateCondition = '' + value !== 'false';
  }

  constructor() {}

  ngOnInit(): void {}
}
