import { Component, OnInit } from '@angular/core';
import {
  SPINNER_EXAMPLE_BLOCK,
  SPINNER_EXAMPLE_COLORS,
  SPINNER_EXAMPLE_MESSAGE,
  SPINNER_EXAMPLE_SIZES
} from 'src/app/constants/spinner.constants';

@Component({
  selector: 'app-spinner-examples',
  templateUrl: './spinner-examples.component.html',
  styleUrls: ['./spinner-examples.component.scss']
})
export class SpinnerExamplesComponent {
  public exampleColors = SPINNER_EXAMPLE_COLORS;
  public exampleSizes = SPINNER_EXAMPLE_SIZES;
  public exampleBlock = SPINNER_EXAMPLE_BLOCK;
  public exampleMessage = SPINNER_EXAMPLE_MESSAGE;
}
