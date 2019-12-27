import {Component} from '@angular/core';

@Component({
  selector: 'app-refill-card',
  templateUrl: './refill-card-tkb.component.html',
  styleUrls: ['./refill-card-tkb.component.scss']
})
export class RefillCardTkbComponent {
  loaded = false;
  MerchURL = 'ya.ru';
  ShowReturnButton = true;
  visa = false;
  master = false;
  mir = false;
  AmEx = false;
  maestro = false;
  onSubmit = true;
  offert = false;
  order = {
    merchantName: 'String',
    description: 'String',
    orderId: 'String'
  };
}
