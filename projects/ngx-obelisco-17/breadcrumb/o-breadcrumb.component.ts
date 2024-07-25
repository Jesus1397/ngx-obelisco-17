import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { filter, startWith, Subject, takeUntil } from 'rxjs';
import { BreadcrumbService } from 'ngx-obelisco-17/core/services';
import { BreadcrumbRoute } from 'ngx-obelisco-17/core/models';

@Component({
  selector: 'o-breadcrumb',
  templateUrl: './o-breadcrumb.component.html',
  styleUrls: ['./o-breadcrumb.component.scss'],
})
export class OBreadcrumbComponent implements OnInit, OnDestroy {
  @Input() public customClasses: string = '';

  public routes: BreadcrumbRoute[] = [];

  private defaultRoute!: string;
  private onDestroy$ = new Subject<void>();

  constructor(
    private readonly router: Router,
    private readonly breadcrumbService: BreadcrumbService
  ) {}

  ngOnInit(): void {
    this.breadcrumbService.breadcrumb$
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((breadcrumb) => {
        if (Object.entries(breadcrumb).length !== 0) {
          this.routes = breadcrumb.routes || [];
          this.defaultRoute = breadcrumb.defaultRoute || '';
        }
      });
    if (this.routes.length === 0) {
      this.getPaths();
      return;
    }
  }

  private getPaths(): void {
    this.routes.length != 0 &&
      this.router.events
        .pipe(
          takeUntil(this.onDestroy$),
          filter((event) => event instanceof NavigationEnd),
          startWith(this.router)
        )
        .subscribe({
          next: (event: any) => {
            event = event as RouterEvent;
            this.routes = [];
            event.route
              .split('/')
              .forEach(
                (item: string, index: number) =>
                  (item !== '' || isNaN(+item) || item.length > 2) &&
                  this.routes.push({
                    name: this.formatedName(item),
                    route: this.formatedRoute(item, event.route),
                  })
              );
          },
        });
  }

  private formatedName(path: string): string {
    return (
      (path && path[0].toUpperCase() + path.split('-').join(' ').slice(1)) || ''
    );
  }

  private formatedRoute(url: string, route: string): string {
    return route.split(url)[0] + url;
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
