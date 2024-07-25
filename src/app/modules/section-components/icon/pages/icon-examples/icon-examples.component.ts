import { Component } from '@angular/core';
import { EnumMaterialIcons, EnumBoxIcons } from 'ngx-obelisco-17/core/models';

@Component({
  selector: 'app-icon-examples',
  templateUrl: './icon-examples.component.html',
  styleUrls: ['./icon-examples.component.scss'],
})
export class IconExamplesComponent {
  constructor() {}
  public exampleMatIcon = '<o-mat-icon>{{ matIcons.info }}</o-mat-icon>';
  public exampleBxIcon =
    '<o-bx-icon>{{ boxIcons.infoCircleSolid }}</o-bx-icon>';
  public matIcons = EnumMaterialIcons;
  public boxIcons = EnumBoxIcons;

  public exampleIconTs = `
import { Component  } from '@angular/core';
import { EnumMaterialIcons, EnumBoxIcons } from 'ngx-obelisco-17/core/models';

@Component({
  selector: 'app-example',
  templateUrl: './app-example.component.html',
})
export class ExampleComponent {
  public matIcons = EnumMaterialIcons;
  public boxIcons = EnumBoxIcons;
}`;
}
