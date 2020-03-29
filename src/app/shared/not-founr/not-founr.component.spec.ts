import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFounrComponent } from './not-founr.component';

describe('NotFounrComponent', () => {
  let component: NotFounrComponent;
  let fixture: ComponentFixture<NotFounrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotFounrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFounrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
