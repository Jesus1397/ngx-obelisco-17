import { Component } from '@angular/core';
import { COLUMNS } from 'src/app/constants/components.constants';
import {
  LOGO_HEADER_DATA_SOURCE,
  LOGO_HEADER_INTERFACE,
  MEDIA_HEADER_DATA_SOURCE,
  NAVBAR_DATA_SOURCE,
  NAVBAR_ROUTE_ACCOUNT_DATA_SOURCE,
  NAVBAR_ROUTE_ACCOUNT_INTERFACE,
  NAVBAR_ROUTE_ACCOUNT_ITEM_DATA_SOURCE,
  NAVBAR_ROUTE_BASE_DATA_SOURCE,
  NAVBAR_ROUTE_BASE_INTERFACE,
  NAVBAR_ROUTE_DATA_SOURCE,
  NAVBAR_ROUTE_INTERFACE,
  NAVBAR_ROUTE_ITEM_DATA_SOURCE,
  NAVBAR_ROUTE_LOGIN_INTERFACE,
  NAVBAR_SEARCHITEM_INTERFACE,
  SEARCHBAR_ITEM_DATA_SOURCE
} from 'src/app/constants/navbar.constants';

@Component({
  selector: 'app-navbar-api',
  templateUrl: './navbar-api.component.html',
  styleUrls: ['./navbar-api.component.scss']
})
export class NavbarApiComponent {
  public columns = COLUMNS;
  public dataSource = NAVBAR_DATA_SOURCE;

  public navbarRouteBaseInterface = NAVBAR_ROUTE_BASE_INTERFACE;
  public navbarRouteInterface = NAVBAR_ROUTE_INTERFACE;
  public navbarRouteAccountInterface = NAVBAR_ROUTE_ACCOUNT_INTERFACE;
  public navbarRouteLoginInterface = NAVBAR_ROUTE_LOGIN_INTERFACE;
  public navbarSearchitemInterface = NAVBAR_SEARCHITEM_INTERFACE;

  public navbarRouteBaseDataSource = NAVBAR_ROUTE_BASE_DATA_SOURCE;
  public navbarRouteDataSource = NAVBAR_ROUTE_DATA_SOURCE;
  public navbarRouteItemDataSource = NAVBAR_ROUTE_ITEM_DATA_SOURCE;
  public navbarRouteAccountDataSource = NAVBAR_ROUTE_ACCOUNT_DATA_SOURCE;
  public navbarRouteAccountItemDataSource = NAVBAR_ROUTE_ACCOUNT_ITEM_DATA_SOURCE;
  public searchbarItemDataSource = SEARCHBAR_ITEM_DATA_SOURCE;

  public logoInterface = LOGO_HEADER_INTERFACE;
  public logoDataSource = LOGO_HEADER_DATA_SOURCE;
  public mediaDataSource = MEDIA_HEADER_DATA_SOURCE;
}
