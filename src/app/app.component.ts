import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
