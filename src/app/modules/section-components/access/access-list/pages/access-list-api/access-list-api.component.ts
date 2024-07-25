import { Component } from '@angular/core';
import {
  ACCESS_LIST_ACCESSCATEGORY_INTERFACE,
  ACCESS_LIST_ACCESSCATEGORY_INTERFACE_DATA_SOURCE,
  ACCESS_LIST_ACCESS_INTERFACE,
  ACCESS_LIST_ACCESS_INTERFACE_DATA_SOURCE,
  ACCESS_LIST_DATA_SOURCE,
  ACCESS_LIST_FOOTER_INTERFACE,
  ACCESS_LIST_FOOTER_INTERFACE_DATA_SOURCE,
  ACCESS_LIST_HEADER_INTERFACE,
  ACCESS_LIST_HEADER_INTERFACE_DATA_SOURCE,
  ACCESS_LIST_INTERFACE,
  ACCESS_LIST_INTERFACE_DATA_SOURCE
} from 'src/app/constants/access.constants';
import { COLUMNS } from 'src/app/constants/components.constants';

@Component({
  selector: 'app-access-list-api',
  templateUrl: './access-list-api.component.html',
  styleUrls: ['./access-list-api.component.scss']
})
export class AccessListApiComponent {
  public dataSource = ACCESS_LIST_DATA_SOURCE;
  public columns = COLUMNS;

  public exampleIterfaceAccessList = ACCESS_LIST_INTERFACE;
  public exampleIterfaceAccessListHeader = ACCESS_LIST_HEADER_INTERFACE;
  public exampleIterfaceAccessListAccess = ACCESS_LIST_ACCESS_INTERFACE;
  public exampleIterfaceAccessListCategory = ACCESS_LIST_ACCESSCATEGORY_INTERFACE;
  public exampleIterfaceAccessListFooter = ACCESS_LIST_FOOTER_INTERFACE;

  public exampleDBAccessListInterface = ACCESS_LIST_INTERFACE_DATA_SOURCE;
  public exampleDBAccessListInterfaceHeader = ACCESS_LIST_HEADER_INTERFACE_DATA_SOURCE;
  public exampleDBAccessListInterfaceAccess = ACCESS_LIST_ACCESS_INTERFACE_DATA_SOURCE;
  public exampleDBAccessListInterfaceAccessCategory = ACCESS_LIST_ACCESSCATEGORY_INTERFACE_DATA_SOURCE;
  public exampleDBAccessListInterfaceFooter = ACCESS_LIST_FOOTER_INTERFACE_DATA_SOURCE;
}
