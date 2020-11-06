import { Directive, ElementRef, Inject, OnInit, OnDestroy } from '@angular/core';
import { ThemeService } from './theme.service';
import { Subscription } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { Theme } from './theme';

@Directive({
  selector: '[appTheme]'
})
export class ThemeDirective implements OnInit, OnDestroy {

  private themeName = 'dark';
  private themServiceSubscription: Subscription;
  constructor(private elementRef: ElementRef,
              @Inject(DOCUMENT) private document: any,
              private themService: ThemeService) { }

  ngOnInit(): void {
    this.updateTheme(this.themeName);
    this.themService.getActiveTheme()
      .subscribe(themeName => {
        this.themeName = themeName;
        this.updateTheme(this.themeName);
      });
  }

  updateTheme(themeName): void {
    const element = this.elementRef.nativeElement;
    const theme = Theme[themeName];
    const keys = Object.keys(theme);
    keys.forEach((key: any) => {
      element.style.setProperty(key as string, theme[key] as any);
      this.document.body.style.setProperty(key  as string, theme[key] as any);
    });
  }

  ngOnDestroy(): void {
    if (this.themServiceSubscription) {this.themServiceSubscription.unsubscribe(); }
  }

}
