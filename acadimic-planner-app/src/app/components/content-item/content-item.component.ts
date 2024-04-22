import { Component, Input, OnInit } from '@angular/core';
import { ContentItem } from 'src/app/entities/Article/ContentItem';

@Component({
  selector: 'app-content-item',
  templateUrl: './content-item.component.html',
  styleUrls: ['./content-item.component.scss'],
})
export class ContentItemComponent  implements OnInit {

  @Input() contentItem: ContentItem;
  @Input() level: number;
  @Input() prifex: string;

  constructor() { }

  ngOnInit() {}


  getNextLevel() {
    return this.level + 1;
  }

  getPaddingBaseOnLevel(): string {
    return `${this.level * 10}px`;
  }

  getPrifex(index: number): string {
    return `${this.prifex}${index+1}.`;
  }
}
