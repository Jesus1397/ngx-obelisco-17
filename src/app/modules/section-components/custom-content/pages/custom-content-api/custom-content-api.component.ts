import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-content-api',
  templateUrl: './custom-content-api.component.html',
  styleUrls: ['./custom-content-api.component.scss']
})
export class CustomContentApiComponent {
  public customExample = `
<o-alert>
  <div *oCustomContent>
    <p>Contenido personalizado</p>
  </div>
</o-alert>`;
}
