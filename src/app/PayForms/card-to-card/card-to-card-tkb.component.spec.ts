import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CardToCardTkbComponent} from './card-to-card-tkb.component';

describe('CardToCardLiteComponent', () => {
  let component: CardToCardTkbComponent;
  let fixture: ComponentFixture<CardToCardTkbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardToCardTkbComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardToCardTkbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
