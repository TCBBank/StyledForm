import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BindCardTkbComponent} from './bind-card-tkb.component';

describe('BindCardTkbComponent', () => {
  let component: BindCardTkbComponent;
  let fixture: ComponentFixture<BindCardTkbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BindCardTkbComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BindCardTkbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
