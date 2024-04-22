import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { AnimationController, IonModal } from '@ionic/angular';
import { Article } from 'src/app/entities/Article/Article';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.scss'],
})
export class ArticleItemComponent implements OnInit {

  @ViewChild('modal') modal: ElementRef<IonModal>;
  @Input() article: Article;
  artcileBaseUrl: string;

  constructor(
    private animationCtrl: AnimationController,
    private utilsService: UtilsService
  ) { }

  ngOnInit(): void {
    this.artcileBaseUrl = this.utilsService.applicationUrlGet() + 'blogs-articles/';
  }

  enterAnimation = (baseEl: HTMLElement) => {
    const root = baseEl.shadowRoot;

    const backdropAnimation = this.animationCtrl
      .create()
      .addElement(root?.querySelector('ion-backdrop')!)
      .fromTo('opacity', '0.1', 'var(--backdrop-opacity)');

    const wrapperAnimation = this.animationCtrl
      .create()
      .addElement(root?.querySelector('.modal-wrapper')!)
      .keyframes([
        { offset: 0, opacity: '0', transform: 'scale(0)' },
        { offset: 1, opacity: '0.99', transform: 'scale(1)' },
      ]);

    return this.animationCtrl
      .create()
      .addElement(baseEl)
      .easing('ease-out')
      .duration(500)
      .addAnimation([backdropAnimation, wrapperAnimation]);
  };

  leaveAnimation = (baseEl: HTMLElement) => {
    return this.enterAnimation(baseEl).direction('reverse');
  };

  copyUrl(){
    this.utilsService.copyToClipBoard('blogs-articles/' + this.article.code, true);
  }
}
