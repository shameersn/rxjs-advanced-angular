import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncRxComponent } from './async-rx.component';

describe('AsyncRxComponent', () => {
  let component: AsyncRxComponent;
  let fixture: ComponentFixture<AsyncRxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsyncRxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncRxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
