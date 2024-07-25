import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'app-tabs-link',
  standalone: true,
  templateUrl: './tabs-link.component.html',
  styleUrls: ['./tabs-link.component.scss'],
  imports: [CommonModule, RouterModule]
})
export class TabsLinkComponent implements AfterViewInit {
  @Input() routes: any;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngAfterViewInit() {
    const links = this.el.nativeElement.querySelectorAll('.nav-pills.tabs .nav-item .nav-link');

    links.forEach((link: { blur: () => void }) => {
      this.renderer.listen(link, 'focus', () => {
        setTimeout(() => {
          link.blur();
        }, 300);
      });
    });
  }
}
