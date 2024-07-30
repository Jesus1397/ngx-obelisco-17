import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.scss']
})
export class GetStartedComponent {
  public ngxObelisco = `
npm install @gcba/ngx-obelisco
`;

  public boxicons = `
npm install boxicons
`;

  public materialIcons = `
npm install material-icons@latest
`;

  public boxiconsCDN = `
<link
  href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
  rel="stylesheet"
/>
`;

  public materialIconsCDN = `
<link
  href="https://fonts.googleapis.com/icon?
    family=Material+Icons+Round"
  rel="stylesheet"
/>
`;

  public typography = `
<link
  href="https://fonts.googleapis.com/css2?
    family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400&display=swap"
  rel="stylesheet"
/>

<link
  href="https://fonts.googleapis.com/css2?
    family=Nunito:wght@300;400;600;700&display=swap"
  rel="stylesheet"
/>
`;

  public js = `
<script
  src="https://cdn.jsdelivr.net/npm/jquery@3.5.1
        /dist/jquery.slim.min.js"
  integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/
        zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
  crossorigin="anonymous"
><script/>

<script
  src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2
        /dist/js/bootstrap.bundle.min.js"
  integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/
        2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct"
  crossorigin="anonymous"
><script/>
`;

  public iconImport = `
"styles": [
  "src/styles.scss",
  "node_modules/boxicons/css/boxicons.min.css"
],`;

  public stylesImport = `
"styles": [
  "src/styles.scss",
  "node_modules/@gcba/ngx-obelisco/scss/obelisco.scss"
]`;

  public accessImport = `
import { OAccessModule } from '@gcba/ngx-obelisco/access';
import { OAlertModule } from '@gcba/ngx-obelisco/alert';
  `;

  public ngxImport = `
import { NgxObeliscoModule } from '@gcba/ngx-obelisco/ngx-obelisco';
  `;

  currentSection = 'section1';

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const scrollPosition = window.scrollY;
    const sections = document.querySelectorAll('.section-intro') as NodeListOf<HTMLElement>;
    sections.forEach((section: HTMLElement) => {
      if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
        this.currentSection = section.id;
      }
    });
  }

  scrollTo(section: string) {
    document.querySelector('#' + section)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    this.currentSection = section;
  }
}
