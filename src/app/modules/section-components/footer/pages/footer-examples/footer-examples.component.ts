import { Component } from '@angular/core';
import { CustomContent } from 'ngx-obelisco-17/core/models';
import {
  FOOTER_CUSTOM_CONTENT_HTML,
  FOOTER_CUSTOM_CUSTOM_TS,
  FOOTER_CUSTOM_LIST_HTML,
  FOOTER_CUSTOM_LIST_TS,
  FOOTER_EXAMPLE_ALL_HTML,
  FOOTER_EXAMPLE_INDICATOR_HTML,
  FOOTER_EXAMPLE_LINKS_HTML,
  LINK_CUSTOM_CONTENT,
  LINK_CUSTOM_LIST,
  NETWORK_CUSTOM_CONTENT,
  NETWORK_CUSTOM_LIST,
  PHONE_CUSTOM_CONTENT,
  PHONE_CUSTOM_LIST,
} from 'src/app/constants/footer.constants';

@Component({
  selector: 'app-footer-examples',
  templateUrl: './footer-examples.component.html',
  styleUrls: ['./footer-examples.component.scss'],
})
export class FooterExamplesComponent {
  public phoneCustomList = PHONE_CUSTOM_LIST;
  public networkCustomList = NETWORK_CUSTOM_LIST;
  public linkCustomList = LINK_CUSTOM_LIST;

  public exampleLinksHTML = FOOTER_EXAMPLE_LINKS_HTML;
  public exampleAllHTML = FOOTER_EXAMPLE_ALL_HTML;
  public exampleIndicatorHTML = FOOTER_EXAMPLE_INDICATOR_HTML;
  public exampleCustomListHTML = FOOTER_CUSTOM_LIST_HTML;
  public exampleCustomContentHTML = FOOTER_CUSTOM_CONTENT_HTML;

  public exampleCustomListTS = FOOTER_CUSTOM_LIST_TS;
  public exampleCustomCustomTS = FOOTER_CUSTOM_CUSTOM_TS;

  public phoneCustomContent: CustomContent = PHONE_CUSTOM_CONTENT;
  public networkCustomContent: CustomContent = NETWORK_CUSTOM_CONTENT;
  public linkCustomContent: CustomContent = LINK_CUSTOM_CONTENT;
}
