import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberoneComponent } from './numberone.component';

describe('NumberoneComponent', () => {
  let component: NumberoneComponent;
  let fixture: ComponentFixture<NumberoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
