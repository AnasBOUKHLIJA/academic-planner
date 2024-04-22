import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import Prism from 'prismjs';


@Component({
  selector: 'app-prism',
  templateUrl: './prism.component.html',
  styleUrls: ['./prism.component.scss'],
})

export class PrismComponent  implements OnInit, AfterViewInit, OnChanges {

  @Input() code: string;
  @Input() language: string;
  @ViewChild('codeBlock') codeBlock: ElementRef;


  constructor() { }

  ngOnInit() {}


  ngAfterViewInit() {
    Prism.highlightElement(this.codeBlock.nativeElement);
  }
  ngOnChanges(changes: any): void {
    if (changes?.code) {
      if (this.codeBlock?.nativeElement) {
        this.codeBlock.nativeElement.textContent = this.code;
        Prism.highlightElement(this.codeBlock.nativeElement);
      }
    }
  }

}
