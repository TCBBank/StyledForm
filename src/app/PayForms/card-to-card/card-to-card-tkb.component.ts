import {Component} from '@angular/core';

@Component({
  selector: 'app-card-to-card',
  templateUrl: './card-to-card-tkb.component.html',
  styleUrls: ['./card-to-card-tkb.component.scss']
})
export class CardToCardTkbComponent {
  loaded = false;
  MerchURL = 'ya.ru';
  ShowReturnButton = true;
  visa = false;
  master = false;
  mir = false;
  AmEx = false;
  maestro = false;
  onSubmit = true;
  TargetVisa = false;
  TargetMaster = false;
  TargetMir = false;
  TargetAmEx = false;
  TargetMaestro = false;
  offert = false;
  order = {
    merchantName: 'String',
    description: 'String',
    orderId: 'String'
  };
}
