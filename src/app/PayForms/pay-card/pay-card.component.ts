import {Component} from '@angular/core';

@Component({
  selector: 'app-pay-card',
  templateUrl: './pay-card.component.html',
  styleUrls: ['./pay-card.component.scss']
})
export class PayCardComponent {
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
