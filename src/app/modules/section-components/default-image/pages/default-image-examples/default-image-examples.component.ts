import { Component } from '@angular/core';

@Component({
  selector: 'app-default-image-examples',
  templateUrl: './default-image-examples.component.html',
  styleUrls: ['./default-image-examples.component.scss']
})
export class DefaultImageExamplesComponent {
  public imageDefaultExample = `
<div class="card">
  <img oDefaultImage src="cards/*" class="card-img-top" alt="descripción de imagen" />
  <div class="card-body">
    <p class="card-headline">sobrelinea</p>
    <h3 class="card-title">
      <a href="#" class="card-title-link">Título de la tarjeta</a>
    </h3>
    <p class="card-text">Descripción de la tarjeta</p>
    <div class="card-info">
      <div class="pt-2">
        <small>
          <span class="material-symbols-rounded o-icon" aria-hidden="true">calendar_today</span>
          Lun 01/1
        </small>
        <small>
          <span class="material-symbols-rounded o-icon" aria-hidden="true">watch_later</span>
          17 | 18 | 19 hs
        </small>
      </div>
    </div>
  </div>
</div>
  `;

  public imageDefaultUrlExample = `
<div class="card">
  <img
    oDefaultImage
    defaultImageUrl="https://gcba.github.io/Obelisco/panel/destacado-bs-as.jpg"
    src="cards/*"
    class="card-img-top"
    alt="descripción de imagen"
  />
  <div class="card-body">
    <p class="card-headline">sobrelinea</p>
    <h3 class="card-title">
      <a href="#" class="card-title-link">Título de la tarjeta</a>
    </h3>
    <p class="card-text">Descripción de la tarjeta</p>
    <div class="card-info">
      <div class="pt-2">
        <small>
          <span class="material-symbols-rounded o-icon" aria-hidden="true">calendar_today</span>
          Lun 01/1
        </small>
        <small>
          <span class="material-symbols-rounded o-icon" aria-hidden="true">watch_later</span>
          17 | 18 | 19 hs
        </small>
      </div>
    </div>
  </div>
</div>
  `;
}
