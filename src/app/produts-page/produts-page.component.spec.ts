import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutsPageComponent } from './produts-page.component';

describe('ProdutsPageComponent', () => {
  let component: ProdutsPageComponent;
  let fixture: ComponentFixture<ProdutsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
