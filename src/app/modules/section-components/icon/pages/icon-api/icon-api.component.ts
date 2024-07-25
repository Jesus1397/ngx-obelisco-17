import { Component } from '@angular/core';

@Component({
  selector: 'app-icon-api',
  templateUrl: './icon-api.component.html',
  styleUrls: ['./icon-api.component.scss']
})
export class IconApiComponent {
  materialIcons = `
  enum EnumMaterialIcons {
  playArrow = 'play_arrow',
  playCircleFilled = 'play_circle_filled',
  videocam = 'videocam',
  playCircle = 'play_circle',
  mic = 'mic',
  volumeUp = 'volume_up',
  ...
}
`;

  boxIcons = `
    enum EnumBoxIcons {
  caretUpCircle = 'bx bx-caret-up-circle',
  note = 'bx bx-note',
  dice5 = 'bx bx-dice-5',
  busSchool = 'bx bx-bus-school',
  bible = 'bx bx-bible',
  ...
}
`;
}
