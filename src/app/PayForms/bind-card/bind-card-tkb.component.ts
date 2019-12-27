import {Component} from '@angular/core';

@Component({
  selector: 'app-bind-card-tkb',
  templateUrl: './bind-card-tkb.component.html',
  styleUrls: ['./bind-card-tkb.component.scss']
})
export class BindCardTkbComponent {
  loaded = false;
  MerchURL = 'ya.ru';
  ShowReturnButton = true;
  visa = false;
  master = false;
  mir = false;
  AmEx = false;
  maestro = false;
  onSubmit = true;
  order = {
    merchantName: 'String',
    description: 'String',
    orderId: 'String'
  };
}
