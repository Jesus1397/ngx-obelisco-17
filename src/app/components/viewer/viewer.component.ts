import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-viewer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit {
  @Input() public title!: string;
  @Input() public isNavCode: boolean = false;
  @Input() public isCodeVisible: boolean = false;

  public isOpenCode: boolean = false;
  public isWindowHTML: boolean = true;

  get linkCode(): string {
    return this.isOpenCode ? 'Ocultar' : 'Mostrar código';
  }

  ngOnInit(): void {
    if (this.isCodeVisible == true) {
      this.isOpenCode = true;
    }
  }
}
