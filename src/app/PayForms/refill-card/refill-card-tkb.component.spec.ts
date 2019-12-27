import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RefillCardTkbComponent} from './refill-card-tkb.component';

describe('RefillCardLiteComponent', () => {
  let component: RefillCardTkbComponent;
  let fixture: ComponentFixture<RefillCardTkbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RefillCardTkbComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefillCardTkbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
